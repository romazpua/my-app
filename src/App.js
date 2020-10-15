import React from 'react';
import './App.scss';
import Header from "./components/Header";
import BodyShop from "./components/BodyShop";
import SinglePage from "./components/SinglePage";
import Test from "./components/Test";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path="/">
          <BodyShop/>
        </Route>
        <Route exact path="/single">
          <SinglePage/>
        </Route>
        <Route exact path="/clicker">
          <Test/>
        </Route>
        <Route exact path="*">
          <>
            <h1 style={{textAlign: 'center', fontSize: '4rem', color: '#0e5a5f'}}>404 :(</h1>
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#17787f'}}>Такой страницы не существует</h2>
          </>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
