import React, { useEffect, useState } from "react";
import newApi from "../../utils/newApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoggedInMessage = styled.h1`
  margin: 100px auto;
  text-align: center;
  font-size: 42px;
`;
const ExitAnchor = styled.a`
  text-decoration: none;
`;
const ExitButtonDiv = styled.div`
  width: 100%;
`;
const ExitButton = styled.button`
  margin: 0 auto;
  display: block;
  background-color: #2c2c2c;
  box-shadow: 3px 3px 5px rgba(63, 63, 63, 0.4);
  color: #f7f7f7;
  font-weight: 600;
  font-size: 24px;
  padding: 8px 40px;
`;

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

  function logout() {
    localStorage.clear();
  }
  if (isLoggedIn)
    return (
      <>
        <LoggedInMessage>您已登入</LoggedInMessage>
        <ExitAnchor href="/">
          <ExitButtonDiv>
            <ExitButton>前往購物</ExitButton>
          </ExitButtonDiv>
        </ExitAnchor>
        <ExitButtonDiv>
          <ExitButton onClick={logout}>登出</ExitButton>
        </ExitButtonDiv>
      </>
    );
};

export default Profile;
