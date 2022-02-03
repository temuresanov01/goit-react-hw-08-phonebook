import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';
import Typography from '@material-ui/core/Typography';

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact>
        <Typography className={s.link} variant="h4">
          Home
        </Typography>
      </NavLink>
    </nav>
  );
}

export default Navigation;
