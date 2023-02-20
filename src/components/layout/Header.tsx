import { Preferences } from '@capacitor/preferences'
import CircleIcon from '@mui/icons-material/Circle'
import LogoutIcon from '@mui/icons-material/Logout'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Switch from '@mui/material/Switch'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { setLogoutState } from '../../store/auth-slice'
import MunchiLogo from '../../assets/icons/logo.svg'
import { LoginState } from '../../shared/interfaces/user.interface'
import { displayError } from '../../utils/displayError'
import { setClearBusinessData } from '../../store/business-slice'

type Anchor = 'top' | 'left' | 'bottom' | 'right'
export default function Header({ loginState }: any) {
    const [isOpen, setIsOpen] = useState(false)
    const [authState, setAuthState] = useState<any>({})
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('common')
    console.log(loginState)
    const [state, setState] = React.useState({
        left: false,
    })
    const toggleDrawer =
        (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }
    const onLogoutHandler = async () => {
        await Preferences.clear()
        dispatch(setLogoutState({}))
       
        dispatch(setClearBusinessData())
        navigate('/signin', { replace: true })
    }
    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key="Dashboard" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem key="Logout" disablePadding>
                    <ListItemButton onClick={onLogoutHandler}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#F3F5F7' }}>
                <Toolbar>
                    <div>
                        <React.Fragment key={'left'}>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                sx={{ padding: 0 }}
                                onClick={toggleDrawer('left', true)}
                            >
                                <MenuIcon sx={{ color: '#000000' }} />
                            </IconButton>
                            <SwipeableDrawer
                                anchor={'left'}
                                open={state['left']}
                                onClose={toggleDrawer('left', false)}
                                onOpen={toggleDrawer('left', true)}
                            >
                                {list('left')}
                            </SwipeableDrawer>
                        </React.Fragment>
                    </div>

                    <Box sx={{ flex: 1 }} display="flex" justifyContent="space-between">
                        {/* <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                backgroundColor: '#FFFFFF',
                                width: '125px',
                                height: '32px',
                                borderRadius: 5,
                                marginLeft: 2,
                            }}
                            component={Link}
                            to={'/'}
                        > */}
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="220px"
                        >
                            {/* <FactCheckIcon
                                    color="primary"
                                    sx={{ height: '15px', width: '15px', marginRight: '5px' }}
                                /> */}
                            <Typography color={'black'} variant="h3">
                                {t('header.title')}
                            </Typography>
                        </Box>
                        {/* svg */}
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            width="150px"
                        >
                            {/* <FactCheckIcon
                                    color="primary"
                                    sx={{ height: '15px', width: '15px', marginRight: '5px' }}
                                /> */}
                            <img src={MunchiLogo} width={100} height={50} />
                        </Box>
                        {/* </IconButton> */}
                        {authState.businessName || loginState.businessName ? (
                            <Box display={'flex'} alignItems="center">
                                <Typography color={'black'} fontSize="16px" lineHeight="13px">
                                    {authState.businessName || loginState.businessName}
                                </Typography>

                                <Switch
                                    checked={isOpen}
                                    onChange={() => setIsOpen(!isOpen)}
                                    sx={{ color: 'black' }}
                                />
                                <CircleIcon
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        marginRight: '10px',
                                    }}
                                    {...(isOpen ? { color: 'success' } : { color: 'warning' })}
                                />
                                {/* <Typography color={'#000000'} fontSize="12px" lineHeight="16px">
                                {isOpen ? t('restaurantStatus.open') : t('restaurantStatus.close')}
                            </Typography> */}
                            </Box>
                        ) : null}

                        {/* <Box display={"flex"} alignItems="center">
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => i18n.changeLanguage("en")}>en</Button>
                <Button onClick={() => i18n.changeLanguage("fi")}>fi</Button>
              </ButtonGroup>
            </Box> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
