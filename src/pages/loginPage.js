import React, { useContext } from "react";
import Header from "../components/headerMovie";
import { AuthContext } from "../contexts/authContext";

const LoginPage = () => {
  const { authenticate } = useContext(AuthContext);

  const login = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate("user1", password);
  };

  return (
    <>
      <br></br>
      <h2 style={{ fontFamily: "Helvetica", color: "#581845",marginTop:100,padding: 20  }}>
        Login page
      </h2>
      <p style={{ fontFamily: "Helvetica", color: "#581845", padding: 20 }}>
        THESE PAGES ARE PROTECTED YOU MUST LOGIN!!!{" "}
      </p>
      {/* Login web form  */}
      <button
        onClick={login}
        style={{
          marginLeft: 20,
          fontFamily: "Helvetica",
          fontSize: 20,
          background: "#FFC300",
          color: "#581845",
          padding: 20,
        }}
      >
        Submit
      </button>
    </>
  );
};

export default LoginPage;
