import React from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route} from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/Login"

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle/>
        <BrowserRouter>
          <Header/>
          <div>
            <Route path ='/' exact component={Home}/>
            <Route path ='/detail/:id' exact component={Detail}/>
            <Route path ='/login/' exact component={Login}/>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
