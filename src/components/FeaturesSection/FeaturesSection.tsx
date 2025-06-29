import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import classNames from 'classnames/bind';

import styles from './FeaturesSection.module.scss';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import { featuresData, Feature } from '@/config/data';

const cx = classNames.bind(styles);

const FeaturesSection = () => {
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true, margin: '-100px' });

    return (
        <div className={cx('features-container')}>
            <motion.div
                ref={headingRef}
                className={cx('heading-wrapper')}
                initial={{ opacity: 0, y: -40 }}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h2 className={cx('heading-wrapper__title')}>Features</h2>
                <p className={cx('heading-wrapper__subtitle')}>
                    Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </p>
            </motion.div>

            {/* Features List */}
            <div className={cx('features-list')}>
                {featuresData.map((feature: Feature) => {
                    const itemRef = useRef(null);
                    const isItemInView = useInView(itemRef, { once: true, margin: '-100px' });

                    return (
                        <div
                            ref={itemRef}
                            className={cx('features-list__item')}
                            key={feature.id}
                        >
                            {/* Background Image Scale */}
                            <motion.div
                                className={cx('features-list__item__bg')}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isItemInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <img src={feature.backgroundImage} alt={`${feature.title} Background`} />
                            </motion.div>

                            {/* Icon scale + fade*/}
                            <motion.div
                                className={cx('features-list__item__icon')}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isItemInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
                            >
                                <img src={feature.image} alt={`${feature.title} Icon`} />
                            </motion.div>

                            {/* Content Scale + Fade */}
                            <motion.div
                                className={cx('feature-item-content')}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isItemInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                            >
                                <h3 className={cx('feature-item-content__title')}>{feature.title}</h3>
                                <p className={cx('feature-item-content__description')}>
                                    {feature.description}
                                </p>
                                <a href="#" className={cx('feature-item-content__button')}>
                                    <span>Learn more</span>
                                    <ArrowRightIcon />
                                </a>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturesSection;
