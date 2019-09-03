import React from "react";
import Layout from "../components/Layout";

export default function(props) {
  return(
    <Layout>
      <section className="content">
        <h1 className="mega f4 tc">Thanks for Buying!</h1>
        <p>
          I hope you enjoy the book.  I'd greatly appreciate a positive review <a href="http://www.amazon.com/The-Senior-Software-Engineer-Practices/dp/0990702804/" title="Amazon Link for The Senior Software Engineer">on Amazon.com</a></p>
        <p className="f3 tc">Best of luck on your journey as a <span className="dib">Senior Software Engineer!</span></p>
      </section>
    </Layout>
  )
};
