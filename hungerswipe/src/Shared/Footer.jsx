import React, { Component } from 'react';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
import { Icon } from '@iconify/react';
import tiktokIcon from '@iconify-icons/simple-icons/tiktok';
import facebookIcon from '@iconify-icons/brandico/facebook-rect';
import twitterIcon from '@iconify-icons/simple-icons/twitter';
import instagramIcon from '@iconify-icons/simple-icons/instagram';
import linkedInIcon from '@iconify-icons/simple-icons/linkedin';

import appStore from '../Assets/APPLE-store.png';
import playStore from '../Assets/GOOGLE-playstore.png';

import logo from '../Assets/LogoWhiteBig.png';
class Footer extends Component {
    render() {
        return (
            <section>
              <footer className="bg-black">
          <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex-1 mb-6 text-black">
                <a
                  className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="/"
                >
                  
                  <img className="w-2/3 h-auto" src={logo} alt="Logo"></img>
                </a>
              </div>
              <div className="flex-1">
                <p className="text-white md:mb-6 font-bold">Useful Links</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#about"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#features"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#screenshots"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      Screenshots
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#contact"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="text-white md:mb-6 font-bold">Legal</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/privacy"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="text-white md:mb-6 font-bold">Social Media</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2">
                    <a
                      href="fb://profile/105271334556866"
                      target="_blank"
                      rel="noreferrer"
                      deeplink="true"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      <Icon icon={facebookIcon} />
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2">
                    <a
                      href="https://twitter.com/hungerswipeapp"
                      target="_blank"
                      rel="noreferrer"
                      deeplink="true"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      <Icon icon={twitterIcon} />
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2">
                    <a
                      href="https://www.instagram.com/hungerswipeapp/"
                      target="_blank"
                      rel="noreferrer"
                      deeplink="true"
                      className="no-underline hover:underline text-white hover:text-pink-500"
                    >
                      <Icon icon={instagramIcon} />
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2">
                    <a
                      href="https://www.linkedin.com/company/hungerswipe/"
                      target="_blank"
                      rel="noreferrer"
                      deeplink="true"
                      className="no-underline hover:underline text-white hover:text-pink-500 pt-4"
                    >
                      <Icon icon={linkedInIcon} />
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2">
                    <a
                      href="https://www.tiktok.com/@hungerswipeapp?lang=en"
                      target="_blank"
                      rel="noreferrer"
                      deeplink="true"
                      className="no-underline hover:underline text-white hover:text-pink-500 pt-4"
                    >
                      <Icon icon={tiktokIcon} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <p className="text-white font-bold">Download</p>
                <p className="text-white md:mb-6 font-medium">Coming soon</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      <img src={appStore} alt="Download from the Appstore" />
                    </a>
                  </li>
                  <li className="mt-4 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/"
                      className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      <img src={playStore} alt="Get it on Google Play"/>
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </footer>  
            </section>
        );
    }
}


export default Footer;