import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import ResumeItem from "../components/ResumeItem/ResumeItem";
import SocialIcon from "../components/SocialIcon/SocialIcon";
import * as styles from "../styles/resume.module.css";
import photoJpg from "../images/marat-abdulin.jpg";
import photoJpg2x from "../images/marat-abdulin@2x.jpg";
import photoWebp from "../images/marat-abdulin.webp";
import photoWebp2x from "../images/marat-abdulin@2x.webp";
import classnames from "classnames";
import {
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
  CV_LINK,
} from "../site.config";

const ResumePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Resume" />
      <div className={styles.wrapper}>
        <div className={styles.pdfLink}>
          <a href={CV_LINK}>Download PDF</a>
        </div>
        <div className={styles.updated}>
          <span>UPDATED ON 14 MAY, 2021</span>
        </div>
        <header
          className={classnames(styles.header, styles.block, styles.center)}
        >
          <h1 className={styles.headline}>Marat Abdulin</h1>
          <span className={styles.position}>Software Engineer</span>
        </header>
        <div className={classnames(styles.photo, styles.block, styles.center)}>
          <picture>
            <source
              srcSet={`${photoWebp} 1x, ${photoWebp2x} 1.5x`}
              type="image/webp"
            />
            <source srcset={`${photoJpg} 1x, ${photoJpg2x} 1.5x`} />
            <img
              alt="Marat Abdulin"
              className={styles.photoImage}
              src={photoJpg}
            />
          </picture>
        </div>
        <div className={classnames(styles.summary, styles.block)}>
          <p>
            I’m a skilled software engineer with more than 12 years of
            experience in web development. During this time I’ve been working
            with a variety of technologies and projects. My knowledge covers a
            broad range of modern full-stack development. I’m proficient in both
            frontend and backend technologies.
          </p>
          <p>
            I’m fond of solving performance issues, working on complex problems
            and searching for the best solutions that are suitable for both tech
            and business.
          </p>
        </div>
        <div className={styles.aside}>
          <div className={styles.block}>
            <h2>Contacts</h2>
            <ul>
              <li>
                <SocialIcon icon="at" className={styles.icon} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <SocialIcon icon="github" className={styles.icon} />
                <a href={GITHUB_LINK}>esender</a>
              </li>
              <li>
                <SocialIcon icon="linkedin" className={styles.icon} />
                <a href={LINKEDIN_LINK}>esender</a>
              </li>
              <li>
                <SocialIcon icon="telegram" className={styles.icon} />
                <a href={TELEGRAM_LINK}>@esender</a>
              </li>
              <li>
                <SocialIcon icon="twitter" className={styles.icon} />
                <a href={TWITTER_LINK}>esender_</a>
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h2>Languages</h2>
            <ul>
              <li>
                English​ <span className={styles.gray}>/ B1</span>
              </li>
              <li>
                Russian <span className={styles.gray}>/​ native</span>
              </li>
              <li>
                Tatar <span className={styles.gray}>/​ native</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={classnames(styles.skills, styles.block)}>
          <h2>Skills</h2>
          <div className={styles.skillsSet}>
            <div>
              <h3>JavaScript</h3>
              <ul className={styles.skillsList}>
                <li>React, Preact, Vue</li>
                <li>React env libraries</li>
                <li>Webpack, Parcel</li>
                <li>Jest, Ava, Mocha, Chai, Sinon</li>
              </ul>
              <h3>Ruby</h3>
              <ul className={styles.skillsList}>
                <li>Ruby on Rails, Hanami</li>
              </ul>
              <h3>Databases</h3>
              <ul className={styles.skillsList}>
                <li>Redis, MongoDB</li>
                <li>PostgreSQL,MySQL</li>
              </ul>
            </div>
            <div>
              <h3>NodeJS</h3>
              <ul className={styles.skillsList}>
                <li>Express, Fastify, Nuxt</li>
                <li>Bolt, Telegraf</li>
                <li>Sequilize, Mongoose</li>
              </ul>
              <h3>Clojure</h3>
              <ul className={styles.skillsList}>
                <li>ClojureScript, Reagent, Re-frame</li>
              </ul>
              <h3>Other</h3>
              <ul className={styles.skillsList}>
                <li>Debugging</li>
                <li>Frontend performance</li>
                <li>HTML5, CSS3</li>
                <li>Mentoring</li>
                <li>Team Leading</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classnames(styles.experience, styles.block)}>
          <h2>Work Experience</h2>
          {edges.map(({ node }) => (
            <ResumeItem
              key={node.id}
              description={node.description}
              {...node.frontmatter}
            />
          ))}
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <ResumeItem
            title="Kazan National Research Technical University named after A.N.Tupolev"
            position="Institute of radio-engineering and telecommunications"
            period="September 2007 – July 2011"
            description="Bachelor of Engineering and Technology"
          />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/resume/" } }
    ) {
      edges {
        node {
          id
          description: html
          frontmatter {
            title
            position
            stack
            period
            location
            points
          }
        }
      }
    }
  }
`;

export default ResumePage;
