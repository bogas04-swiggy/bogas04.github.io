import render from 'preact-render-to-string';
import { h } from 'preact';
import App from './components/index.js';
import { promisify } from 'util';
import fs from 'fs';

const writeFile = promisify(fs.writeFile);

const body = render(<App />);

const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Divjot Singh</title>
    <link rel="icon" href="//github.com/bogas04.png" type="image/jpg"/>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/css/style.css"/>
  </head>
  <body>
    ${body}
  </body>
</html>
`;

writeFile('index.html', html)
  .then(() => console.log('Done!'))
  .catch(err => console.log('Oh no!', err));