import React, { useEffect } from "react";
import styles from "./Banner.module.css";
import { useState } from "react";
import newApi from "../../utils/newApi";
import api from "../../utils/api";
const Banner = () => {
  const { modal, closedModal } = styles;
  const [modalClassName, setModalClassName] = useState(closedModal);
  useEffect(() => {
    // (async function getUserData(){
    //     const data=await newApi.getUserData()
    //     // if chance >0 ==> setModalClassName(modal)
    // })()
    ////////////////test
    // (async function getCampaigns() {
    //   const { data } = await api.getCampaigns();
    //   if (data.length > 0) setModalClassName(modal);
    // })();
  }, []);
  return (
    <>
      {/* The Modal */}
      <div id="myModal" className={modalClassName}>
        {/* Modal content */}
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <span
              className={styles.close}
              onClick={() => setModalClassName(closedModal)}
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
