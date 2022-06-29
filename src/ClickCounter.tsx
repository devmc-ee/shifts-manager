import { useState } from 'react';

interface IClickCounter {
    init: number;
}

export const ClickCounter = ({ init = 0 }: IClickCounter): JSX.Element => {
    const [counted, set] = useState(init);
    const clickHandler = () => set((prev) => prev + 1);

    return (
        <div>
            <button onClick={clickHandler}>Clicked: {counted} times</button>
        </div>
    );
};
