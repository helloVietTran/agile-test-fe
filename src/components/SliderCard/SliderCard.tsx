import classNames from 'classnames/bind';
import styles from './SliderCard.module.scss';
import type { Gallery } from '@/types/gallery';

const cx = classNames.bind(styles);

interface SliderCardProps extends Gallery {}

const SliderCard: React.FC<SliderCardProps> = ({
  name = '<fallback-value>',
  personalWebsite = '<fallback-value>.com',
  desctiption,
  description,
  imageUrl = '/assets/fallback-avatar.png',
}) => {
  return (
    <div className={cx('card')}>
      <div className={cx('card__inner')}>
        <div className={cx('card__avatar')}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className={cx('card__info')}>
          <h3 className={cx('card__name')}>{name}</h3>
          <a href="#" className={cx('card__link')}>
            {personalWebsite}
          </a>
          <p className={cx('card__description')}>
            {description || desctiption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
