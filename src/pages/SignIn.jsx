import { Box, InputAdornment, Stack, TextField, Button } from "@mui/material"
import logo from '@/assets/images/logo2.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router";
import { useAtom } from 'jotai';
import { userAtom } from '@/store/store';
import { useEffect } from "react";
import { PREFIX } from "@/utils/constants/routeConst";
import { useForm, Controller } from "react-hook-form"

const SignIn = () => {
  const navigate = useNavigate()
  const [user, setUser] = useAtom(userAtom);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  useEffect(() => {
    if (user) {
      navigate(PREFIX[user.role])
    }
  }, [navigate, user])

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_URL + "/index.php/auth_rest/login", {
        ...data
      }, { withCredentials: true });

      // Set userAtom with the user data returned from the server
      if (response.data.status) {
        setUser(response.data.payload);
      }
    } catch (error) {
      // Set error message in the errors object of react-hook-form
      alert(error.response.data.message)
      setUser(null);
    }
  }

  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack width={460} padding="30px" spacing={"40px"} sx={{ bgcolor: "var(--mirage)", borderRadius: "8px" }} >
          <Box className="flex-center" >
            <img src={logo} alt="logo.png" />
          </Box>
          <Stack width={"100%"} spacing={"30px"} >
            <Controller
              name="username"
              control={control}
              rules={{ required: 'Username is required.' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label={"User Name"}
                  type="text"
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : ""}
                  sx={{ height: "48px" }} // Add fixed height to prevent shifting
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }} >
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required.' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="passwordField"
                  variant="outlined"
                  color="primary"
                  size="small"
                  label={"Password"}
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  sx={{ height: "48px" }} // Add fixed height to prevent shifting
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }} >
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Stack>
          <Box className="flex-center" >
            <Button type="submit" variant="contained" color="primary">Sign In</Button>
          </Box>
        </Stack>
      </form>
    </Box>
  )
}

export default SignIn