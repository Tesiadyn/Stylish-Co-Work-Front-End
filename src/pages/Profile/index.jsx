import React, { useEffect, useState } from "react";
import newApi from "../../utils/newApi";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    async function shouldBeMember(token) {
      try {
        const data = await newApi.shouldBeMember(token);
        console.log(data);
        console.log(data.status);
        if (data.status === 200) {
          console.log("成功");
          setisLoggedIn(true);
          navigate("/profile");
        } else {
          navigate("/signup");
        }
      } catch (error) {
        console.log(error.code);
        navigate("/signup");
      }
    }
    shouldBeMember(token);
  }, []);
  if (isLoggedIn)
    return (
      <>
        <h1 style={{ margin: "100px 0 10px 100px" }}>您已登入</h1>
        <a href="/">
          <button style={{ marginLeft: "100px" }}>前往購物</button>
        </a>
      </>
    );
};

export default Profile;
