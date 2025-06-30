import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import styles from './SidebarLayout.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';

const cx = classNames.bind(styles);

const SidebarLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={cx('sidebar-layout')}>
      {/* responsive button */}
      <button className={cx('hamburger')} onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </button>

      {/* Sidebar overlay responsive */}
      <div className={cx('sidebar-overlay', { open: isSidebarOpen })}>
        <button className={cx('close-button')} onClick={closeSidebar}>
          <IoMdClose size={24} />
        </button>
        <Sidebar />
      </div>

      {/* Sidebar desktop */}
      <div className={cx('sidebar-wrapper')}>
        <Sidebar />
      </div>

      <main className={cx('content-wrapper')}>
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
