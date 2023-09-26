import React from "react";
import image from "../assets/avatar.jpg";
import "../App.css";

const Portfolio = () => {
  return (
    <>
      <section id="section1">
        <div className="name">
          <span className="name1">Hi, I`m</span>
          <span className="my_name">Vikash</span>
          <i className="fa-solid fa-hand fa-shake"></i>
        </div>
        <div className="title">Full-Stack Development Specialist.</div>
        <div className="desc">
          I worked on several front-end and Full-Stack projects, from small
          websites to large web applications. This hands-on experience has
          allowed me to develop skills that help me create efficient and
          effective solutions.
        </div>
        <div className="buttons">
          <a href="/">Hire Me</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1MgcVBz2QfX7mYkwMaF060GMizs3e4vhq"
            download
          >
            My CV
          </a>
        </div>
      </section>
      <section id="section2">
        <h1>technologies</h1>
        <div className="marquee">
          <div className="tech">
            <i className="fa-brands fa-html5 fa-bounce"></i>
            <i className="fa-brands fa-css3-alt fa-beat-fade"></i>
            <i className="fa-brands fa-js fa-fade"></i>
            <i className="fa-brands fa-react fa-spin"></i>
            <i className="fa-brands fa-node-js fa-spin fa-spin-reverse"></i>
            <i className="fa-brands fa-bootstrap fa-flip"></i>
          </div>
        </div>
        <div className="experience">
          <div className="flex-box">
            <h1>Experience</h1>
            <div className="hide">
              <p>
                <b>Transform design</b> into web pages with
              </p>
              <p>
                agility, quality and <b>high performance</b>.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-desktop fa-2xl"></i>
              </div>
              <div className="title1">Beyond the front-end</div>
              <div className="desc1">
                Highly skilled at progressive enhancement, design systems & UI
                development.
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-bolt fa-2xl"></i>
              </div>
              <div className="title1">Frameworks</div>
              <div className="desc1">
                Familiar with various front-end frameworks and libraries.
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-brands fa-codepen fa-2xl"></i>
              </div>
              <div className="title1">Code</div>
              <div className="desc1">
                Experience in core programming languages for web development.
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen fa-2xl"></i>
              </div>
              <div className="title1">Responsive Design</div>
              <div className="desc1">
                Keen eye for detail and strong understanding of user experience.
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-laptop fa-2xl"></i>
              </div>
              <div className="title1">Optimization</div>
              <div className="desc1">
                SEO techniques to promote better ranking of your pages.
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-code-branch fa-2xl"></i>
              </div>
              <div className="title1">UI Design</div>
              <div className="desc1">
                Interfaces for websites and applications.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section3"
        className="flex items-center flex-wrap justify-around gap-10 px-4 py-[2rem] min-h-[90vh] "
      >
        <h1 className="flex-[100%]">About Me</h1>
        <div className="introduction flex-[80%] flex-grow-0 md:basis-[50%] w-[70%] md:w-[50%]">
          Hi, I'm skilled and passionate full stack developer with expertise in
          both front-end and back-end technologies. With a comprehensive
          understanding of HTML, CSS, JavaScript, Python, and frameworks like
          Node.js and Django, I'm capable of creating robust and dynamic web
          applications. Experienced in database management, I'm proficient in
          working with SQL and NoSQL databases such as MySQL and MongoDB. As a
          proactive communicator and collaborative team player, I thrives in
          agile environments and is constantly eager to learn and stay
          up-to-date with the latest industry trends. With a strong focus on
          delivering transformative digital experiences, I'm dedicated to
          creating impactful solutions as a full stack developer.
        </div>
        <div className="images relative flex-[70%] md:basis-[35%] flex-grow-0  h-[400px] overflow-hidden">
          <div className="circle"></div>
          <div className="free_shape"></div>
          <img
            src={image}
            alt="My avatar"
            className="absolute w-[80%] h-[80%] object-cover bottom-[10%] right-[10%]"
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
