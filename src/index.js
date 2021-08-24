import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
console.log('hello world');
var rootElement = document.getElementById("root");
ReactDOM.render(_jsx(StrictMode, { children: _jsx(App, {}, void 0) }, void 0), rootElement);
