import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = () => {
  return (
    <main className={cx('main-layout')}>
      <div className={cx('main-layout__content')}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;