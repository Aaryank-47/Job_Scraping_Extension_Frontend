import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const root = document.createElement('div')
root.id = 'crx-shadow-host'
document.body.appendChild(root)

// Create a shadow root and attach it to the div element
const shadowRoot = root.attachShadow({ mode: 'open' })

// inject a style tag
const styleE1 = document.createElement('style');
styleEl.textContent = `
:host {
  all: initial;
}
`;
shadow.appendChild(styleEl);

//MOunting react app iniside shadow DOM
const appContainer = document.createElement('div');
shadow.appendChild(appContainer);

const rootElement = ReactDOM.createRoot(appContainer);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);