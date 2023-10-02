import React, { useState } from "react";

export const AddEmployee = () => {
  //Declare state variables in useState
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //write function that handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    const apiUrl = "http://localhost:4000/add-employee";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = fetch(apiUrl, requestOptions);
    response
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
