import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Импортируем иконку бургера

const Layout = () => {
    const [openDrawer, setOpenDrawer] = useState(false); // Состояние для управления открытием шторки

    // Обработчик для открытия шторки
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    // Обработчик для закрытия шторки
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="lg">
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            {/* Кнопка "Главное меню" слева */}
                            <Button
                                component={Link}
                                to="/"
                                sx={{ color: 'white', textTransform: 'none' }}
                            >
                                Главное меню
                            </Button>

                            {/* Кнопка-бургер, расположенная справа */}
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                                sx={{ ml: 'auto' }} // Кнопка-бургер справа
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>

            {/* Шторка */}
            <Drawer
                anchor="top"
                open={openDrawer}
                onClose={handleDrawerClose}
                onMouseLeave={handleDrawerClose} // Закрытие при отведении мыши
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'rgba(0, 0, 2, 0.8)', // Цвет фона шторки
                        color: 'white',
                        paddingTop: 2, // Отступ сверху для шторки
                        height: 'auto', // Высота шторки
                        boxSizing: 'border-box',
                    },
                }}
            >
                <List>
                    <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/Main" onClick={handleDrawerClose}>
                        <ListItemText primary="Main" />
                    </ListItem>
                    <ListItem button component={Link} to="/Profile" onClick={handleDrawerClose}>
                        <ListItemText primary="Profile" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Основной контент */}
            <Outlet />
        </>
    );
};

export default Layout;
