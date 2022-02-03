import s from './NotFoundView.module.css';
import ErrorIcon from '@material-ui/icons/Error';
import { Typography } from '@material-ui/core';
export default function NotFoundView() {
  return (
    <main role="alert" className={s.main}>
      <ErrorIcon color="primary" className={s.img} />
      <Typography color="primary" variant="h3">
        Page not found
      </Typography>
    </main>
  );
}
