import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SigninPage() {
  const navigate = useNavigate();

  const [formValue, setformValue] = useState({
    provider: "native",
    email: "",
    password: "",
    access_token:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NDRAZ21haWwuY29tIiwidXNlclJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzExODkwNjcwLCJleHAiOjE3MTU0OTA2NzB9.Nz9FqFd1J8widTwOKuiLZ9SsOfOuVZAM0P80M8PiZBI",
    //123123@gmail.com 123123
  });
  const options = {
    method: "POST", // 設置請求方法為 POST
    headers: {
      "Content-Type": "application/json", // 設置請求頭中的 Content-Type
    },
    body: JSON.stringify(formValue), // 將資料轉換為 JSON 格式並設置為請求體
  };

  async function signIn() {
    const res = await fetch(
      "https://zackawesome.net/api/1.0/user/signin",
      options
    );
    const { data } = await res.json();
    const token = data?.access_token;
    console.log("登入後", token);
    localStorage.setItem("token", token);
  }
  const { email, password } = formValue;
  function handleFormSubmit(e) {
    e.preventDefault();
    signIn();
    alert("登入成功");
    navigate("/");
  }
  return (
    <>
      <div id="root">
        <div className="profile">
          <form className="profile__form" onSubmit={(e) => handleFormSubmit(e)}>
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
            <a href="/signup">
              <div className="profile__hint">尚未有帳號？ 立即註冊 -&gt;</div>
            </a>
            <button type="submit" className="profile__button">
              登入
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

export default SigninPage;
