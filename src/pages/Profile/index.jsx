function Profile() {
  return (
    <>
      <div id="root">
        <div className="profile">
          <form className="profile__form">
            <div className="profile__label">Name:</div>
            <input
              type="text"
              name="name"
              className="profile__input"
              required=""
            />
            <div className="profile__label">Email:</div>
            <input
              type="email"
              name="email"
              className="profile__input"
              required=""
            />
            <div className="profile__label">Password:</div>
            <input
              type="password"
              name="password"
              className="profile__input"
              required=""
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

export default Profile;
