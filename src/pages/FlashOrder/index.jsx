import flashorder from '../../css/FlashOrder.module.css'
import flashstore from '../../css/Flashstore.module.css'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlashContext } from '../../context/flashContext';

const FlashOrder = () => {
    const navigate = useNavigate()
    const [leftMinute, setLeftMinute] = useState(10)
    const [leftSecond, setLeftSecond] = useState(0)

    const { flashProduct } = useContext(FlashContext)

  useEffect(() => {
    window.TPDirect.setupSDK(
      `12348`,
      `app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF`,
      "sandbox"
    );
    window.TPDirect.card.setup({
      // Display ccv field
      fields: {
        number: {
          // css selector
          element: "#card-number",
          placeholder: "**** **** **** ****",
        },
        expirationDate: {
          // DOM object
          element: document.getElementById("card-expiration-date"),
          placeholder: "MM / YY",
        },
        ccv: {
          element: "#card-ccv",
          placeholder: "ccv",
        },
      },
      styles: {
        // Style all elements
        input: {
          color: "gray",
        },
        // Styling ccv field
        "input.ccv": {
          // 'font-size': '16px'
        },
        // Styling expiration-date field
        "input.expiration-date": {
          // 'font-size': '16px'
        },
        // Styling card-number field
        "input.card-number": {
          // 'font-size': '16px'
        },
        // style focus state
        ":focus": {
          // 'color': 'black'
        },
        // style valid state
        ".valid": {
          color: "green",
        },
        // style invalid state
        ".invalid": {
          color: "red",
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        "@media screen and (max-width: 400px)": {
          input: {
            color: "orange",
          },
        },
      },
      isMaskCreditCardNumber: true,
      maskCreditCardNumberRange: {
        beginIndex: 6,
        endIndex: 11,
      },
    });
  }, []);

  // useEffect(() => {
  //     const sum = storage.reduce((acc, store) => acc + (store.price * store.quantity), 0)
  //     setTotal(sum)
  // }, [storage])

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  // const [creditCard, setCreditCard] = useState('');
  // const [expiryDate, setExpiryDate] = useState('')
  // const [cvv, setCvv] = useState('')

  const handleSelectedTime = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get status of TapPay Fields
    const tappayStatus = window.TPDirect.card.getTappayFieldsStatus();
    console.log(tappayStatus);

    // ensure getPrime or not
    if (tappayStatus.canGetPrime === false) {
      alert("can not get prime");
      return;
    }

    // Get prime
    window.TPDirect.card.getPrime((result) => {
      if (result.status !== 0) {
        alert("get prime error " + result.msg);
        return;
      }
      // console.log('get prime 成功，prime: ' + result.card.prime)
      const prime = result.card.prime;
      navigate('/thankyou')
      return
      const authorization = localStorage.getItem("awsToken");
      fetch(`https://api.appworks-school.tw/api/1.0/order/checkout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prime: prime,
          order: {
            shipping: "delivery",
            payment: "credit_card",
            subtotal: flashProduct.product.price,
            freight: 30,
            total: flashProduct.product.price + 30,
            recipient: {
              name: name,
              phone: phone,
              email: email,
              address: address,
              time: selectedTime,
            },
            // "list": [
            //     storage.map(store => {
            //         return {
            //             "id": store.id,
            //             "name": store.name,
            //             "price": store.price,
            //             "color": {
            //                 "name": store.name,
            //                 "color": store.color
            //             },
            //             "size": store.sizes,
            //             "qty": store.quantity
            //         }
            //     },)
            // ]
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("網路錯誤，請稍後再試");
          }
          return response.json();
        })
        .then((data) => {
          // handle data from back-end
          const SR = data.data.number;
          localStorage.setItem("SR", SR);
          navigate("/thank");
        })
        .catch((error) => {
          // handle error
          console.error("發生錯誤:", error);
        });
      // send prime to your server, to pay with Pay by Prime API .
      // Pay By Prime Docs: https://docs.tappaysdk.com/tutorial/zh/back.html#pay-by-prime-api
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("flashtoken")) {
      navigate("/flashsale");
    }
    if (leftMinute == 0 && leftSecond == 0) {
      localStorage.removeItem("flashtoken");
      navigate("/flashsale");
      return;
    }
    const countdown = setInterval(() => {
      setLeftSecond((prevSecond) => prevSecond - 1);
      if (leftSecond == 0) {
        setLeftMinute((prevMinute) => prevMinute - 1);
        setLeftSecond(59);
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [leftSecond]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.removeItem("flashtoken");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // 清除事件監聽器
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

    return (
        <>
            <div className={flashorder.highlightedBox}>
                <div className={flashorder.warningLayout}>
                    <p>恭喜您獲取購買資格！請在10分鐘內結帳</p>
                    <p><b className={flashorder.warning}>{`${leftMinute.toString().padStart(2, '0')}:${leftSecond.toString().padStart(2, '0')}`}</b>後，購買資格將釋出</p>
                    <p className={flashorder.warning}>結帳頁面請勿重載，會導致購賣資格消失</p>
                </div>
            </div>
            {flashProduct &&
                <div className={flashstore.container}>
                    <div className={flashstore.productsListTitle}>
                        <p>您的搶購商品</p>
                        <p>數量</p>
                        <p>單價</p>
                        <p>小計</p>
                    </div>
                    <div className={flashstore.products}>
                        <div className={flashstore.hr}></div>
                        <div className={flashstore.product}>
                            <div className={flashstore.productIntroduction}>
                                <div className={flashstore.productImg}>
                                    <img src={flashProduct.product.main_image} alt="main" />
                                </div>
                                <div className={flashstore.productDetail}>
                                    <div className={flashstore.productTitle}>{flashProduct.product.title}</div>
                                    <div className={flashstore.productId}>{flashProduct.product.id}</div>
                                    <div className={flashstore.productColor}>
                                        <p>顏色&nbsp;</p>
                                        <p>{flashProduct.product.colors[0].name}</p>
                                    </div>
                                    <div className={flashstore.productSize}>
                                        <p>尺寸&nbsp;</p>
                                        <p>{flashProduct.product.sizes[0]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={flashstore.selectCount}>
                                <p>數量</p>
                                <select name="count">
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className={flashstore.productPrice}>
                                <p>單價</p>
                                <p>TWD.{flashProduct.product.price}</p>
                            </div>
                            <div className={flashstore.productTotalPrice}>
                                <p>小計</p>
                                <p>TWD.{flashProduct.product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className={flashorder.container}>
                <form action="" onSubmit={handleSubmit} className={flashorder.form}>
                    <p className={flashorder.title}>訂購資料</p>
                    <div className={flashorder.hr}></div>
                    <div className={flashorder.inputContainer}>
                        <label htmlFor="name">收件人姓名</label>
                        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <p className={flashorder.remind}>務必填寫完整收件人姓名，避免包裹無法順利簽收</p>
                    <div className={flashorder.inputContainer}>
                        <label htmlFor="phone">手機</label>
                        <input type="tel" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} pattern='^\d{10}$' title='請輸入手機號碼' required />
                    </div>
                    <div className={flashorder.inputContainer}>
                        <label htmlFor="address">地址</label>
                        <input type="text" id='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className={flashorder.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className={flashorder.inputContainer}>
                        <p className={flashorder.radioTitle}>配送時間</p>
                        <div className={flashorder.radioContainer}>
                            <div>
                                <input type="radio" id="morning" name="time" value="morning" onChange={handleSelectedTime} required />
                                <label data-time htmlFor="morning">08:00-12:00</label>
                            </div>
                            <div>
                                <input type="radio" id="afternoon" name="time" value="afternoon" onChange={handleSelectedTime} required />
                                <label data-time htmlFor="afternoon">14:00-18:00</label>
                            </div>
                            <div>
                                <input type="radio" id="anytime" name="time" value="anytime" onChange={handleSelectedTime} required />
                                <label data-time htmlFor="anytime">不指定</label>
                            </div>
                        </div>
                    </div>
                    <p className={flashorder.title}>付款資料</p>
                    <div className={flashorder.hr}></div>
                    {/* <div className={order.inputContainer}>
                    <label htmlFor="card-number">信用卡號碼</label>
                    <input type="text" id='card-number' placeholder='**** **** **** ****' value={creditCard} onChange={handleChange} pattern='^[\d ]{19}$' title='請輸入16位數的信用卡號碼' required />
                </div>
                <div className={order.inputContainer}>
                    <label htmlFor="card-expiration-date">有效期限</label>
                    <input type="text" id="card-expiration-date" placeholder='MM / YY' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} pattern='^(0[1-9]|1[0-2])\/(\d{2})$' required />
                </div>
                <div className={order.inputContainer}>
                    <label htmlFor="card-ccv">後三碼</label>
                    <input type="text" id='card-ccv' placeholder='後三碼' value={cvv} onChange={(e) => setCvv(e.target.value)} pattern='^\d{3}$' required />
                </div> */}
                    <div className={flashorder.special}>
                        <p className={flashorder.specialLable}>信用卡號碼</p>
                        <div className={flashorder.specialInput} id="card-number"></div>
                    </div>
                    <div className={flashorder.special}>
                        <p className={flashorder.specialLable}>有效期限</p>
                        <div className={flashorder.specialInput} id="card-expiration-date"></div>
                    </div>
                    <div className={flashorder.special}>
                        <p className={flashorder.specialLable}>後三碼</p>
                        <div className={flashorder.specialInput} id="card-ccv"></div>
                    </div>
                    <div>
                        <div className={flashorder.list}>
                            <div>
                                <p className={flashorder.listItem}>總金額</p>
                                <p>NT.</p>
                                <p>{flashProduct && flashProduct.product.price}</p>
                            </div>
                            <div>
                                <p className={flashorder.listItem}>運費</p>
                                <p>NT.</p>
                                <p>30</p>
                            </div>
                            <div className={flashorder.hr2}></div>
                            <div>
                                <p className={flashorder.listItem}>應付金額</p>
                                <p>NT.</p>
                                <p>{flashProduct && flashProduct.product.price + 30}</p>
                            </div>
                        </div>
                    </div>
                    <div className={flashorder.submitLayout}>
                        <button className={flashorder.submit} type='submit'>確認付款</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FlashOrder;
