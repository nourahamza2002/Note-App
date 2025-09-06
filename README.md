# Personal Notes Web App

This is a simple Personal Notes Web App built with Node.js, HTML, and CSS. The application allows users to create, view, and delete personal notes. Notes are stored in a JSON file for persistence.

## Project Structure

```
personal-notes-app
├── public
│   ├── index.html       # HTML structure of the web application
│   ├── styles.css       # CSS styles for the web application
│   └── script.js        # JavaScript code for handling user interactions
├── src
│   └── server.js        # Entry point of the Node.js application
├── notes.json           # JSON file for storing notes
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd personal-notes-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the server:**
   ```
   node src/server.js
   ```

4. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage Guidelines

- To add a new note, fill in the title and content in the provided form and submit.
- All notes will be displayed on the main page.
- You can delete individual notes by clicking the delete button next to each note.

## Technologies Used

- Node.js
- Express
- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License.