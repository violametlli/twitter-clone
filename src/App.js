import React from "react";
import './App.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";


function App() {
  return (
    <div className="app">

      {/* Sidebar */}
    
    < Sidebar />

      {/* Feed*/}

    < Feed /> 

      {/* Widget */}

< Widgets />
    </div>
  );
}

export default App;
