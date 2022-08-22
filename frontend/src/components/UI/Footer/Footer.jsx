import faceBookIcon from '../../../assets/icons/facebook.svg';
import twitter from '../../../assets/icons/twitter.svg';
import googlePlus from '../../../assets/icons/googleplus.svg';
import instagram from '../../../assets/icons/instagram.svg';
import styles from './Footer.module.css';
const Footer = () => {
  return ( 
  
    <footer className={styles["footer-container"]}>
        <ul className={styles["footer-ul-info"]}>
          <li>
            <a href="http://">About Us</a>
          </li>
          <li>
            <a href="http://">Press</a>
          </li>
          <li>
            <a href="http://">Blog</a>
          </li>
          <li>
            <a href="http://">iOS</a>
          </li>
          <li>
            <a href="http://">Android</a>
          </li>
        </ul>
        <ul className={styles["footer-ul-info"]}>
          <li>
            <a href="http://">
              <img src={faceBookIcon} alt="facebook icon" />
              </a>
          </li>
          <li>
            <a href="http://">
              <img src={twitter} alt="twitter icon" />
            </a>
          </li>
          <li>
            <a href="http://">
              <img src={googlePlus} alt="google plus icon" />
              </a>
          </li>
          <li>
            <a href="http://">
              <img src={instagram} alt="instagram icon"/>
              </a>
          </li>
        </ul>
    </footer>
   );
}
 
export default Footer;
