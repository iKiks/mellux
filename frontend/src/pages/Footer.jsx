import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className= 'part1'>
        <div className="address">
          <h3 className="footer-titles">Address</h3>
          <p>1234 Main Street</p>
          <p>Los Angeles, CA 90001</p>
          <p>info@mysite.com</p>
          <p>09099000900</p>
        </div>
        <div className= 'contactlinks'>
          <FaFacebook className= 'fb' />
          <FaTwitter className= 'twitter' />
          <FaInstagram className= 'instagram' />
        </div>
      </div>

      <div className= 'part2'>
        <div className="resources">
          <p>Blog</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Market Place</p>
          <p>Events</p>
          <p>My Accounts</p>
        </div>

        <div className="company">
          <p>Pricing</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>

        <div className="company">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;