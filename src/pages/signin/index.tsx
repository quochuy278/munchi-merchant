import { Preferences } from '@capacitor/preferences'
import { zodResolver } from '@hookform/resolvers/zod'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LoadingButton } from '@mui/lab'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TypeOf } from 'zod'
import Notification from '../../components/notification'
import { AppDispatch } from '../../store'
import { setLoginState } from '../../store/auth-slice'
import { useSignInUserMutation } from '../../store/services-slice'
import { displayError } from '../../utils/displayError'
import { signInSchema } from '../../utils/validateInput'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
type SignInInput = TypeOf<typeof signInSchema>
const theme = createTheme()
const SignInPage = () => {
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
    const [showError, setShowError] = useState(false)
    const navigate = useNavigate()
    const [signinUser, { isLoading: loading }] = useSignInUserMutation()
    // const { isLoading, isAuthenticated } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
    } = useForm<SignInInput>({
        resolver: zodResolver(signInSchema),
    })

    // useEffect(() => {
    //     preferencesCheck('authenticateData')
    //     // if (!isValid || !isAuthenticated || (!isValid && !isAuthenticated)) {
    //     //     navigate('/signin')
    //     // }
    //     if (isAuthenticated) navigate('/business', { replace: true })
    // }, [isAuthenticated])
    const onHandleSubmit: SubmitHandler<SignInInput> = async (values) => {
        try {
            const response: any = await signinUser({
                email: values.email,
                password: values.password,
            })
            if (response.error) {
                console.log(response)
                setShowError(true)
                setError(true)
                setMessage('response.error.data?.result[0]')
                return
            } else {
                await Preferences.set({
                    key: 'loginState',
                    value: JSON.stringify({
                        publicUserId: response.data.publicId,
                        verifyToken: response.data.verifyToken,
                        isAuthenticated: true,
                        publicBusinessId: null,
                        businessName: null,
                        enabled: null,
                    }),
                })
                dispatch(
                    setLoginState({
                        publicUserId: response.data.publicId,
                        verifyToken: response.data.verifyToken,
                        isAuthenticated: true,
                        publicBusinessId: null,
                        businessName: null,
                    })
                )
                navigate('/business', { replace: true })
            }

            // await Preferences.clear()
            // dispatch(setAuthenticated(true))
            // navigate('/business', { replace: true }) //async action
        } catch (error) {
            const errorMsg = displayError(error)
        }
    }
    setTimeout(() => {
        setShowError(false)
    }, 5000)
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onHandleSubmit)}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            type="email"
                            {...register('email')}
                            error={!!errors['email']}
                            helperText={errors['email'] ? errors['email'].message : ''}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            {...(show ? { type: 'text' } : { type: 'password' })}
                            id="password"
                            {...register('password')}
                            autoComplete="current-password"
                            error={!!errors['password']}
                            helperText={errors['password'] ? errors['password'].message : ''}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => setShow(!show)}>
                                        {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                ),
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            loadingPosition="center"
                            {...(loading ? { loading: true } : { loading: false })}
                        >
                            Sign In
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {showError ? (
                    <Box sx={{ marginTop: '20px' }}>
                        <Notification message={message} isError={error} />
                    </Box>
                ) : null}
            </Container>
        </ThemeProvider>
    )
}

export default SignInPage
