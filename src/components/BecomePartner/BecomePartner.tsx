import styles from "./BecomePartner.module.css";

export const BecomePartner = () => {
    const handleClick = () => {
        console.log("handleClick");
    }

    return (
        <article className={styles.container}>
            <div className={`${styles.card}`}>
                <h1 className={styles.cardTitle}>HOUSE OF <span className={styles.cardTitleBlue}>GAMBLING</span></h1>
                <p className={styles.cardText}>Raise your ROI with direct advertiser</p>
                <button className={styles.cardButton} onClick={handleClick}>Become a Partner</button>
            </div>
        </article>
    )
};