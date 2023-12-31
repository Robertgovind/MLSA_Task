/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/painting.jpg";

const imageAltText = "painting with different colours";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "A tech enthusiast from Nepal who loves to learn about AI and Android App Development in the tech world.Currently, I'm pursuing Bachelor of Electronics Communication and Information Engineering at I.O.E Paschimanchal Campus which is located in Pokhara, Nepal. I'm exploring different fields of the tech industry and for some time I am learning Flutter,DSA and few more.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Android app development",
  "Frontend developer",
  "DSA",
  "Python",
  "Git and Github",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "A tech enthusiast from Nepal who loves to learn about AI and Android App Development in the tech world.Currently, I'm pursuing Bachelor of Electronics Communication and Information Engineering at I.O.E Paschimanchal Campus which is located in Pokhara, Nepal. I'm exploring different fields of the tech industry and for some time I am learning Flutter,DSA and few more.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
