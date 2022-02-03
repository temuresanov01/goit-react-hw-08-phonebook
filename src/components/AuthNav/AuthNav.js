import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import Typography from '@material-ui/core/Typography';

const AuthNav = () => (
  <div className={s.container}>
    <NavLink to="/register" exact>
      <Typography className={s.link} variant="h6">
        Sign up
      </Typography>
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      <Typography className={s.link} variant="h6">
        Log in
      </Typography>
    </NavLink>
  </div>
);

export default AuthNav;
