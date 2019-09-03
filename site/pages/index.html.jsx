import React from "react";
import SiteIcons from "../components/SiteIcons";
import SocialMediaCardMetadata from "../components/SocialMediaCardMetadata";

export default function(props) {
  return(
<html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <link rel="copyright" href="«link to your copyright statement»" />

    <title>«site title»</title>

    <SocialMediaCardMetadata
      description="«description»"
      author="«author name»"
      twitter_handle="«your twitter handle»"
      title="«Site Title»"
      url="«Site URL»"
    />
    <SiteIcons />
  </head>
  <body>
    <main>
      <article>
        <h1>«site title»</h1>
        <figure>
          <img src="images/washington-dc-ec-02-station-small.jpg" alt="Washington DC Engine Company 02's Fire Station" className="db ba b--silver" nopin="nopin" />
          <figcaption>
            An example of using an image and linking to a larger one.
            { " " }<a href="images/washington-dc-ec-02-station.jpg" target="_new">View full-size (11MB)</a>.
          </figcaption>
        </figure>
      </article>
    </main>
  </body>
</html>
              )};
