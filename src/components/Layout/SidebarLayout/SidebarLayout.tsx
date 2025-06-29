import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SidebarLayout.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';

const cx = classNames.bind(styles);


const SidebarLayout = () => {
    return (
        <div className={cx('sidebar-layout')}>
            <div className={cx('sidebar-wrapper')}>
                <Sidebar />
            </div>
            <main className={cx('content-wrapper')}><Outlet /></main>
        </div>
    );
};

export default SidebarLayout;
