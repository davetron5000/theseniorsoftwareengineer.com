import React from "react";
import Layout from "../components/Layout";

export default function(props) {
  return(
    <Layout>
      <section className="content">
        <h1 className="mega f4 tc">Thanks for Buying!</h1>
        <p>
          I hope you enjoy the book.  
        </p>
        <p>
          You should've received a promo code to purchase the print-version from Create Space at a discount, but if you are feeling charitable, you can certainly
          <a href="https://www.createspace.com/4879650"
            title="Print Version of The Senior Software Engineer"
            rel="nofollow"
            className="">pay the full price of $19.99</a>.  It'll make a proud addition to your physical library.
        </p>
        <p>I'd also greatly appreciate a positive review <a href="http://www.amazon.com/The-Senior-Software-Engineer-Practices/dp/0990702804/" title="Amazon Link for The Senior Software Engineer">on Amazon.com</a></p>
        <p>Or, if you'd like, you could post a review on <a href="https://itunes.apple.com/us/book/the-senior-software-engineer/id910014560?ls=1&mt=11" title="iBookstore Link for The Senior Software Engineer">the iBookstore</a></p>
        <p className="f3 tc">Best of luck on your journey to <span className="dib">Senior Software Engineer!</span></p>
      </section>
    </Layout>
  )
};
