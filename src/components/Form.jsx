import React from "react";
import Input from "./Input";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password " placeholder="Password " />
      <Input type="password " placeholder="Confirm Password " />
      <button type="submit">Register</button>
    </form>
  );
}

function SecondForm() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password " placeholder="Password " />
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
export { SecondForm };
