# CodeBin

CodeBin is a simple web application that allows you to share code snippets with others. It's similar to popular services like _Hastebin_ or _Pastebin_, but with a minimalist and _easy-to-use_ interface.

## Installation

To install CodeBin, you'll need to have Node.js and npm installed on your system. Then, you can follow these steps: 

1. Clone the repository

```bash
git clone https://github.com/jonathanbc10/codebin.git

```

2. Install dependencies:
```bash
cd codebin
npm install

```

3. Create a .env file and set the following environment variables:
```bash
SERVER_PORT=3000
DB_URL=mongodb://127.0.0.1:27017/codebin

```

4. Start the server
```
npm start

```

The server should now be running at http://localhost:3000/.

## Usage

CodeBin provides a simple interface for creating and sharing code snippets. Here's how to use it:

1. Go to http://localhost:3000/.

2. Click the "New" button to create a new code snippet.

3. Write your code in the editor.

4. Click the "Save" button to save your snippet. You'll be redirected to a new URL that looks something like http://localhost:3000/abcd1234.

5. Share the URL with others to let them see your code snippet.

6. If you want to edit your code snippet, simply go to the URL and make changes.

7. If you want to duplicate a code snippet, click the "Duplicate" button on the page and a new page will be opened with the same code.

## Dependencies

CodeBin uses the following dependencies:

+ __dotenv__: For loading environment variables.
+ __ejs__: For rendering HTML templates.
+ __express__: For creating the web server.
+ __mongoose__: For connecting to and interacting with the + MongoDB database.
+ __nodemon__: For automatically restarting the server when + changes are made.

## Authors

- [@jonathanbc10](https://github.com/jonathanbc10/)


## License

The project is licensed under the [MIT License.](https://choosealicense.com/licenses/mit/)


## Acknowledgements

- Syntax highlighting by [highlight.js](https://cdnjs.com/libraries/highlight.js)
    + Tema: [silk-dark](https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/silk-dark.min.css)
- Autosize for textarea element by [autosize.js](https://cdnjs.com/libraries/autosize.js)
- '_Logo_' font [Gajraj One](https://fonts.google.com/specimen/Gajraj+One) by Google Fonts