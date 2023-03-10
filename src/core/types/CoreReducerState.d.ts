import { ProtectedRoute } from '../../config/routes/routes';
import { NotificationObject } from './notifications.d';
import { ISlideInBar } from './SlideInBarsElement.d';

export interface CoreReducerState {
  notifications: NotificationObject[];
  activeRoute: ProtectedRoute | PublicRoute;
  slideInBar: ISlideInBar | null;
}
