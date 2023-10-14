import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);
    // send data to the server
    const apiUrl = "http://23.22.225.6:4000/login";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    const response = fetch(apiUrl, requestOptions);
    response
      .then((res) => res.json())
      .then((data) => {
        setResponseMessage(data.message);
        if (data.status === "success") {
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="notice">
        <h2>{responseMessage}</h2>
      </div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
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
}

export default Login;
