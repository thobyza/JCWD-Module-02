import { Box } from "@mui/material"

export const ErrorPage = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            fontSize: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
            Page Not Found.
        </Box>
    )
}