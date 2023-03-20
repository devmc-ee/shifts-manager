import { AppState } from '../../config/redux/store';
import { useAppSelector } from '../../config/redux/hooks';

export const Contacts = (): JSX.Element => {
  const { userName, userEmail } = useAppSelector(({ user }: AppState) => ({
    userName: user.userFullName,
    userEmail: user.userName,
  }));

  return (
    <div className="contacts-page">
      <span>Name: {userName}!</span>
      <span>Email: {userEmail}!</span>
    </div>
  );
};
