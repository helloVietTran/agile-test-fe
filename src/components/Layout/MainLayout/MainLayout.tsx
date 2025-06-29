import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = () => {
  return (
    <div className={cx('main-layout')}>
      <main className={cx('main-layout__content')}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
