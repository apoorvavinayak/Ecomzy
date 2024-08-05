import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div><Toaster/></div>
          <Provider store={Store}>
                   <App />
          </Provider>
  </BrowserRouter>
 

    
  
);
