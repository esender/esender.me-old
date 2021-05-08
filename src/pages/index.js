import * as React from "react";
import Layout from "../components/Layout/Layout";

// markup#663399
const IndexPage = () => {
  return (
    <Layout>
      <h1 className="greeting">
        <span className="hey">Hi,</span> I am Marat Abdulin 👋
      </h1>
      <h2 className="who-i-am">A software engineer based in Kazan, Russia</h2>

      <p>
        My favorite language is JavaScript. I'm fond of solving performance
        issues and working on non-trivial problems. My experience allows me to
        choose the best solutions for business and development. I'm motivated by
        working on a useful product.
      </p>

      <p>
        If you are looking for a software engineer you can take a look at my{" "}
        <a href="/resume/">résumé page</a> or just download it right from{" "}
        <a href="/files/CV_Marat_Abdulin_2020-08-20.pdf">here</a>.
      </p>
    </Layout>
  );
};

export default IndexPage;
