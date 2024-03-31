const newApi = {
  hostname: "xxxxx",
  async getUserData() {
    const response = await fetch(`${this.hostname}/xxxxxxx`);
    return await response.json();
  },
};

export default newApi;
