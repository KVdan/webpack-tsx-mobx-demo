import React from 'react';
import "./styles.css";
import "antd/dist/antd.css";
import CaoshiStore from "./store/Store";
import CaoshiList from "./components/CaoshiList";

const caoshiStore = new CaoshiStore();

export default function App() {
  return (
    <div className="App">
      <h1>曹操诗集</h1>
      <CaoshiList store={caoshiStore} />
    </div>
  );
}
