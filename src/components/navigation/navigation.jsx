import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user-context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              signout
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
