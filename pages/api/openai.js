import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const promptEngineering = "***max_words=1: YOUR TASK IS TO PASTE THE GIVEN EQUATION IN LATEX FORMAT AND ENCODED IN URL FORMAT LINK, WRITE ONLY THE RESULTED LINK AS VALID URL WITHOUT '<p>', </p>', '$$' FROM THE PROMPT : https://latex.codecogs.com/svg.image?,"

export default async (req, res) => {
  const prompt = promptEngineering + req.body.prompt;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const generatedText = response.choices[0].message.content;

    res.status(200).json({
      success: true,
      data: generatedText,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      error: "The text could not be generated",
    });
  }
};

// THIS APP WILL BE CHANGE AND OPTIMIZED 