import React, { useEffect, useState } from "react";
import newApi from "../../utils/newApi";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(false);
  // useEffect(() => {
  //     const token=localStorage.getItem('token')
  //     (async function shouldBeMember(token){
  //         const {status}=await newApi.shouldBeMember(token)
  //         console.log(status);
  //         // if(status)
  //     })()
  //   }, []);

  if (isLogIn) return <div>Profile</div>;
  if (!isLogIn) navigate("/signupPage");
};

export default Profile;
