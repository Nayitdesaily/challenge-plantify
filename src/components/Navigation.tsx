import { ThemeProvider } from "@emotion/react";
import { Bookmark, Coffee } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, Paper, createTheme } from "@mui/material";
import { useState } from "react";
import { theme } from "../utility";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../models";

export default function Navigation() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const muiTheme = createTheme({
        components: {
            MuiBottomNavigationAction: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": {
                            color: theme.primary,
                            borderBottom: "3px solid",
                        },
                    },
                    label: {
                        "&.Mui-selected": {
                            color: theme.primary,
                        },
                    },
                    iconOnly: {
                        color: theme.primary,
                    },
                },
            },
        },
    });

    return (
        <Box sx={{ pb: 7, width: "100%" }}>
            <CssBaseline />
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={4}>
                <ThemeProvider theme={muiTheme}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(_event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction
                            label="Reservar"
                            icon={<Bookmark />}
                            onClick={() => navigate(`/${PublicRoutes.RESERVAS}`, { replace: true })}
                        />
                        <BottomNavigationAction
                            label="Mis Turnos"
                            icon={<Coffee />}
                            onClick={() => navigate(`/${PublicRoutes.TURNOS}`, { replace: true })}
                        />
                    </BottomNavigation>
                </ThemeProvider>
            </Paper>
        </Box>
    );
}
