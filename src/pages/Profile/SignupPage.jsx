import { useState } from "react";

function SignupPage() {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const options = {
    method: "POST", // 設置請求方法為 POST
    headers: {
      "Content-Type": "application/json", // 設置請求頭中的 Content-Type
    },
    body: JSON.stringify(formValue), // 將資料轉換為 JSON 格式並設置為請求體
  };
  async function signUp() {
    const res = await fetch(
      "https://zackawesome.net/api/1.0/user/signup",
      options
    );
    const { data } = await res.json();
    console.log(data);
    const token = data.access_token;
    console.log(token);
    localStorage.setItem("token", token);
  }
  const { name, email, password } = formValue;
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    signUp();
  }
  return (
    <>
      <div id="root">
        <div className="profile">
          <form className="profile__form" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="profile__label">Name:</div>
            <input
              type="text"
              name="name"
              className="profile__input"
              required=""
              onChange={(e) => {
                setformValue({ ...formValue, name: e.target.value });
              }}
              value={name}
            />
            <div className="profile__label">Email:</div>
            <input
              type="email"
              name="email"
              className="profile__input"
              required=""
              onChange={(e) =>
                setformValue({ ...formValue, email: e.target.value })
              }
              value={email}
            />
            <div className="profile__label">Password:</div>
            <input
              type="password"
              name="password"
              className="profile__input"
              required=""
              onChange={(e) =>
                setformValue({ ...formValue, password: e.target.value })
              }
              value={password}
            />
            <div className="profile__hint">已有帳號？ 前往登入 -&gt;</div>
            <button type="submit" className="profile__button">
              註冊
            </button>
            <button
              type="button"
              className="profile__button"
              style={{ backgroundColor: "rgb(66, 103, 178)" }}
            >
              使用 Facebook
            </button>
          </form>
        </div>
      </div>
      <div id="fb-root" className=" fb_reset">
        <div
          style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}
        >
          <div />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
