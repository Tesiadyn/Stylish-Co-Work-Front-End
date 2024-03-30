import React, { useState } from "react";
import styles from "./Coupon.module.css";
const coupons = [
  {
    coupon_title: "會員首購優惠",
    description: "加入會員即享滿$1000現折100優惠",
    discount_amt: 100,
    min_expense: 1000,
    expire_time: "2024/6/29",
  },
  {
    coupon_title: "會員首購優惠",
    description: "加入會員即享滿$1000現折100優惠",
    discount_amt: 100,
    min_expense: 1000,
    expire_time: "2024/6/29",
  },
];
const Coupon = ({ isCouponOpen, setIsCouponOpen }) => {
  const { modal, closedModal } = styles;
  return (
    <div className={isCouponOpen ? modal : closedModal}>
      <form
        className={styles.modalContent}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <h2>選擇優惠券</h2>
        <article>
          {coupons.map((item, index) => {
            return (
              <div className={styles.oneCoupon}>
                <label htmlFor={index} className={styles.label}>
                  <figure>
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.75 6.75L4.5 6H20.25L21 6.75V10.7812H20.25C19.5769 10.7812 19.0312 11.3269 19.0312 12C19.0312 12.6731 19.5769 13.2188 20.25 13.2188H21V17.25L20.25 18L4.5 18L3.75 17.25V13.2188H4.5C5.1731 13.2188 5.71875 12.6731 5.71875 12C5.71875 11.3269 5.1731 10.7812 4.5 10.7812H3.75V6.75ZM5.25 7.5V9.38602C6.38677 9.71157 7.21875 10.7586 7.21875 12C7.21875 13.2414 6.38677 14.2884 5.25 14.614V16.5L9 16.5L9 7.5H5.25ZM10.5 7.5V16.5L19.5 16.5V14.614C18.3632 14.2884 17.5312 13.2414 17.5312 12C17.5312 10.7586 18.3632 9.71157 19.5 9.38602V7.5H10.5Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                  </figure>
                  <figcaption className={styles.figcaption}>
                    <h3>折{item.discount_amt}</h3>
                    <p>{item.coupon_title}</p>
                    <p>低消{item.min_expense}</p>
                    <p>還差{}元可使用</p>
                    <p>使用期限 {item.expire_time}</p>
                  </figcaption>
                </label>
                <input type="radio" id={index} name="coupon" value={index} />
              </div>
            );
          })}
        </article>
        <div className={styles.buttons}>
          <div onClick={() => setIsCouponOpen(false)}>取消</div>
          <button onClick={() => setIsCouponOpen(false)}>好</button>
        </div>
      </form>
    </div>
  );
};

export default Coupon;
