import React from "react";

import { MainLayout } from "../components/MainLayout";
import Footer from "../components/Footer";
import { SideNav, Toolbar } from "../elements/Titles";
import { ProPic } from "../components/ProPic";

import {
  IoMailOutline,
  IoLogoGithub,
  IoLogoStackoverflow,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoCodepen,
  IoBriefcaseOutline,
} from "react-icons/io5";

const CV = () => (
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
    <div className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
      <div
        className="
            w-full
            sm:max-w-sm
            p-8
            bg-gradient-to-b
            from-indigo-300
            via-amber-300
            to-white
          "
      >
        <ProPic />
        <div className="px-2 mb-12">
          <h1 className="text-center text-3xl font-semibold mb-2">
            Stephen Ó Connor
          </h1>
          <h2 className="text-center text-xl font-light">theWhiteFox</h2>
        </div>

        <div className="font-light text-lg px-2 mb-12">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <div className="flex items-center my-3">
            {" "}
            <IoMailOutline />{" "}
            <a href="mailto:stethewhitefox@gmail.com">
              steTheWhiteFox@gmail.com
            </a>
          </div>
        </div>

        <div className="font-light text-lg px-2 mb-12">
          <h2 className="text-xl font-semibold mb-4">On the Web</h2>
          <div className="flex items-center my-3">
            {" "}
            <IoLogoGithub />
            <a
              href="https://github.com/theWhiteFox"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>
          </div>
          <div className="flex items-center my-3">
            <IoLogoStackoverflow />
            <a
              href="https://stackoverflow.com/users/1967126/stephen"
              target="_blank"
              rel="noopener noreferrer"
            >
              StackOverflow
            </a>
          </div>
          <div className="flex items-center my-3">
            <IoLogoLinkedin />
            <a
              href="https://www.linkedin.com/in/thewhitefox"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center my-3">
            <IoLogoTwitter />
            <a
              href="https://twitter.com/steTheWhiteFox"
              target="_blank"
              rel="noopener noreferrer"
            >
              @steTheWhiteFox
            </a>
          </div>
          <div className="flex items-center my-3">
            <IoLogoCodepen />
            <a
              href="https://codepen.io/theWhiteFox"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodePen
            </a>
          </div>
          <div className="flex items-center my-3">
            <IoBriefcaseOutline />
            <a
              href="https://www.thewhitefox.ninja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </div>
        </div>

        <div className="font-light text-lg px-2 mb-12">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <p>HDip, Computer Animation (2002-2002)</p>
          <p>DIT B.Tech of Computing, Technology (2012-2013)</p>
          <p>Train the trainer (1999-2006)</p>
          <p>Free Code Camp Bachelor's (2021-present)</p>
        </div>
      </div>

      <div className="content w-full p-12">
        <div id="profile" className="prose">
          <h2 className="section-headline">Profile</h2>
          <blockquote>
            <p className="text-lg font-semibold italic">
              "I love to learn and my passion is to design & build Web / Mob
              Apps with the latest tech."
            </p>
          </blockquote>
        </div>
        <hr className="mt-8 mb-12" />
        <div id="experience" className="prose">
          <h2 className="section-headline">Experience</h2>
          <div>
            <h3>Full-stack Developer</h3>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-8/12 w-full">
                Company NameAgriland Media Full-time
              </div>
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Sept 2021 - Current
              </div>
            </section>

            <section className="mb-6">
              <div className="lg:inline-block lg:w-8/12 w-full">
                <li>
                  Designing / Documenting / Building Ionic, Vue js & Laravel
                  RESTful applications
                </li>
                <li>
                  Building multiple Single Page Applications (SPAs) from scratch
                </li>
                <li>
                  Creating timeframes and work schedules to meet deadlines
                </li>
                <li>
                  Conducting research and keeping abreast of social media
                  marketing trends
                </li>
                <li>Monitoring / Debugging Agriland websites</li>
                <li>Creating and ensuring software documentation is updated</li>
                <li>
                  Mentoring Supervising junior web developers, UX designers,
                  analysing areas of weakness, and scheduling Creating training
                  sessions accordingly
                </li>
                <li>
                  Ionic, Vue, Vanilla JS, Laravel, PHP, HTML5, CSS3, NPM,
                  GitHub, MySQL, CMS and SEO best practices
                </li>
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Description:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Gambling.com Group Plc is a multi-award-winning provider of
                digital marketing services for the global online gambling
                industry.
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <span className="rounded-xl bg-gray-300 px-3">Vue</span>
                <span className="rounded-xl bg-gray-300 px-3">Vuex</span>
                <span className="rounded-xl bg-gray-300 px-3">VanillaJS</span>
                <span className="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                <span className="rounded-xl bg-gray-300 px-3">Git</span>
                <span className="rounded-xl bg-gray-300 px-3">Jira</span>
              </div>
            </section>
          </div>
          <div>
            <h3>Gambling.com GDC Media, Dublin</h3>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Oct 2018 - July 2021
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Full Stack Web Dev
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-8/12 w-full">
                <li>Working with over 7+ web sites </li>
                <li>Building / consuming REST APIs </li>
                <li>
                  Collaborating with the UX/UI design & SEO teams to improve the
                  website and apps, increasing conversion rates by 25%{" "}
                </li>
                <li>
                  Daily maintenance of code, debugging issues and solving
                  problems{" "}
                </li>
                <li>
                  Provide guidance and advice on best practices and future
                  technologies
                </li>

                <li>
                  Designing / Documenting / Building Ionic, Vue js & Laravel
                  RESTful applications
                </li>
                <li>
                  Building multiple Single Page Applications (SPAs) from scratch
                </li>
                <li>
                  Creating timeframes and work schedules to meet deadlines
                </li>
                <li>
                  Conducting research and keeping abreast of social media
                  marketing trends
                </li>
                <li>Monitoring / Debugging Agriland websites</li>
                <li>Creating and ensuring software documentation is updated</li>
                <li>
                  Mentoring Supervising junior web developers, UX designers,
                  analysing areas of weakness, and scheduling Creating training
                  sessions accordingly
                </li>
                <li>
                  Ionic, Vue, Vanilla JS, Laravel, PHP, HTML5, CSS3, NPM,
                  GitHub, MySQL, CMS and SEO best practices
                </li>
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Description:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                Gambling.com Group Plc is a multi-award-winning provider of
                digital marketing services for the global online gambling
                industry.
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <span className="rounded-xl bg-gray-300 px-3">Vue</span>
                <span className="rounded-xl bg-gray-300 px-3">Vuex</span>
                <span className="rounded-xl bg-gray-300 px-3">VanillaJS</span>
                <span className="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                <span className="rounded-xl bg-gray-300 px-3">Git</span>
                <span className="rounded-xl bg-gray-300 px-3">Jira</span>
              </div>
            </section>
          </div>
        </div>
        <hr className="mt-8 mb-12" />
        <div id="projects" className="prose">
          <h2 className="section-headline">Projects</h2>
          <div className="mb-16">
            <h3>theWhiteFox</h3>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Personal blog:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                I love to talk through ideas, finding solutions with shiny new
                tech. Using the complexity of simplicity & the craftsmanship
                improvement method. Before I wrote code I practiced art and
                learned to cook, for me building an app is like cooking a
                delicious meal. When making my web apps I try keep simplicity in
                mind, however like great sushi it is an art and anything but
                simple. The complex art of simplicity is what I want to master.
                Yoshikazu Ono: "Always look ahead and above yourself. Always try
                to improve on yourself. Always strive to elevate your craft."
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Deployed to:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://www.thewhitefox.ninja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  theWhiteFox.ninja
                </a>
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Code on:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://github.com/theWhiteFox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub/theWhiteFox
                </a>
              </div>
            </section>
            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Features:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <ul>
                  <li>Static generation</li>
                  <li>Blog content written in Markdown</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Built with:
              </div>
              <div className="lg:inline-block lg:w-8/12 w-full">
                <span className="rounded-xl bg-gray-300 px-3">React.js</span>
                <span className="rounded-xl bg-gray-300 px-3">
                  Styled Components
                </span>
                <span className="rounded-xl bg-gray-300 px-3">styled-jsx</span>
                <span className="rounded-xl bg-gray-300 px-3">GraphQL</span>
              </div>
            </section>
          </div>
        </div>
        <hr className="mt-8 mb-12" />
        <div id="projects" className="prose">
          <h2 className="section-headline">Expand my skills</h2>
          <div className="mb-16">
            <h4 id="expand-knowledge-headline">
              I'd like to expand my skills and knowledge in several fields
            </h4>
            <ul>
              <li>TypeScript</li>
              <li>Testing, e.g. with Mocha, Chai, Jest</li>
              <li>Style Components</li>
              <li>Scalable Vector Graphics</li>
              <li>Databases</li>
              <li>Mobile development</li>
              <li>Backend development, Go, Python, PHP, Ruby, Java, Rust</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);
export default CV;
