import React, { FC } from 'react';
import styles from './ModalOverlay.module.css';

interface ModalOverlayProps {
    onClose: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
    const handleOverlayClick = () => {
        onClose();
    };

    return <div className={styles.overlay} onClick={handleOverlayClick}></div>;
};

export default ModalOverlay;