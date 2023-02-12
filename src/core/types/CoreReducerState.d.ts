import { NotificationObject } from './notifications.d';
import { ProtectedRoute } from '../routing/routes.ts';
export interface CoreReducerState {
  notifications: NotificationObject[];
  activeRoute: ProtectedRoute | PublicRoute;
}
