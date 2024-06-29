import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSSITY</h3>
        <h2>Nurturing Tommorrow's Leaders Today</h2>
        <p>
          University life is a transformative experience, offering students a
          unique blend of academic rigor and personal growth opportunities. On
          campus, students are immersed in an environment that encourages
          intellectual curiosity and critical thinking. With access to a wide
          range of resources, including state-of-the-art libraries, research
          facilities, and experienced faculty, students can delve deeply into
          their chosen fields of study. Beyond academics, universities provide a
          vibrant social scene where lifelong friendships are formed through
          clubs, organizations, and events. These interactions not only enrich
          the college experience but also help students develop essential soft
          skills such as communication, teamwork, and leadership.
        </p>
        <p>
          n addition to fostering academic and social growth, universities play
          a crucial role in preparing students for their future careers. Career
          services offer guidance on resume building, interview preparation, and
          job search strategies, while internship programs connect students with
          real-world opportunities in their fields. Universities also host
          career fairs and networking events, enabling students to interact with
          potential employers and industry professionals.{" "}
        </p>
        <p>
          Furthermore, the diverse community within a university exposes
          students to different cultures and perspectives, broadening their
          horizons and enhancing their global awareness. Ultimately, the
          university experience equips students with the knowledge, skills, and
          networks necessary to succeed in an ever-evolving world.
        </p>
      </div>
    </div>
  );
};

export default About;
