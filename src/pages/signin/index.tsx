import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppDispatch, useTypedSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { SignInService } from '../../services/services'
import { setUser, signin, signIn } from '../../store/auth-slice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInSchema } from '../../utils/validateInput'
import { TypeOf } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Notification from '../../components/notification'
import { displayError } from '../../utils/displayError'

type SignInInput = TypeOf<typeof signInSchema>
const theme = createTheme()
const SignInPage = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    resetField,
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  })
  const onHandleSubmit: SubmitHandler<SignInInput> = async (values) => {
    try {
      const response = await SignInService({
        email: values.email,
        password: values.password,
      })
      setError(false)
      dispatch(setUser(response.data))
      console.log(response.data)
    } catch (error) {
      const errorMsg = displayError(error)
      setShowError(true)
      setError(true)
      setMessage(errorMsg)
    }
  }
console.log(isSubmitSuccessful , error)
  if (isSubmitSuccessful && !error) {
    console.log('signing in')
    dispatch(signIn())
    navigate('/business', {replace:true})
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
              type="password"
              id="password"
              {...register('password')}
              autoComplete="current-password"
              error={!!errors['password']}
              helperText={errors['password'] ? errors['password'].message : ''}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
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
