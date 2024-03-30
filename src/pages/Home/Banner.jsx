import React, { useEffect } from "react";
import styles from "./Banner.module.css";
import { useState } from "react";

const Banner = () => {
  const [modalClassName, setModalClassName] = useState(styles.modal);

  return (
    <>
      {/* The Modal */}
      <div id="myModal" className={modalClassName}>
        {/* Modal content */}
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <span
              className={styles.close}
              onClick={() => setModalClassName(styles.closedModal)}
            >
              ×
            </span>
            <h2></h2>
          </div>
          <div className={styles.modalBody}>
            <p>玩遊戲抽優惠券！</p>
            <a href="/game">
              <button>登入後進入遊戲</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
