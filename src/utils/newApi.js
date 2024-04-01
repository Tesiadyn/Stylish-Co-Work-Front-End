const newApi = {
  hostname: "https://zackawesome.net/api/1.0/",
  async shouldBeMember(token) {
    const response = await fetch(`${this.hostname}user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response;
  },
  async newCheckout(obj, token) {
    const response = await fetch(`${this.hostname}order/checkout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return await response;
  },
};

export default newApi;
