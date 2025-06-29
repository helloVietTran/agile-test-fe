
import type { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  style,
  ...rest
}) => {
  const buttonClassName = cx('button', variant);

  return (
    <button
      className={buttonClassName}
      style={style}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button