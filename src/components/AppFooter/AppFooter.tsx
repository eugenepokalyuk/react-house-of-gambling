import styles from './AppFooter.module.css';
import { NavLink, useMatch } from 'react-router-dom';
import { BRANDS_PATH, CONTACT_PATH, CAREERS_PATH, TERMS_PATH, COOKIES_PATH } from '../../utils/routePath';

import { ReactComponent as TwitterIcon } from '../../images/icons/svg/twitter.svg'
import { ReactComponent as FacebookIcon } from '../../images/icons/svg/facebook.svg'
import { ReactComponent as InstIcon } from '../../images/icons/svg/inst.svg'
import { ReactComponent as LinkedInIcon } from '../../images/icons/svg/linkedIn.svg'
import { ReactComponent as YouTubeIcon } from '../../images/icons/svg/youtube.svg'
import { ReactComponent as TikTokIcon } from '../../images/icons/svg/tiktok.svg'
import { ReactComponent as TelegramIcon } from '../../images/icons/svg/telegram.svg'
import { ReactComponent as VKIcon } from '../../images/icons/svg/vk.svg'

const AppFooter = () => {
    const termsRoute = useMatch(TERMS_PATH);
    const cookiesRoute = useMatch(COOKIES_PATH);
    const brandsRoute = useMatch(BRANDS_PATH);
    const contactRoute = useMatch(CONTACT_PATH);
    const careersRoute = useMatch(CAREERS_PATH);

    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <div className={styles.linksContainer}>
                    <NavLink to="/terms" className={`${styles.link} ${termsRoute ? styles.linkActive : styles.link}`}>
                        Terms & Conditions
                    </NavLink>

                    <NavLink to="/cookies" className={`${styles.link} ${cookiesRoute ? styles.linkActive : styles.link}`}>
                        Cookies
                    </NavLink>

                    <NavLink to="/contacts" className={`${styles.link} ${contactRoute ? styles.linkActive : styles.link}`}>
                        Contacts
                    </NavLink>

                    <NavLink to="/careers" className={`${styles.link} ${careersRoute ? styles.linkActive : styles.link}`}>
                        Careers
                    </NavLink>

                    <NavLink to="/brand" className={`${styles.link} ${brandsRoute ? styles.linkActive : styles.link}`}>
                        Brand Guide
                    </NavLink>
                </div>

                <div>
                    <div className={styles.textAlignRight}>
                        <h3 className={styles.colorWhite}>Our social media:</h3>
                    </div>

                    <ul className={styles.socialCard}>

                        <li>
                            <TwitterIcon />
                        </li>
                        <li>
                            <FacebookIcon />
                        </li>
                        <li>
                            <InstIcon />
                        </li>
                        <li>
                            <LinkedInIcon />
                        </li>
                        <li>
                            <YouTubeIcon />
                        </li>
                        <li>
                            <TikTokIcon />
                        </li>
                        <li>
                            <TelegramIcon />
                        </li>
                        <li>
                            <VKIcon />
                        </li>
                        {/* <li>
                            <img src={twitter_icon} alt="" />
                        </li>
                        <li>
                            <img src={facebook_icon} alt="" />
                        </li>
                        <li>
                            <img src={inst_icon} alt="" />
                        </li>
                        <li>
                            <img src={linkedIn_icon} alt="" />
                        </li>
                        <li>
                            <img src={youtube_icon} alt="" />
                        </li>
                        <li>
                            <img src={tiktok_icon} alt="" />
                        </li>
                        <li>
                            <img src={telegram_icon} alt="" />
                        </li>
                        <li>
                            <img src={vk_icon} alt="" />
                        </li> */}
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default AppFooter;