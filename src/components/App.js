
import React from "react";
import { Provider } from 'react-redux';
import './../styles/App.css';
import { store } from "../redux/store";
import LoremIpsum from "./loremIpsum";

const App = () => {
  return (
    <Provider store={store}>
        {/* Do not remove the main div */}
        <LoremIpsum />
    </Provider>
  )
}

export default App
