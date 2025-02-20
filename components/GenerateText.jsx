'use strict';

import React, { useEffect, useState } from 'react';
import Toggle from './Toggle';

async function getItemsOnBoard() {
  try {
    return await miro.board.get({ type: 'text' });
  } catch (error) {
    console.error('Failed to fetch texts:', error);
    throw error;
  }
}

async function CreateImageOnBoard(image) {
  try {
    return await miro.board.createImage(image);
  } catch (error) {
    console.error('Failed to create image:', error);
    throw error;
  }
}

async function RemoveImageOnBoard(item) {
  try {
    return await miro.board.remove(item);
  } catch (error) {
    console.error('Failed to remove text:', error);
    throw error;
  }
}

async function OpenAIRequest(formulaText) {
  const prompt_engineering = "***max_words=1: YOUR TASK IS TO PASTE THE GIVEN EQUATION IN LATEX FORMAT AND ENCODED IN URL FORMAT LINK, WRITE ONLY THE RESULTED LINK AS VALID URL FROM THE PROMPT : https://latex.codecogs.com/svg.image?,"
  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt_engineering + formulaText }),
    });

    if (!response.ok) {
      throw new Error(`Failed to generate text. Status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error in OpenAIRequest:', err);
    throw err;
  }
}

export const BoardItems = () => {
  const [state, setState] = useState({
    formattedFormulas: [],
    checkedItems: {},
    formulaUrl: '',
    loading: true,
    items: {},
  });

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const items = await getItemsOnBoard();    
        const formulas = items
          .map((text) => text.content.match(/\$(.*?)\$/))
          .filter((match) => match !== null)
          .map((match, index) => ({ id: index, content: match[1] }));

        setState((prev) => ({ ...prev, formattedFormulas: formulas, loading: false , items:items}));
      } catch (error) {
        console.error('Failed to fetch texts:', error);
      }
    };

    fetchTexts();
  }, []);

  const handleToggle = async (index) => {
    try {
      setState((prev) => ({
        ...prev,
        checkedItems: { ...prev.checkedItems, [index]: !prev.checkedItems[index] },
      }));

      if (!state.checkedItems[index]) {
        const response = await OpenAIRequest(state.formattedFormulas[index].content);
        setState((prev) => ({ ...prev, formulaUrl: response.data}));

        //IMPLEMENT FUNCTION: CREATE IMAGE WITH (URL, X, Y, WIDTH) AND REMOVE ITEM
        const image = {
          url: state.formulaUrl,
          x: state.items[index].x,
          y: state.items[index].y,
          width: state.items[index].width,
        };
        CreateImageOnBoard(image);
        RemoveImageOnBoard(state.items[index])

      };
    } catch (error) {
      console.error('Error handling toggle:', error);
    }
  };

  return (
    <div>
      <p className="font-heading">List of Math Formula's</p>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <div class="scrollable-example">      
          {state.formattedFormulas.map((item, index) => (
            <div className="app-card" style={{borderBottomColor: '#492E87', borderTopColor: '#492E87', borderLeftColor: '#492E87', borderRightColor: '#492E87'}}>
              <h1 className="app-card--title" style={{color: '#492E87', paddingBottom:'12px', fontSize:'25px'}}>Change this to LaTeX ?</h1>
              <h1 class="app-card--description p-medium" style={{color: '#0A1D56', paddingTop:'12px', paddingBottom:'18px', paddingLeft:'10px', fontSize:'24px'}}>{item.content}</h1>
              <div class="app-card--body">
              <p> No/Yes </p>
                <div class="app-card--tags">
                <span class="tag">
                <Toggle value={state.checkedItems[index]} onChange={() => handleToggle(index)} />
                </span>
                </div>
                <svg class="app-card--app-logo"
				        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			          <circle r="12" cx="12" cy="12" fill="var(--indigo700)"/>
		          </svg>
            </div>
            </div>  
          ))};
        </div>      
      )}
    </div>
  );
};