import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { useLogout } from '@/hooks/useLogout';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const { mutate } = useLogout();

    const handleLogoutClick = () => {
        mutate();
    };

    return (
        <aside className={cx('sidebar')}>
            <Link to="/"><img src="/assets/logo.png" className={cx('sidebar__logo')} /></Link>
            <nav>
                <ul className={cx('nav-list')}>
                    <li className={cx('nav-item')}>Posts</li>
                    <li className={cx('nav-item')} onClick={handleLogoutClick}>Logout</li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar