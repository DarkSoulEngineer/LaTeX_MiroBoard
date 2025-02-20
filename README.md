# LaTeX Integration for Miro Board  
**Seamlessly Convert LaTeX to Rendered Math Formulas with OpenAI**


### Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)


---

## Overview  
This Miro app auto-detects LaTeX syntax in text boxes on your Miro board and converts it into beautifully rendered math formulas using OpenAI. The formulas are displayed as high-quality PNG images in a dedicated mini-app panel on the left side of your board. Perfect for educators, engineers, and researchers collaborating on technical content!

---

## Features  
- **Auto-Detect LaTeX**: Recognizes LaTeX syntax (e.g., `$\frac{x}{y}$`) in Miro text boxes.  
- **OpenAI-Powered Conversion**: Leverages OpenAI's API to generate accurate LaTeX formula images.  
- **Mini-App Preview Panel**: View and manage rendered formulas in a left-side panel.  
- **Real-Time Updates**: Formulas re-render automatically when LaTeX code is modified.  
- **Editable Formulas**: Click any image in the panel to edit the original LaTeX.  

---

## Installation
1. **Install the App**:
   - Run npm install in the project directory.
   - Run npm run build to build the project.
   - Run npm start to start the development server.
   - Open http://localhost:3000 in your browser.
   - Click the "Install App" button to install the app on your Miro board.
   - Grant permissions to access your Miro boards.
   - Click the "Install App" button to install the app on your Miro board.

2. **Configure OpenAI API Key**:  
   - Open the mini-app panel on the left.  
   - Go to **Settings** → **API Configuration** and enter your OpenAI API key.  

## Usage  
### Step 1: Write LaTeX in Miro  
- Create a text box on your Miro board.  
- Wrap LaTeX formulas in `$` delimiters (e.g., `$E=mc^2$`).  

### Step 2: Open the Mini-App Panel  
- Click the **LaTeX Renderer** icon on the left toolbar to open the preview panel.  

### Step 3: Convert & Manage Formulas  
- Detected LaTeX will automatically appear in the panel.  
- Click **Convert** to generate a PNG image of the formula.  
- Image will apear on board in the same location as the LaTeX code.

### Editing Formulas  
- Click a rendered formula in the panel to edit its LaTeX code.  
- Changes sync in real time across the board.  

---

## Configuration  
### OpenAI API Key  
1. Obtain an API key from [OpenAI](https://platform.openai.com/account/api-keys).  
2. Add it to the app via the mini-app panel’s **Settings** menu.  
