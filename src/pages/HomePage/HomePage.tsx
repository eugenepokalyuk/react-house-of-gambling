import { Banner } from "../../components/Banner/Banner";
import { BecomePartner } from "../../components/BecomePartner/BecomePartner";
import { Blog } from "../../components/Blog/Blog";
import styles from "./HomePage.module.css";

export const HomePage = () => {
    const handleClick = () => {
        console.log("handleClick");
    }

    return (
        <section className={styles.container}>
            <BecomePartner />
            <Banner />
            <Blog />
        </section>
    )
};