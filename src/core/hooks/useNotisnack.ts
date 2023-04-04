import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useAppSelector } from '../../config/redux/hooks';
import { AppState } from '../../config/redux/store';

export const useNotisnack = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notifications = useAppSelector(({ core }: AppState) => core.notifications);

  useEffect(() => {
    if (notifications.length) {
      for (const notification of notifications) {
        enqueueSnackbar(notification.message, {
          variant: notification.level,
        });
      }
    }
  }, [notifications]);

  return;
};
