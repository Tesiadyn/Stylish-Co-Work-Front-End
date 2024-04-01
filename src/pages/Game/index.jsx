import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";
const Game = () => {
  const [chance, setChance] = useState(1);
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
  const { coupon_title, description, discount_amt, min_expense, expire_days } =
    coupon;
  function handleCardFlip() {
    if (isPlayingGame === false) return;
    setCardClassName(thecardHovered);
  }
  async function getCoupons() {
    try {
      const token = localStorage.getItem("token");
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
      console.log("優惠", data.coupon);
      setcoupon(data.coupon);
    } catch (error) {
      console.log(error);
    }
  }
  // async function getChances() {
  //   const token = localStorage.getItem("token");
  //   const response = await fetch(
  //     "https://zackawesome.net/api/1.0/coupon/startGame",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   const { chances } = await response.json();
  //   console.log("次數", chances);
  //   setChance(chances);
  // }
  useEffect(() => {
    // getCoupons();
    // async function getFirstCoupon() {
    //   const token = localStorage.getItem("token");
    //   const response = await fetch(
    //     "https://zackawesome.net/api/1.0/coupon/gamePage",
    //     {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   console.log("第一個優惠", data.coupon);
    //   setcoupon(data.coupon);
    // }
    // getChances();
  }, []);
  function handleButtonClick() {
    setChance((c) => c - 1);
    setCardClassName(thecard);
    setisPlayingGame(true);
    // getCoupons();
    // getChances();
  }
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={cardClassName} onClick={handleCardFlip}>
          <div className={styles.thefront}>
            <h1></h1>
            <p>皇上請翻牌</p>
          </div>
          <div className={styles.theback}>
            <h1>恭喜獲得</h1>
            <h3>{coupon_title}</h3>
            <p>{description}</p>
            <span>消費滿{min_expense}</span>
            <span>折扣{discount_amt}元</span>
            <p>效期{expire_days}天</p>
          </div>
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
