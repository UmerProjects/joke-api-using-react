import { useState } from "react";

export default function Form() {
  let [formData, setFormdata] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  //   let handleInputChange = (event) => {
  //     setFullname(event.target.value);
  //   };
  //   let handleUsername = (event) => {
  //     setUsername(event.target.value);
  //   };
  let handleInputChange = (event) => {
    setFormdata((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormdata({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full name</label>
      <input
        type="text"
        placeholder="Enter you full name"
        value={formData.fullName}
        id="fullname"
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">username</label>
      <input
        type="text"
        placeholder="Enter you User name"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter you password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
