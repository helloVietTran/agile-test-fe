import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiLogoGithub } from 'react-icons/bi';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <motion.footer
      className={cx('footer')}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className={cx('footer__info')}>
        <a href="#">
          <img src="/assets/logo-with-text.png" alt="Data Warehouse Logo" />
        </a>
        <p className={cx('footer__address')}>
          Warehouse Society, 234 Bahagia Ave Street PRBW 29281
        </p>
        <i className={cx('footer__email')}>info@warehouse.project</i>
        <i className={cx('footer__phone')}>1-232-3434 (Main)</i>
      </div>

      <div className={cx('footer__sections')}>
        {/* Cột 1 - About */}
        <div>
          <h3 className={cx('footer__section-title')}>About</h3>
          <ul className={cx('footer__section-list')}>
            <li className={cx('footer__section-item')}>Profile</li>
            <li className={cx('footer__section-item')}>Features</li>
            <li className={cx('footer__section-item')}>Careers</li>
            <li className={cx('footer__section-item')}>DW News</li>
          </ul>
        </div>

        {/* Cột 2 - Help */}
        <div>
          <h3 className={cx('footer__section-title')}>Help</h3>
          <ul className={cx('footer__section-list')}>
            <li className={cx('footer__section-item')}>Support</li>
            <li className={cx('footer__section-item')}>Sign Up</li>
            <li className={cx('footer__section-item')}>Guide</li>
            <li className={cx('footer__section-item')}>Reports</li>
            <li className={cx('footer__section-item')}>Q & A</li>
          </ul>
        </div>

        {/* Cột 3 - Social Media */}
        <div>
          <h3 className={cx('footer__section-title')}>Social Media</h3>
          <div className={cx('footer__socials')}>
            <button className={cx('footer__social-icon')}>
              <BsYoutube size={20} />
            </button>
            <button className={cx('footer__social-icon')}>
              <BsInstagram size={20} />
            </button>
            <button className={cx('footer__social-icon')}>
              <BiLogoGithub size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
