import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import EmulatorFrame from "./EmulatorFrame";


export default function SampleComponent() {

    return (
        <>
            <Box sx={{
                py: 5,
                textAlign: 'center'
            }}>
                <Typography variant="h1">
                    CS 2261 @ GT
                </Typography>
                <Box sx={{ py: 5, mx: 4 }}>
                    <Divider color="#AAAAAA" />
                </Box>
                <Typography variant="h3" pb={10} >
                    Think of creative name on the spot.
                </Typography>
                <Box sx={{ width: "480px", height: "320px", m: "auto"}}>
                    <EmulatorFrame game="" />
                </Box>
                <Typography variant="h1" color="secondary.main" >
                    Purple text! :D
                </Typography>
                <Typography variant="h2" color="tertiary.main" >
                    Green text... :/
                </Typography>
                <Typography variant="h3" color="secondary.main" >
                    Purple text! :D
                </Typography>
                <Typography variant="h4" color="tertiary.main" >
                    Green text... :/
                </Typography>
                <Typography variant="h5" color="secondary.main" >
                    Purple text! :D
                </Typography>
                <Typography variant="h6" color="primary.main" >
                    Grey text? :O
                </Typography>
            </Box>
        </>
    )
}