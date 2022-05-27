import React from "react";
import "../../../src/index.css";
import Index1 from "./Profile";

const style = {
  header: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "80px",
  },
  button: {
    borderRadius: "10px",
    color: "white",
    margin: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "30px",
    paddingLeft: "20px",
    marginRight: "100px",
    marginLeft: "20px",
    textDecoration: "none",
  },
  img: {
    width: "30px",
  },
  body1: {
    height: "800px",
    background:
      "linear-gradient(180deg, rgba(64,64,64,1) 0%, rgba(76,76,76,1) 35%, rgba(255,255,255,1) 100%)",
  },
  container: {
    width: "80%",
    margin: "0 auto",
  },
};

export default function Header() {
  return (
    <div style={style.container}>
      <div style={style.header}>
        <a href="" className="" style={style.button}>
          <img style={style.img} src="icon/home-icon.png" alt="" />
          Header
        </a>
        <a href="" className="" style={style.button}>
          <img style={style.img} src="icon/adduser.png" alt="" />
          Users
        </a>
        <a href="" className="" style={style.button}>
          <img style={style.img} src="icon/users.png" alt="" />
          Add User
        </a>
        <a href="" className="" style={style.button}>
          <img style={style.img} src="icon/error.png" alt="" />
          Not Found
        </a>
      </div>
      <Index1 />
    </div>
  );
}
