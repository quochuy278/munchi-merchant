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
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { FormControl, MenuItem } from '@mui/material'
import { useState } from 'react'
import { SignUpService } from '../../services/services'
import Notification from '../../components/notification'
import {signIn,setUser} from '../../store/auth-slice'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '../../utils/validateInput'
import { TypeOf } from 'zod'
import { displayError } from '../../utils/displayError'
const theme = createTheme()
type SignUpInput = TypeOf<typeof signUpSchema>
const SignUpPage = () => {
  const [role, setRole] = useState('')
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
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  })
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string)
  }

  const onHandleSubmit: SubmitHandler<SignUpInput> = async (values) => {
    try {
      const response = await SignUpService({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        role: values.role,
      })
      dispatch(setUser(response.data))
    } catch (error) {
      const errorMsg = displayError(error)
      setShowError(true)
      setError(true)
      setMessage(errorMsg)
    }
  }
  if (isSubmitSuccessful && !error) {
    console.log('signing in')
    dispatch(signIn())
    navigate('/business')
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onHandleSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Roles"
                    name="role"
                    onChange={handleRoleChange}
                  >
                    <MenuItem value={0}>Administrator</MenuItem>
                    <MenuItem value={1}>City manager</MenuItem>
                    <MenuItem value={2}>Business owner</MenuItem>
                    <MenuItem value={3}>Customer</MenuItem>
                    <MenuItem value={4}>Driver</MenuItem>
                    <MenuItem value={5}>Driver manager</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
        {error ? (
          <Box sx={{ marginTop: '20px' }}>
            <Notification message={message} isError={error} />
          </Box>
        ) : null}
      </Container>
    </ThemeProvider>
  )
}
export default SignUpPage
