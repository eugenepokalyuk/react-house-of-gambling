import { FC, useEffect, useState } from "react";
import styles from "./Banner.module.css";

import { ReactComponent as Dollar } from "../../images/banner/Dollar.svg"
import { ReactComponent as Partner } from "../../images/banner/Partner.svg"
import { ReactComponent as Shield } from "../../images/banner/Shield.svg"
import { ReactComponent as Soccer } from "../../images/banner/Soccer.svg"
import { ReactComponent as Timer } from "../../images/banner/Timer.svg"
import { ReactComponent as Crown } from "../../images/banner/Crown.svg"
import { ReactComponent as CrownBig } from "../../images/banner/CrownBig.svg"
import { ReactComponent as World } from "../../images/banner/World.svg"

export const Banner: FC = () => {
    const [columnCount, setColumnCount] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.height < 1024) {
                setColumnCount(8); // Установите количество элементов в столбцах для ширины экрана менее 1024px
            } else {
                setColumnCount(4); // Установите стандартное количество элементов в столбцах для ширины экрана 1024px и больше
            }
        };

        handleResize(); // Вызовите функцию для определения количества элементов столбцов при загрузке страницы

        window.addEventListener("resize", handleResize); // Добавьте обработчик события изменения размера окна браузера

        return () => {
            window.removeEventListener("resize", handleResize); // Удалите обработчик события при размонтировании компонента
        };
    }, []);

    const columnFirst = () => {
        return (
            <ul className={`${styles.cardList} ${styles.animatedUp} ${styles.firstCol}`}>
                {Array(columnCount).fill(0).map((_, index) => (
                    <span key={index}>
                        <li>
                            <Dollar />
                        </li>

                        <li>
                            <Soccer />
                        </li>

                        <li>
                            <Partner />
                        </li>

                        <li>
                            <Shield />
                        </li>
                    </span>
                ))}
            </ul>
        )
    }
    const columnSecond = () => {
        return (
            <ul className={`${styles.cardList} ${styles.animatedDown} ${styles.secondCol}`}>
                {Array(columnCount).fill(0).map((_, index) => (
                    <span key={index}>
                        <li>
                            <Partner />
                        </li>

                        <li>
                            <Timer />
                        </li>

                        <li>
                            <Crown />
                        </li>

                        <li>
                            <World />
                        </li>
                    </span>
                ))}
            </ul>
        )
    }
    const columnThird = () => {
        return (
            <ul className={`${styles.cardList} ${styles.animatedUpSpeed} ${styles.thirdCol}`}>
                {Array(columnCount).fill(0).map((_, index) => (
                    <span key={index}>
                        <li>
                            <CrownBig />
                        </li>

                        <li>
                            <Partner />
                        </li>

                        <li>
                            <Shield />
                        </li>

                        <li>
                            <Soccer />
                        </li>
                    </span>
                ))}
            </ul>
        )
    }
    return (
        <article className={styles.container}>
            {columnFirst()}
            {columnSecond()}
            {columnThird()}
        </article>
    );
};