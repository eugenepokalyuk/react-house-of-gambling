import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Ooops! 404 Error</h1>
                <p>The page you requested does not exist</p>
                <p>check the address or try <Link to='/' className={`${styles.link} ml-2`}>homepage</Link></p>
            </div>
        </div>
    </div>
);