/* eslint-disable react/prop-types */
import { Box, Stack, Avatar, Typography } from "@mui/material"
import avatarPlaceholder from "@/assets/images/avatarplaceholder.png"

const StudentInfoCard = ({ user }) => {

  return (
    <Box bgcolor={"var(--ebony)"} borderRadius={"8px"} padding={"20px"} >
      <Stack direction={"row"} justifyContent={"space-between"} >
        <Stack spacing={"10px"} justifyContent={"space-between"}  >
          <Avatar src={user ? `${import.meta.env.VITE_BASE_URL}/${user.avatar}` : avatarPlaceholder} alt={user ? user.name : "Avatar Image"} variant="rounded" sx={{ width: 150, height: 150 }} />
          <Stack justifyContent={"center"} alignItems={"center"} width={"150px"} height={"30px"} sx={{ textAlign: "center" }} paddingY={"5px"} borderRadius={"8px"} bgcolor={"rgba(78, 199, 83, 0.50)"} >
            <Typography>IP: 49.49.221.133</Typography>
          </Stack>
        </Stack>

        <Stack spacing={"8px"} width={"70%"} >
          <Stack direction={"row"} spacing="20px" >
            <Stack direction="row">
              <Typography color={"var(--cerulean)"} fontWeight={600} >Student info</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>63010202 นางสาว ชรินดา สนธิดี</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing="20px" >
            <Stack direction={"row"} >
              <Typography color={"var(--cerulean)"} fontWeight={600} >Group ID</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>22020402</Typography>
            </Stack>
            <Stack direction={"row"} >
              <Typography color={"var(--cerulean)"} fontWeight={600} >Group</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>401</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing="20px" >
            <Stack direction={"row"} >
              <Typography color={"var(--cerulean)"} fontWeight={600} >Class date</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>เสาร์, 09:00:00 - 12:00:00</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing="20px" >
            <Stack direction={"row"} >
              <Typography color={"var(--cerulean)"} fontWeight={600} >Year</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>2022</Typography>
            </Stack>
            <Stack direction={"row"} >
              <Typography color={"var(--cerulean)"} fontWeight={600} >Semeseter</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>1</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing="20px" >
            <Stack direction={"row"} >
              <Typography color={"var(--cerulean)"} fontWeight={600} >Instructor</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>ชรินดา สนธิดี</Typography>
            </Stack>
          </Stack>

          <Stack justifyContent={"center"} alignItems={"center"} width={"100%"} height={"30px"} sx={{ textAlign: "center" }} paddingY={"5px"} borderRadius={"8px"} bgcolor={"var(--chathamBlue)"} >
            <Typography>คะแนนสอบกลางภาค (60) xx คะแนน</Typography>
          </Stack>

        </Stack>
      </Stack>
    </Box>
  )
}

export default StudentInfoCard