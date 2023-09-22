import { Box, InputAdornment, Stack, TextField, Button } from "@mui/material"
import logo from '@/assets/images/Logo2.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleForm = (fieldName, value) => {
    setForm((pre) => {
      return { ...pre, [fieldName]: value }
    })
  }

  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Stack width={460} padding="30px" spacing={"40px"} sx={{ bgcolor: "var(--mirage)", borderRadius: "8px" }} >
        <Box className="flex-center" >
          <img src={logo} alt="logo.png" />
        </Box>
        <Stack width={"100%"} spacing={"20px"} >
          <TextField size="small" label={"User Name"}
            type="text"
            value={form.username}
            onChange={(event) => handleForm("username", event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }} >
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            className="passwordField"
            variant="outlined"
            color="primary"
            size="small"
            label={"Password"}
            type="password"
            onChange={(event) => handleForm("password", event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }} >
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Box className="flex-center" >
          <Button variant="contained" color="primary" >Sign In</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default SignIn