import React from "react";

export default class Layout extends React.Component {
  render() {
    return(
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title> The Senior Software Engineer Book Website </title>
          <meta name="author" content="David Bryant Copeland" />
          <meta name="description" content="Website for the book The Senior Software Engineer" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="/touch-icon-iphone-precomposed.png" />
          <link rel="apple-touch-icon" sizes="72x72"   href="/images/touch-icon-ipad-precomposed.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/images/touch-icon-iphone-retina-precomposed.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/touch-icon-ipad-retina-precomposed.png" />
          <script type="text/javascript" src="//use.typekit.net/awc2ruu.js"></script>
          </head>
          <body>
              <div className="borbo bor-gry bg-ltgry tc p2 bg-img"></div>
              <header className="borbo bor-gry bg-ltgry tc p2 mb4">
                <h1 className="mega f4 ss caps"><a href="/" title="Home - The Senior Software Engineer" className="title">
                  <span className="f6">The </span> <br />
                  Senior Software Engineer <br />
                </a>
                </h1>
                <h2 className="i f4 thin mdgry ts">11 Practices of an Effective Technical Leader</h2>
                <p className="small s ttl thin mb2 ts">By David Bryant Copeland</p>
                <a rel="nofollow" href="http://transactions.sendowl.com/products/24086/D8D2ED13/add_to_cart" title="Buy Now for $50" className="b dib ss btn-link p1 caps">Buy Now $25
                  <span className="ttl ls1 small gry db s i f6">Instantly download as PDF/MOBI/ePub</span>
                </a>
                <nav className="db">
                  <ul className="list list-inline">
                    <li>
                      <a href="https://www.amazon.com/Senior-Software-Engineer-Practices-Effective/dp/0990702804/ref=sr_1_2?keywords=the+senior+software+engineer&qid=1567531365&s=gateway&sr=8-2"
                        title="Print Version of The Senior Software Engineer"
                        rel="nofollow"
                        className="ttl ls1 small s i f4 mt1">Buy it in Print for $19.99</a> •
                    </li>
                    <li>
                      <a href="http://pragprog.com/book/dccar2/build-awesome-command-line-applications-in-ruby-2"
                        title="Build Awesome Command Line Applications in Ruby 2"
                        rel="nofollow"
                        className="ttl ls1 small s i f4 mt1">Looking for my command-line book?</a>
                    </li>
                  </ul>
                </nav>
              </header>
              { this.props.children }
              <footer className="bg-ltgry dkgry mt4 tc">
                <div className="content pt2 pb2">
                <div className="media">
                  <div className="bd">
                    <h1 className="ss caps f5">About</h1>
                    <p className="f4">
                      <img className="mw1 mb2" src="/images/me.png" alt="Davetron5000" />
                      <span className="f3 db tc mb2">I'm Dave Copeland, a programmer and author.</span>
                      I wrote
                      <a href="http://pragprog.com/book/dccar2/build-awesome-command-line-applications-in-ruby-2"
                        title="Build Awesome Command Line Applications in Ruby 2">
                        “Build Awesome Command-Line Applications in Ruby 2" </a> , and have over 16 years of
                      professional development experience. I've managed high-performance, high-traffic
                      systems at LivingSocial and helped build the engineering team at Opower. I've
                      worked consulting gigs both large and small, commercial and government. I'm
                      currently Director of Engineering at fashion start-up
                      <a href="http://stitchfixjobs.com" title="Stitch Fix is hiring">Stitch Fix</a>,
                      building a platform that will change the retail shopping experience.
                    </p>
                    <p className="f4">I live in Washington, DC with my lovely wife.</p>
                  </div>
                </div>
                </div>
              </footer>
          </body>
        </html>
      );
  }
}
