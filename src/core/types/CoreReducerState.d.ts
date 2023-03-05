import { ProtectedRoute } from '../../config/routes/routes';
import { NotificationObject } from './notifications.d';
import { SlideInBarConfig } from './SlideInBarsElement.d';

export interface CoreReducerState {
  notifications: NotificationObject[];
  activeRoute: ProtectedRoute | PublicRoute;
  slideInBarConfigs: SlideInBarConfig[];
}
