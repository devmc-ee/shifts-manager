import { useNotisnack } from '../../hooks/useNotisnack';
import { addPostfixToClasses } from '../../utils/addPostfixToClasses';
import './PageContent.css';

interface PageProps {
  classes: string;
  children: JSX.Element | JSX.Element[] | string;
}

export const PageContent = ({ classes, children }: PageProps): JSX.Element => {
  const extraClasses = addPostfixToClasses('page-content', classes);

  useNotisnack();

  return <div className={`page-content ${extraClasses}`}>{children}</div>;
};
