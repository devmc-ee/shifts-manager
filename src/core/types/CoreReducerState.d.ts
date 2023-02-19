import { ProtectedRoute } from '../../config/routes/routes';
import { NotificationObject } from './notifications.d';

export interface CoreReducerState {
  notifications: NotificationObject[];
  activeRoute: ProtectedRoute | PublicRoute;
}
