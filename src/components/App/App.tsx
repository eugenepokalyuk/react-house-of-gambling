import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';

import { HomePage } from '../../pages/HomePage/HomePage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_PATH, ERROR_PATH } from '../../utils/routePath';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faWarning } from '@fortawesome/free-solid-svg-icons';

import { fetchBlogData } from '../../utils/api';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { FETCH_BLOG_FAILURE, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS } from '../../services/actions/blog';
import { useAppDispatch } from '../../services/hooks/hooks';
import AppFooter from '../AppFooter/AppFooter';

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [loading, isLoading] = useState<boolean>(false);
    const [failed, isFailed] = useState<boolean>(false);
    const background = location.state && location.state.background;

    const closeModal = () => {
        navigate(-1);
    };

    useEffect(() => {
        dispatch({ type: FETCH_BLOG_REQUEST });
        isLoading(true);

        fetchBlogData()
            .then(res => {
                isLoading(false);
                dispatch({ type: FETCH_BLOG_SUCCESS, payload: res });
            })
            .catch(error => {
                isFailed(true)
                dispatch({ type: FETCH_BLOG_FAILURE, payload: error });
            });
    }, [dispatch]);

    return (
        <>
            <AppHeader />
            {!loading
                ? <>
                    <Routes location={background || location}>
                        <Route path={DEFAULT_PATH} element={<HomePage />} />
                        <Route path={ERROR_PATH} element={<ErrorPage />} />
                        {/* <Route path={DEFAULT_PATH} element={<ProtectedRoute auth={true} children={<HomePage />} />} /> */}
                        {/* <Route path={ERROR_PATH} element={<ProtectedRoute auth={true} children={<ErrorPage />} />} /> */}
                    </Routes>
                </>
                : <Modal onClose={closeModal} header="Загрузка данных">
                    <div className="mb-4 mt-4">
                    </div>
                    <div>
                        <p className={`${styles.textOrangeColor} text text_type_main-medium mb-8`}>
                            Пожалуйста подождите
                        </p>
                        <div className={`${styles.flex} text_color_inactive`}>
                            <FontAwesomeIcon
                                icon={faSpinner}
                                spin
                                size="5x"
                                className={`${styles.faSpinner}`}
                            />
                        </div>
                    </div>
                </Modal>
            }
            <AppFooter />
        </>
    );
}

export default App;