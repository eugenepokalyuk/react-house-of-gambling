import { useMediaQuery } from "react-responsive";
import styles from "./BecomePartner.module.css";
import { FC } from "react";

export const BecomePartner = () => {
    const handleClick = () => {
        console.log("handleClick");
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => (
        <article className={styles.container}>
            <div className={`${styles.card}`}>
                <h1 className={styles.cardTitle}>HOUSE OF <span className={styles.cardTitleBlue}>GAMBLING</span></h1>
                <p className={styles.cardText}>Raise your ROI with direct advertiser</p>
                <button className={styles.cardButton} onClick={handleClick}>Become a Partner</button>
            </div>
        </article>
    )

    const MobileView: FC = () => (
        <article className={styles.container}>
            <div className={styles.card}>
                <h1>HOUSE OF <span>GAMBLING</span></h1>
                <p>Raise your ROI with direct advertiser</p>
                <button className={styles.cardButton} onClick={handleClick}>Become a Partner</button>
            </div>
        </article>
    )

    return isDesktop
        ? <DesktopView />
        : <MobileView />
};