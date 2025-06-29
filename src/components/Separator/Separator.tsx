import React from 'react';
import classNames from 'classnames/bind';
import styles from './Separator.module.scss';

const cx = classNames.bind(styles);

type SeparatorProps = {
  marginTop?: number | string;
  marginBottom?: number | string;
};

const Separator: React.FC<SeparatorProps> = ({
  marginTop = 24,
  marginBottom = 24,
}) => {
  return (
    <div
      className={cx('separator')}
      style={{
        marginTop: typeof marginTop === 'number' ? `${marginTop}px` : marginTop,
        marginBottom:
          typeof marginBottom === 'number' ? `${marginBottom}px` : marginBottom,
      }}
    />
  );
};

export default Separator;
