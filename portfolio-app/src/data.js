import pomodoro from "../src/assets/pomopic.jpg";
import draw from "../src/assets/quickdrawpic.PNG";
import bevbinge from "../src/assets/bevbingepic.PNG";
import blackjack from "../src/assets/blackjackpicture.PNG";
import java from "../src/assets/java.png";
import js from "../src/assets/js.png";
import react from "../src/assets/react.png";
import tailwind from "../src/assets/tailwind.png";
import css from "../src/assets/css.png";
import html from "../src/assets/html.png";
import android from "../src/assets/android.png";

export const projectLists = [
  {
    id: 1,
    name: "Pomodoro Study App",
    github: "https://github.com/StevenNZ/pomodoro",
    image: pomodoro,
    desc: "An android app that intends to introduce children/young teens to the pomodoro studying technique. The application was developed with java in android studio and firebase was used to handle backend database",
    lang: ["Java", "Firebase"],
  },
  {
    id: 2,
    name: "Quick Draw",
    github: "",
    image: draw,
    desc: "Developed a GUI speed drawing game with javafx where user draws a random word within a minute. Deep learning model was used with the google data set to predict user drawings and this app was collaborated in a team of 3 people ",
    lang: ["Java"],
  },
  {
    id: 3,
    name: "Beverage Binge",
    github:
      "https://github.com/2022-Hackathon-Senior-HTML-Engineers/application-template",
    image: bevbinge,
    desc: "Developed a web app using MERN stack that makes online lectures more enjoyable by tasks/drinks. This was a hackathon project collaborated in a team of 6. ",
    lang: ["Javascript"],
  },
  {
    id: 4,
    name: "BlackJack",
    github: "https://github.com/StevenNZ/BlackJack",
    image: blackjack,
    desc: "A modified black jack game that runs on command line interface resembling an object-oriented programming problem. Object-oriented design patterns were applied, mainly factory and strategy design patterns",
    lang: ["Java"],
  },
];

export const languages = [
  {
    lang: "Java",
    image: java,
  },
  {
    lang: "Javascript",
    image: js,
  },
  {
    lang: "React",
    image: react,
  },
  {
    lang: "TailwindCSS",
    image: tailwind,
  },
  {
    lang: "CSS3",
    image: css,
  },
  {
    lang: "HTML5",
    image: html,
  },
  {
    lang: "Android",
    image: android,
  },
];
