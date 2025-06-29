import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import classNames from 'classnames/bind';

import styles from './DataWarehouseIntro.module.scss';
import Button from '@/components/Button/Button';

const cx = classNames.bind(styles);

const DataWarehouseIntro = () => {
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);

    const isDescriptionInView = useInView(descriptionRef, { once: true, margin: '-100px' });
    const isImageInView = useInView(imageRef, { once: true, margin: '-100px' });

    return (
        <div className={cx('intro-container')}>
            <div className={cx('intro-content')}>
                <h1 className={cx('intro-content__title')}>
                    Save your data storage here.
                </h1>

                <motion.p
                    ref={descriptionRef}
                    className={cx('intro-content__description')}
                    initial={{ opacity: 0, y: -30 }}
                    animate={isDescriptionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                </motion.p>

                <Button
                    children="Learn more"
                    variant="secondary"
                />
            </div>

            <motion.div
                ref={imageRef}
                className={cx('intro-image')}
                initial={{ opacity: 0, y: 50 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
                <img src="/assets/intro.png" alt="Data Warehouse Intro" />
            </motion.div>
        </div>
    );
};

export default DataWarehouseIntro;
