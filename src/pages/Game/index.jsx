import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lotteryAnimation from "../../components/fireworks.json";
import congratAnimation from "../../components/congrat.json";
import styles from "./Game.module.css";
import { useNavigate } from "react-router-dom";
const Game = () => {
  const navigate = useNavigate();
  // const [chance, setChance] = useState(1);
  const [isPlayingGame, setisPlayingGame] = useState(true);
  const { thecard, thecardHovered } = styles;
  const [cardClassName, setCardClassName] = useState(thecard);
  const [coupon, setcoupon] = useState({
    coupon_title: "",
    description: "",
    discount_amt: "",
    min_expense: "",
    expire_time: "",
    expire_days: "",
  });

  function handleCardFlip() {
    if (isPlayingGame === false) return;
    getCoupons();
    setCardClassName(thecardHovered);
    setisPlayingGame(false);
  }
  async function getCoupons() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signup");
        return;
      }
      const response = await fetch(
        "https://zackawesome.net/api/1.0/coupon/gamePage",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log("優惠", data?.coupon);
      setcoupon(data?.coupon);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.maincontainer}>
        <div className={cardClassName} onClick={handleCardFlip}>
          <div className={styles.thefront}>
            <h1>請翻牌</h1>
            <p>*尚未登入者請先登入或註冊 </p>
            <Lottie animationData={lotteryAnimation} loop={true}></Lottie>
          </div>
          <div className={styles.theback}>
            <h1>恭喜獲得</h1>
            <h3>{coupon?.coupon_title}</h3>
            <p>{coupon?.description}</p>
            <span>消費滿{coupon?.min_expense}</span>
            <span>折扣{coupon?.discount_amt}元</span>
            <p>效期{coupon?.expire_days}天</p>
          </div>
          <Lottie
            // style={{ display: "none" }}
            style={{ display: cardClassName === thecard ? "none" : "block" }}
            animationData={congratAnimation}
            loop={true}
          ></Lottie>
        </div>
      </div>

      <section className={styles.section}>
        {/* <p>剩餘抽獎次數：{chance}次</p> */}
        {/* <button
          onClick={handleButtonClick}
          disabled={chance === 0 ? true : false}
        >
          START
        </button> */}
      </section>
    </>
  );
};

export default Game;
