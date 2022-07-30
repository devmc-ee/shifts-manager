import { useAppSelector } from "../../config/redux/hooks"

export const StaffListContainer = (): JSX.Element => {
    const staffList = useAppSelector(({staff}) => staff.staff)
    return <ul>
        {staffList && Object.values(staffList).map((staff) => (
            <li>{`${staff.name} ${staff.email}`}</li>
                )
            )
        }
    </ul>
}