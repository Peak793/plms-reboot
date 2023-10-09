import { Box, InputAdornment, Stack, TextField, Button } from "@mui/material"
import logo from '@/assets/images/Logo2.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router";
import { useAtom } from 'jotai';
import { userAtom } from '@/store/store';
import { useState, useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    password: ""
  })
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const roleRedirect = {
      'supervisor': '/ins',
      'ta': '/ins',
      'student': '/stu',
    }

    if (user) {
      navigate(roleRedirect[user.role])
    }
  }, [navigate, user])

  const handleForm = (fieldName, value) => {
    setForm((pre) => {
      return { ...pre, [fieldName]: value }
    })
  }

  const handleSubmit = async () => {

    setForm(prev => ({
      ...prev,
      'password': ''
    }))

    try {
      await axios.post(import.meta.env.VITE_BASE_API_URL + "/auth_rest/login", {
        ...form
      }, { withCredentials: true }).then(res => {
        if (res.data.status) {
          setUser(res.data.payload);
          localStorage.setItem('user', JSON.stringify(res.data.payload));
        }
      })
    } catch (error) {
      localStorage.removeItem('user')
      alert(error.response.data.message)
    }
  }

  // const checkIsLoggedIn = async () => {
  //   try {
  //     const response = await axios.get(import.meta.env.VITE_BASE_API_URL + "/auth_rest/logged_in_check", { withCredentials: true });
  //     console.log(response.data)

  //   } catch (error) {
  //     console.error(error.response ? error.response.data.message : error.message);
  //   }
  // }

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
            value={form.password}
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
          <Button variant="contained" color="primary" onClick={handleSubmit} >Sign In</Button>
        </Box>
        {/* <Box className="flex-center" >
          <Button variant="contained" color="primary" onClick={checkIsLoggedIn} >fetch</Button>
        </Box> */}
      </Stack>
    </Box>
  )
}

export default SignIn