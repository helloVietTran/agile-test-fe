import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/Button/Button"
import styles from "./Header.module.scss";
import { useAuth } from "@/context/AuthContext";
import { useLogout } from "@/hooks/useLogout";

const cx = classNames.bind(styles);

const Header = () => {
  const { isAuthenticated } = useAuth();
  const { mutate } = useLogout();

  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSignInClick = () => {
    navigate("/sign-in");
  };

  const handleLogoutClick = () => {
    mutate();
  };

  return (
    <div className={cx('header')}>
      <div className={cx('header_wrapper')}>
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
          />
        </Link>
        {
          isAuthenticated ?
            <div className={cx('auth')}>
              <Button
                onClick={handleProfileClick}
                variant="secondary"
              >
                Profile
              </Button>
              <Button
                onClick={handleLogoutClick}
                children="Logout"
                variant="secondary"
              />
            </div>
            :
            <Button
              onClick={handleSignInClick}
              children="Sign In"
            />
        }

      </div>
    </div>
  )
}

export default Header