import { useNotisnack } from '../hooks/useNotisnack';
import { addPostfixToClasses } from '../utils/addPostfixToClasses';
import './Page.css';

interface PageProps {
  classes: string;
  children: JSX.Element | JSX.Element[] | string;
}

export const Page = ({ classes, children }: PageProps): JSX.Element => {
  const extraClasses = addPostfixToClasses('page', classes);

  useNotisnack();

  return <div className={`page ${extraClasses}`}>{children}</div>;
};
