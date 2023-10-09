import { Navigate, Outlet } from 'react-router-dom'

export const Required = () => {
    const id = localStorage.getItem('id');

    return (
        <>
            {
                id ? <Outlet /> : <Navigate to='/' />
                // apakah id ada ? kalau ada ke outlet, kalau tidak navigate ke '/' (login page)
            }
        </>
    )
}