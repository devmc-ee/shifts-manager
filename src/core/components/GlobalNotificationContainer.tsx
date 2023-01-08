import { Snackbar, Alert } from '@mui/material';
import { useAppSelector } from '../../config/redux/hooks';

export const GlobalNotificationContainer = () => {
  const notifications = useAppSelector(({ core }) => core.notifications);

  return (
    <>
      {notifications.map((notification) => {
        return (
          <Snackbar key={notification.id} open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={100}>
            <Alert severity={notification.level} sx={{ width: '100%' }}>
              {notification.message}
            </Alert>
          </Snackbar>
        );
      })}
    </>
  );
};
