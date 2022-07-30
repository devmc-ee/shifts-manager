import { addPostfixToClasses } from "../../utils/addPostfixToClasses";

interface PageProps {
    classes: string;
    children: JSX.Element | JSX.Element[] | string;
}

export const Page = ({ classes, children }: PageProps): JSX.Element => {
    const extraClasses = addPostfixToClasses('page', classes);

    return <div className={`page ${extraClasses}`}>
        {children}
    </div>
}