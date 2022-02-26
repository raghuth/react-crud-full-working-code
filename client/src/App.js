import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AddClientComponent } from "./components/client/add-client";
import { ClientListComponent } from "./components/client/client-list";
import Login from "./components/login/login";
import { LoginContext } from "./components/context-api/LoginContext";

function App() {
  const [loginUserData] = useState(localStorage.getItem('login user'));
  return (
    <>
      <div style={{ margin: 34 }}>
        <LoginContext.Provider value={{ loginUserData }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="home" element={<ClientListComponent />} />
            <Route path="/client/add" exact element={<AddClientComponent />} />
            <Route
              path="/client/edit/:id"
              exact
              element={<AddClientComponent />}
            />
          </Routes>
        </LoginContext.Provider>
      </div>
    </>
  );
}

export default App;
