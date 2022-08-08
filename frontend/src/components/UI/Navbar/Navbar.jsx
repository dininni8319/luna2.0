import Logo from '../../../assets/icons/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return ( 
        <nav className={styles['nav-container']}>
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className={styles['nav-ul']}>
            <li className={styles["nav-link"]}>
              home
            </li>
            <li className={styles["nav-link"]}>
              search
            </li>
            <li className={styles["nav-link"]}>
              profile
            </li>
            <li className={styles["nav-link"]}>
        
            </li>
          </ul>
      </nav>
   );
}
 
export default Navbar;


