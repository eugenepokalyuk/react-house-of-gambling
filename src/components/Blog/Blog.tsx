import { FC } from "react";
import styles from "./Blog.module.css";
import { useAppSelector } from "../../services/hooks/hooks";

type TReviews = {
    text: string,
    date: string
}

export const Blog: FC = () => {
    const reviews = useAppSelector(
        (store) => store.blog.reviews
    );
    return (
        <article className={styles.container}>
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
        </article>
    );
};