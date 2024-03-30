import React, { useState } from "react";
import styles from "./Game.module.css";
const Game = () => {
  const [chance, setChance] = useState(3);
  const [isPlayingGame, setisPlayingGame] = useState(false);
  const { thecard, thecardHovered } = styles;
  const [cardClassName, setCardClassName] = useState(thecard);
  const [coupon, setcoupon] = useState({
    coupon_title: "會員首購優惠",
    description: "加入會員即享滿$1000現折100優惠",
    discount_amt: 100,
    min_expense: 1000,
    expire_time: "2024/6/29",
  });
  const { coupon_title, description, discount_amt, min_expense, expire_time } =
    coupon;
  function handleCardFlip() {
    if (isPlayingGame === false) return;
    setCardClassName(thecardHovered);
  }
  async function getUserData() {
    //     const response= await fetch('xxxxxxxx')
    // const data= await response.json()
    // setcoupon(data)
  }
  function handleButtonClick() {
    setChance((c) => c - 1);
    setCardClassName(thecard);
    setisPlayingGame(true);
    // request coupon data
    getUserData();
  }
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={cardClassName} onClick={handleCardFlip}>
          <div className={styles.thefront}>
            <h1></h1>
            <p>點我抽優惠券</p>
          </div>
          <div className={styles.theback}>
            <h1>恭喜獲得</h1>
            <h3>{coupon_title}</h3>
            <p>{description}</p>
            <span>消費滿{min_expense}</span>
            <span>折扣{discount_amt}元</span>
            <p>使用期限{expire_time}</p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <p>剩餘遊戲次數：{chance}次</p>
        <button
          onClick={handleButtonClick}
          disabled={chance === 0 ? true : false}
        >
          開始遊戲
        </button>
      </section>
    </>
  );
};

export default Game;
