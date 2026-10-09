# LaTeX_MiroBoard
**AI detection and rendering of LaTeX text boxes on Miro Board using the Miro SDK and OpenAI**

[![License](https://img.shields.io/github/license/DarkSoulEngineer/LaTeX_MiroBoard)](LICENSE)
![JavaScript](https://img.shields.io/github/languages/DarkSoulEngineer/LaTeX_MiroBoard)

![LaTeX formulas rendered on a Miro board](https://github.com/user-attachments/assets/aaf9f829-5b7b-4c03-9c17-eaf89acaf9d6)

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Description

This Miro app auto-detects LaTeX syntax in text boxes on your Miro board and converts it into rendered math formulas using OpenAI. The formulas are displayed as high-quality PNG images in a dedicated mini-app panel on the left side of your board. It is intended for educators, engineers, and researchers collaborating on technical content. The app is built with Next.js, React, and the Miro SDK.

### Features

- **Auto-Detect LaTeX**: Recognizes LaTeX syntax (e.g., `$\frac{x}{y}$`) in Miro text boxes.
- **OpenAI-Powered Conversion**: Leverages OpenAI's API to generate accurate LaTeX formula images.
- **Mini-App Preview Panel**: View and manage rendered formulas in a left-side panel.
- **Real-Time Updates**: Formulas re-render automatically when LaTeX code is modified.
- **Editable Formulas**: Click any image in the panel to edit the original LaTeX.

## Requirements

- Node.js and npm
- A Miro account with permission to install apps on a board
- An OpenAI API key

## Installation

1. **Install the app**

   ```bash
   npm install
   npm run build
   npm start
   ```

   - Open `http://localhost:3000` in your browser.
   - Click the **Install App** button to install the app on your Miro board.
   - Grant permissions to access your Miro boards.

2. **Configure OpenAI API key**

   - Open the mini-app panel on the left.
   - Go to **Settings** → **API Configuration** and enter your OpenAI API key.

## Usage

### Step 1: Write LaTeX in Miro

- Create a text box on your Miro board.
- Wrap LaTeX formulas in `$` delimiters (e.g., `$E=mc^2$`).

### Step 2: Open the Mini-App Panel

- Click the **LaTeX Renderer** icon on the left toolbar to open the preview panel.

### Step 3: Convert and Manage Formulas

- Detected LaTeX will automatically appear in the panel.
- Click **Convert** to generate a PNG image of the formula.
- The image will appear on the board in the same location as the LaTeX code.

### Editing Formulas

- Click a rendered formula in the panel to edit its LaTeX code.
- Changes sync in real time across the board.

## Configuration

### OpenAI API Key

1. Obtain an API key from [OpenAI](https://platform.openai.com/account/api-keys).
2. Add it to the app via the mini-app panel's **Settings** menu.

## License

Apache-2.0 — see [LICENSE](LICENSE).
