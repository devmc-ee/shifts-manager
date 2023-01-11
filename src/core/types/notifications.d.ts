export enum NotificationLevelType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface NotificationObject {
  id: string;
  message: string;
  level: NotificationLevelType;
  source: unknown;
}
