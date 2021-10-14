import * as React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import * as styles from "../styles/homepage.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <div className={styles.block}>
        <h1 className={styles.greeting}>
          <span className={styles.hey}>Hi,</span> I am Marat Abdulin 👋
        </h1>
        <h2 className={styles.whoIAm}>
          A software engineer located in Berlin, Germany
        </h2>

        <p>I am working as a front-end performance engineer at Pitch.</p>

        <p>
          I believe as long as work is a big part of my life, it must be
          amusing. I am fond of solving complex and non-trivial problems.
          Working together with a strong team and making meaningful
          contributions to a project motivates me better than anything else.
        </p>

        <p>
          I'm not looking for a job right now, but here you can find some
          information about me and my projects.
        </p>

        <p>Don't hesitate to reach out!</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
