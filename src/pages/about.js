import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { MainLayout } from "../components/MainLayout";
import Footer from "../components/Footer";
import { SideNav, Toolbar } from "../elements/Titles";
import { ProPic } from "../components/ProPic";

// import Semantic UI CSS
import "semantic-ui-css/semantic.min.css";

const About = styled.main`
  ${tw`p-6 md:p-6 lg:p-12 justify-center  flex z-50`};
`;

const AboutDesc = styled.p`
  ${tw`mt-8 w-full xxl:w-full md:w-2/3`};
`;

const Craft = styled.p`
  ${tw`p-6 text-center content-center`};
`;

const Index = () => (
  <>
    <SideNav>
      <Toolbar to="https://github.com/theWhiteFox">
        <i aria-hidden="true" className="github alternate icon toolbar" />
      </Toolbar>
      <Toolbar to="/">
        <i className="home icon toolbar" />
        thewhitefox
      </Toolbar>
    </SideNav>
    <MainLayout />
    <ProPic />
    <About>
      <AboutDesc>
        I love to talk through ideas, finding solutions with shiny new tech.
        Using the complexity of simplicity & the craftsmanship improvement
        method. Before I wrote code I practiced art and learned to cook, for me
        building an app is like cooking a delicious meal. When making my web
        apps I try keep simplicity in mind, however like great sushi it is an
        art and anything but simple. The complex art of simplicity is what I
        want to master.
        <br />
        <Craft>
          <p>
            Yoshikazu Ono: "Always look ahead and above yourself. Always try to
            improve on yourself. Always strive to elevate your craft."
          </p>
          <br />
          <div className="software-links">
            <h2>👨‍💻 My Dev Stack</h2>
            <ul>
              <li>
                <a href="https://ionicframework.com/">
                  <img
                    alt="Ionic"
                    src="https://img.shields.io/badge/Ionic-v6-blue"
                  />
                </a>
              </li>
              <li>
                <a href="https://vuejs.org/" rel="nofollow">
                  <img
                    src="https://raw.githubusercontent.com/aleen42/badges/master/src/vue.svg"
                    alt="vue"
                  />
                </a>
              </li>
              <li>
                <a href="http://vanilla-js.com/">
                  <img
                    alt="es6"
                    src="https://img.shields.io/badge/%20VanillaJS-ES6-black"
                  />
                </a>
              </li>
              <li>
                <a href="https://html.spec.whatwg.org/multipage/#toc-introduction">
                  <img
                    alt="html5"
                    src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
                  />
                </a>
              </li>
              <li>
                <a href="https://laravel.com/">
                  <img
                    alt="Laravel"
                    src="https://img.shields.io/badge/Laravel-5.8-%23ff2d20"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.php.net/">
                  <img
                    alt="PHP"
                    src="https://img.shields.io/badge/PHP-%5E8.0-blue"
                  />
                </a>
              </li>
              <li>
                <a href="https://code.visualstudio.com/?wt.mc_id=DX_841432">
                  <img
                    src="https://raw.githubusercontent.com/aleen42/badges/master/src/visual_studio.svg"
                    alt="visual_studio"
                  />
                </a>
              </li>
              <li>
                <a href="https://webpack.js.org/">
                  <img
                    alt="Webpack"
                    src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"
                  />
                </a>
              </li>

              <li>
                <a href="">
                  <img
                    alt="git"
                    src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    alt="npm"
                    src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    alt="Nodejs"
                    src="https://img.shields.io/badge/-Node-43853d?style=flat-square&logo=Node.js&logoColor=white"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="MySQL"
                    src="https://img.shields.io/badge/MySQL-8.0-%2300758f"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="Postamn"
                    src="https://img.shields.io/badge/%20Postman-v7-orange"
                  />
                </a>
              </li>
            </ul>
            <h2>🌱 I’m learning</h2>
            <ul>
              <li>
                <a href="https://www.typescriptlang.org/" rel="nofollow">
                  <img
                    src="https://raw.githubusercontent.com/aleen42/badges/master/src/typescript.svg"
                    alt="typescript"
                  />
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/">
                  <img
                    alt="tailwind"
                    src="https://raw.githubusercontent.com/aleen42/badges/master/src/tailwindcss.svg"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="Sass"
                    src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
                  />{" "}
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="Styled Components"
                    src="https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white"
                  />{" "}
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="React"
                    src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
                  />{" "}
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="GraphQL"
                    src="https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white"
                  />{" "}
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="d3js"
                    src="https://img.shields.io/badge/-D3.js-F9A03C?style=flat-square&logo=d3.js&logoColor=white"
                  />{" "}
                </a>
              </li>
              <li>
                <a>
                  <img
                    alt="vite"
                    src="https://raw.githubusercontent.com/aleen42/badges/master/src/vitejs.svg"
                  />{" "}
                </a>
              </li>
            </ul>
            <h2>🦊 Connect / Communicate</h2>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/thewhitefox/"
                  target="_blank"
                >
                  <img
                    alt="LinkedIn"
                    src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                  />
                </a>
              </li>{" "}
              <li>
                <a href="https://stackoverflow.com/users/1967126/stephen">
                  <img
                    alt="stackoverflow"
                    src="https://badges.aleen42.com/src/stackoverflow.svg"
                  />
                </a>
              </li>{" "}
              <li>
                <a href="https://twitter.com/steTheWhiteFox">
                  <img src="https://badges.aleen42.com/src/twitter.svg" />
                </a>
              </li>
            </ul>
          </div>
          <img src="https://github-readme-stats.vercel.app/api?username=theWhiteFox&show_icons=true&theme=calm&layout=compact&custom_title=theWhiteFox GitHub stats" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=theWhiteFox&theme=calm" />
        </Craft>
      </AboutDesc>
    </About>

    <Footer />
  </>
);
export default Index;
