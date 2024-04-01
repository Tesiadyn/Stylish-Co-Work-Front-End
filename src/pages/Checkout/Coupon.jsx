import React, { useState } from "react";
import styles from "./Coupon.module.css";
import couponImg from "../../components/couponIcons/coupon.png";
const Coupon = ({
  isCouponOpen,
  setIsCouponOpen,
  couponDatas,
  couponFormInput,
  setCouponFormInput,
  subtotal,
}) => {
  const availables = couponDatas.filter((item) => item.coupon_status === "0");
  const used = couponDatas.filter((item) => item.coupon_status === "1");
  const expired = couponDatas.filter((item) => item.coupon_status === "2");
  console.log(availables, used, expired);
  const { modal, closedModal } = styles;
  return (
    <div className={isCouponOpen ? modal : closedModal}>
      <form
        className={styles.modalContent}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>可使用</h2>
        <article className={styles.coupons}>
          {!couponDatas[0].coupon_title ? (
            <p style={{ margin: "30px" }}>嗚嗚！目前沒有優惠券</p>
          ) : (
            <>
              {availables.map((item, index) => {
                const gap = item.min_expense - subtotal;
                return (
                  <div className={styles.oneCoupon} key={index}>
                    <label htmlFor={index} className={styles.label}>
                      <figure>
                        <img
                          src={couponImg}
                          alt="coupon"
                          className={
                            gap > 0
                              ? styles.couponIconDisabled
                              : styles.couponIcon
                          }
                        />
                      </figure>
                      <figcaption
                        className={
                          gap > 0
                            ? styles.figcaptionDisabled
                            : styles.figcaption
                        }
                      >
                        <h3>折{item.discount_amt}</h3>
                        <p>{item.coupon_title}</p>
                        <p>低消{item.min_expense}</p>

                        {gap > 0 ? (
                          <span style={{ color: "rgba(255,0,0,0.5)" }}>
                            還差{gap}元可使用
                          </span>
                        ) : null}
                        <p>使用期限 {item.expire_time.slice(0, 10)}</p>
                      </figcaption>
                    </label>
                    <input
                      disabled={gap > 0}
                      type="radio"
                      id={index}
                      name="coupon"
                      value={index}
                      checked={couponFormInput === index.toString()}
                      onChange={(e) => setCouponFormInput(e.target.value)}
                    />
                  </div>
                );
              })}
              {used.map((item, index) => {
                return (
                  <div>
                    <h2 style={{ marginTop: "20px" }}>已使用</h2>
                    <div className={styles.oneCoupon} key={index}>
                      <label htmlFor={index} className={styles.label}>
                        <figure>
                          <img
                            src={couponImg}
                            alt="coupon"
                            className={styles.couponIconDisabled}
                          />
                        </figure>
                        <figcaption className={styles.figcaptionDisabled}>
                          <h3>折{item.discount_amt}</h3>
                          <p>{item.coupon_title}</p>
                          <p>低消{item.min_expense}</p>
                          <p>使用期限 {item.expire_time.slice(0, 10)}</p>
                        </figcaption>
                      </label>
                      <input
                        disabled={true}
                        type="radio"
                        id={index}
                        name="coupon"
                      />
                    </div>
                  </div>
                );
              })}
              {used.map((item, index) => {
                return (
                  <div>
                    <h2 style={{ marginTop: "20px" }}>已失效</h2>
                    <div className={styles.oneCoupon} key={index}>
                      <label htmlFor={index} className={styles.label}>
                        <figure>
                          <img
                            src={couponImg}
                            alt="coupon"
                            className={styles.couponIconDisabled}
                          />
                        </figure>
                        <figcaption className={styles.figcaptionDisabled}>
                          <h3>折{item.discount_amt}</h3>
                          <p>{item.coupon_title}</p>
                          <p>低消{item.min_expense}</p>
                          <p>使用期限 {item.expire_time.slice(0, 10)}</p>
                        </figcaption>
                      </label>
                      <input
                        disabled={true}
                        type="radio"
                        id={index}
                        name="coupon"
                      />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </article>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setIsCouponOpen(false);
              setCouponFormInput(null);
            }}
          >
            取消
          </button>
          <button onClick={() => setIsCouponOpen(false)}>好</button>
        </div>
      </form>
    </div>
  );
};

export default Coupon;
