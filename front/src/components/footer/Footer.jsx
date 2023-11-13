import "./footer.css";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_contact">
          <h4>Socials</h4>
          <p>
            <a href="">Twitter</a>
          </p>
          <p>
            <a href="">LinkedIn</a>
          </p>
          <p>
            <a href="">Facebook</a>
          </p>
        </div>
        <div className="footer-links_contact">
          <h4>Get in touch</h4>
          <p>600 California St, SF, CA</p>
          <p>866-866866</p>
          <p>info@buddhaworldgallery.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2023 BuddhaWorldGallery. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
