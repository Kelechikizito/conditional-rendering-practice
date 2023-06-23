import React from "react";
import Form,{SecondForm} from "./Form";


var userIsRegistered = false;

function App() {
  return (
    <div className="container">

      {
        userIsRegistered ?  
        <Form 
        /> : 
        <SecondForm
        />
      }
    </div>
  );
}

export default App;
