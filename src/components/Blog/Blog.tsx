import { FC } from "react";
import styles from "./Blog.module.css";
import { useAppSelector } from "../../services/hooks/hooks";
import { useMediaQuery } from "react-responsive";

type TReviews = {
    text: string,
    date: string
}

export const Blog: FC = () => {
    const reviews = useAppSelector(
        (store) => store.blog.reviews
    );

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const DesktopView: FC = () => (
        <div className={styles.card}>
            <h1 className={styles.containerTitle}>BLOG</h1>
            <div className={`${styles.cardList}`}>
                <ul className={`${styles.scrollable}`}>
                    {reviews.map((item: TReviews, index: number) => {
                        return (
                            <li key={index} className={styles.listItem}>
                                <p className={styles.itemText}>{item.text}</p>
                                <p className={styles.itemDate}>{item.date}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
    const MobileView: FC = () => (
        <div className={styles.card}>
            <h1 className={styles.containerTitle}>BLOG</h1>
            <div className={`${styles.cardList}`}>
                <ul className={`${styles.scrollable}`}>
                    {reviews.map((item: TReviews, index: number) => {
                        return (
                            <li key={index} className={styles.listItem}>
                                <p className={styles.itemText}>{item.text}</p>
                                <p className={styles.itemDate}>{item.date}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

    return (
        <article className={styles.container}>
            {
                isDesktop
                    ? <DesktopView />
                    : <MobileView />
            }
        </article>
    );
};