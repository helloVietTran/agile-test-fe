import Slider from 'react-slick';
import classNames from 'classnames/bind';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { useEffect, useRef } from 'react';

import styles from './SliderSection.module.scss';
import SliderCard from '@/components/SliderCard/SliderCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGalleries } from '@/hooks/useGalleries';

const cx = classNames.bind(styles);

function NextArrow({ onClick }: any) {
  return (
    <div className={cx('nav-button', 'next')} onClick={onClick}>
      <IoIosArrowRoundForward className={cx('icon')} />
    </div>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <div className={cx('nav-button', 'prev')} onClick={onClick}>
      <IoIosArrowRoundBack className={cx('icon')} />
    </div>
  );
}

const SliderSection = () => {
  const { data } = useGalleries();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const controlsSection = useAnimation();
  const controlsSlider = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsSection.start({ opacity: 1, y: 0 });
      controlsSlider.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controlsSection, controlsSlider]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className={cx('custom-dots')}>{dots}</ul>
      </div>
    ),
    customPaging: () => <div className={cx('dot')} />,
  };

  return (
    <motion.section
      ref={ref}
      className={cx('slider-section')}
      initial={{ opacity: 0, y: 80 }}
      animate={controlsSection}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className={cx('title')}>Testimonials</h2>
      <motion.div
        className={cx('slider-wrapper')}
        initial={{ opacity: 0, y: 40 }}
        animate={controlsSlider}
        transition={{ duration: 0.8 }}
      >
        <Slider {...settings}>
          {data && data.map((item) => (
            <div key={item.id} className={cx('slide')}>
              <SliderCard
                
                id={item.id}
                name={item.name}
                personalWebsite={item.personalWebsite}
                description={item.description}

                desctiption={item.desctiption}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default SliderSection;