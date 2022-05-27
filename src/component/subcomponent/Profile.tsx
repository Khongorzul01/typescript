import React from "react";
import { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.results[0].name.last);
      });
  }, []);
  const style = {
    body1: {
      height: "800px",
      background:
        "linear-gradient(180deg, rgba(64,64,64,1) 0%, rgba(76,76,76,1) 35%, rgba(255,255,255,1) 100%)",
    },
    container: {
      width: "80%",
      margin: "0 auto",
    },
    profile: {
      backgroundColor: "#E0E0E0",
      width: "600px",
      margin: "0 auto",
      alignItems: "center",
    },
    proimg: {
      borderRadius: "50%",
      border: "1px black solid",
      padding: "5px",
    },
    header: {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      height: "80px",
    },
  };
  return (
    <div>
      <div style={style.body1}>
        <div style={style.profile}>
          <img style={style.proimg} src="icon/adduser.png" alt="" />

          <p>Hi, My name is</p>
          <h1>{name}</h1>
        </div>
      </div>
      <div style={style.header}>©Copyright</div>
    </div>
  );
}
