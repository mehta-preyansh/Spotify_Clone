import React from 'react'
import {FootContainer} from './styled_components'
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <FootContainer>
      <div className="Footer__top">
        <div className="links">
          <div className="company">
            <ul>
              <li>Company</li>
              <li><a href="https://www.spotify.com/in-en/about-us/contact/" target="blank">About</a></li>
              <li><a href="https://www.lifeatspotify.com/" target="blank">Jobs</a></li>
              <li><a href="https://www.lifeatspotify.com/" target="blank">For the Record</a></li>
            </ul>
          </div>
          <div className="communities">
            <ul>
              <li>Communities</li>
              <li><a href="https://artists.spotify.com/" target="blank">For Artists</a></li>
              <li><a href="https://developer.spotify.com/" target="blank">Developers</a></li>
              <li><a href="https://ads.spotify.com/" target="blank">Advertising</a></li>
              <li><a href="https://ads.spotify.com/" target="blank">Investors</a></li>
              <li><a href="https://ads.spotify.com/" target="blank">Vendors</a></li>
              <li><a href="https://www.spotify.com/spotifyforwork/" target="blank">Spotify for Work</a></li>
            </ul>
          </div>
          <div className="useful__links">
            <ul>
              <li>Useful Links</li>
              <li><a href="https://support.spotify.com/" target="blank">Support</a></li>
              <li><a href="https://www.spotify.com/in-en/download/" target="blank">Free Mobile App</a></li>
            </ul>
          </div>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/spotify/">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href="https://twitter.com/spotify">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href="https://www.facebook.com/Spotify">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
        </div>
      </div>
      <hr/>
      <div className="Footer__bottom">
        <div className="left__section">
          <a href="https://www.spotify.com/in-en/legal/end-user-agreement/" target="blank">Legal</a>
          <a href="https://www.spotify.com/in-en/privacy" target="blank">Privacy Center</a>
          <a href="https://www.spotify.com/in-en/legal/privacy-policy/" target="blank">Privacy Policy</a>
          <a href="https://www.spotify.com/in-en/legal/cookies-policy/" target="blank">Cookies</a>
          <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" target="blank">About Ads</a>
          <a href="https://www.spotify.com/in-en/accessibility" target="blank">Accessibility</a>
        </div>
        <div className="right__section">
          © 2023 Spotify AB
        </div>
      </div>
    </FootContainer>
  )
}

export default Footer