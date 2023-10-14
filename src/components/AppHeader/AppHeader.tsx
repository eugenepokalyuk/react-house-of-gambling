import styles from './AppHeader.module.css';
import { NavLink, useMatch } from 'react-router-dom';
import {
    ABOUT_PATH,
    BRANDS_PATH,
    COMMISSIONS_PATH,
    NEWS_PATH,
    CONTACT_PATH,
    CAREERS_PATH,
    LOGIN_PATH,
    REGISTER_PATH
} from '../../utils/routePath';
import { ReactComponent as LanguageIcon } from '../../images/icons/svg/language.svg';
import { useAppDispatch } from '../../services/hooks/hooks';
import { FC, useState } from 'react';
import { FETCH_SWITCH_LANGUAGE_REQUEST, FETCH_SWITCH_LANGUAGE_SUCCESS } from '../../services/actions/settings';
import { EN, RU } from '../../utils/const';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const AppHeader: FC = () => {
    const dispatch = useAppDispatch();

    const aboutRoute = useMatch(ABOUT_PATH);
    const brandsRoute = useMatch(BRANDS_PATH);
    const commissionsRoute = useMatch(COMMISSIONS_PATH);
    const newsRoute = useMatch(NEWS_PATH);
    const contactRoute = useMatch(CONTACT_PATH);
    const careersRoute = useMatch(CAREERS_PATH);
    const loginRoute = useMatch(LOGIN_PATH);
    const registerRoute = useMatch(REGISTER_PATH);
    const [language, setLanguage] = useState(EN)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hangleSwitchLanguage = () => {
        dispatch({ type: FETCH_SWITCH_LANGUAGE_REQUEST });
        if (language === EN) {
            setLanguage(RU);
            dispatch({ type: FETCH_SWITCH_LANGUAGE_SUCCESS, payload: RU });
        } else {
            setLanguage(EN);
            dispatch({ type: FETCH_SWITCH_LANGUAGE_SUCCESS, payload: EN });
        }
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const DesktopView: FC = () => (
        <nav className={styles.nav}>

            <div className={styles.linksContainer}>
                <NavLink to="/" className={`${styles.link} ${aboutRoute ? styles.linkActive : styles.link}`}>
                    About us
                </NavLink>

                <NavLink to="/store" className={`${styles.link} ${brandsRoute ? styles.linkActive : styles.link}`}>
                    Brands
                </NavLink>

                <NavLink to="/warehouse" className={`${styles.link} ${commissionsRoute ? styles.linkActive : styles.link}`}>
                    Commissions
                </NavLink>

                <NavLink to="/stat-session" className={`${styles.link} ${newsRoute ? styles.linkActive : styles.link}`}>
                    News
                </NavLink>

                <NavLink to="/stat" className={`${styles.link} ${contactRoute ? styles.linkActive : styles.link}`}>
                    Contact us
                </NavLink>

                <NavLink to="/settings" className={`${styles.link} ${careersRoute ? styles.linkActive : styles.link}`}>
                    Careers
                </NavLink>
            </div>

            <div className={styles.profileContainer}>
                <button className={`${styles.link} ${styles.linkWithIcon} ${styles.linkButton}`} onClick={hangleSwitchLanguage}>
                    <LanguageIcon />
                    {language}
                </button>

                <NavLink to="/profile" className={`${styles.link} ${styles.linkButton} ${loginRoute ? styles.linkActive : styles.link}`}>
                    Log in
                </NavLink>

                <NavLink to="/profile" className={`${styles.link} ${styles.linkButton} ${registerRoute ? styles.linkActive : styles.link}`}>
                    Sign up
                </NavLink>
            </div>

        </nav>
    );

    const MobileView: FC = () => (
        <nav className={styles.nav}>
            <button
                className={styles.linkLanguageIcon}
                onClick={hangleSwitchLanguage}
            >
                <LanguageIcon />
            </button>

            <FontAwesomeIcon
                icon={faBars}
                size="2x"
                onClick={handleMenuClick}
                className={styles.menuIconBar}
            />

            {isMenuOpen && (
                <div className={styles.menu}>
                    <ul>
                        <NavLink to='/' className={styles.menuLink}>
                            <li className={`${styles.menuItem} text text_type_main-medium`}>
                                About us
                            </li>
                        </NavLink>

                        <NavLink to='/' className={styles.menuLink}>
                            <li className={`${styles.menuItem} text text_type_main-medium`}>
                                Brands
                            </li>
                        </NavLink>

                        <NavLink to='/' className={styles.menuLink}>
                            <li className={`${styles.menuItem} text text_type_main-medium`}>
                                Commissions
                            </li>
                        </NavLink>

                        <NavLink to='/' className={styles.menuLink}>
                            <li className={`${styles.menuItem} text text_type_main-medium`}>
                                News
                            </li>
                        </NavLink>

                        <NavLink to='/' className={styles.menuLink}>
                            <li className={`${styles.menuItem} text text_type_main-medium`}>
                                Contact us
                            </li>
                        </NavLink>

                        <NavLink to='/' className={styles.menuLink}>
                            <li className={`${styles.menuItem} text text_type_main-medium`}>
                                Careers
                            </li>
                        </NavLink>
                    </ul>

                    <ul>
                        <NavLink to='/' className={styles.menuLink}>
                            <button className={`${styles.menuItem} text text_type_main-medium`}>
                                Log in
                            </button>
                        </NavLink>

                        <NavLink to='/' className={styles.menuLink}>
                            <button className={`${styles.menuItem} text text_type_main-medium`}>
                                Sign up
                            </button>
                        </NavLink>
                    </ul>
                </div>
            )}
        </nav>
    );

    return (
        <header className={styles.header}>
            {
                isDesktop
                    ? <DesktopView />
                    : <MobileView />
            }
        </header>
    );
}

export default AppHeader;