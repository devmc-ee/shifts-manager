import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../config/redux/hooks";
import { Staff } from "../redux/StaffReducerState";
import { createStaff } from "../redux/staffSlice";
import { StaffListContainer } from "./StaffListContainer";

export const NewStaffContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [isOpenState, setOpenState] = useState(false);
    const toggleFormState = () => setOpenState((prev) => !prev);
    const [staffData, setStaffData] = useState<Staff>({ uuid: '', name: '', email: ''})

    const newStaffCreateHandle = () => {
        dispatch(createStaff({
            ...staffData,
            uuid: 'string',
        }));
    }

    const changeStaffData = ({target}: ChangeEvent<HTMLInputElement>) => {
        const { value, id } = target;
        setStaffData((prev) => {
            return { ...prev,
                [id]: value}
        })
    }

    console.log(staffData);

    return (
    <>
        <button type="button" onClick={toggleFormState}>Add new staff</button>
        {isOpenState && (
            <div>
                 <input onChange={changeStaffData} type="text" id="name" placeholder="name"/>
                 <input onChange={changeStaffData} type="email" id="email" placeholder="email"/>
                 <button type="button" onClick={newStaffCreateHandle}>
                    create
                 </button>
            </div>
        ) }
        <StaffListContainer />
    </>
    )
}