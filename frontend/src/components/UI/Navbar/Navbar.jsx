import Logo from '../../../assets/icons/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return ( 
        <nav className={styles['nav-container']}>
          <div className={styles["nav-logo"]}>
            <img src={Logo} alt="logo" />
          </div>
          <ul className={styles['nav-ul']}>
            <li className={styles["nav-link"]}>
              <a href="http://" target="_blank" alt="link">
              home
              </a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="http://" target="_blank" alt="link">search</a>
              
            </li>
            <li className={styles["nav-link"]}>
            <a href="http://" target="_blank" alt="link"> profile</a>
            </li>
            <li className={styles["nav-link"]}>
        
            </li>
          </ul>
      </nav>
   );
}
 
export default Navbar;


