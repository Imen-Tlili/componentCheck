import React from "react";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Adresse from "./component/profile/Adresse";
import './App.css';


function App() {
  return (
    <div className="App">
     
      <ProfilePhoto/>
      <FullName/>
      <Adresse/>
    
    </div>
  );
}

export default App;
