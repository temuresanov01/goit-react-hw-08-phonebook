import HomeIcon from '@material-ui/icons/Home';
import s from './HomeView.module.css';
import { Typography } from '@material-ui/core';

const HomeView = () => {
  return (
    <div className={s.wrapper}>
      <HomeIcon color="primary" className={s.img} />
      <Typography color="primary" variant="h3">
        This is home for my contacts
      </Typography>
    </div>
  );
};

export default HomeView;
