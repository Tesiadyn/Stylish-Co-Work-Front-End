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
};

export default newApi;
