// store > about.js
import image from "../assets/images/eun4.jpeg"; // 내 사진

export default {
  namespaced: true,
  state: () => ({
    name: "EUN",
    email: "qoo0131@gmail.com",
    github: "https://github.com/eun92",
    phone: "010-2737-2394",
    image: image,
  }),
};
