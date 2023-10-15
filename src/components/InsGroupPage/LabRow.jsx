/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Stack, Switch, Typography, Modal, Link as MuiLink, Box } from "@mui/material"
import { Link } from 'react-router-dom';
import AllowTypeForm from '@/components/InsGroupPage/AllowTypeForm';

const LabRow = ({ lab, groupId, groupNo }) => {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [accessAllowType, setAccessAllowType] = useState('always');
  const [submitAllowType, setSubmitAllowType] = useState('always');
  const [isAccessSwitchOn, setIsAccessSwitchOn] = useState(false);
  const [isSubmitSwitchOn, setIsSubmitSwitchOn] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handleSwitchClick = (state, setState, allowType, setModal) => {
    if (state && allowType === 'always') {
      setState(false);
    } else {
      setModal(true);
    }
  }

  return (
    <Stack direction={"row"} padding="10px" bgcolor="var(--biscay)" borderRadius="8px" >
      <Stack flex={1} justifyContent="center" >
        <MuiLink to={`/ins/g/${groupId}/${groupNo}/c/${lab.chapter_id}`} component={Link} color={'inherit'} underline='none' sx={{ ":hover": { color: "var(--blueRibbon)" } }} >
          <Typography>{lab.chapter_id}. {lab.chapter_name} ({lab.no_items})</Typography>
        </MuiLink>
      </Stack>
      <Stack width={100} justifyContent="center" alignItems="center" >
        <Typography>{lab.chapter_fullmark}</Typography>
      </Stack>
      <Stack width={300} direction={"row"} spacing={"20px"} justifyContent="center" alignItems="center" >
        <Switch
          color="success"
          checked={isAccessSwitchOn}
          onClick={() => handleSwitchClick(isAccessSwitchOn, setIsAccessSwitchOn, accessAllowType, setIsAccessModalOpen)}
        />
        <Modal
          open={isAccessModalOpen}
          onClose={() => setIsAccessModalOpen(false)}
        >
          <Box>
            <AllowTypeForm title="Allow access exercise" open={setIsAccessModalOpen} />
          </Box>
        </Modal>
        <Stack >
          <Typography fontSize={"12px"} sx={{ color: "var(--raven)" }} >Past due</Typography>
          <Typography sx={{ color: "var(--raven)" }} >30/09/2023 09:30 am </Typography>
        </Stack>
      </Stack>
      <Stack width={300} direction={"row"} spacing={"20px"} justifyContent="center" alignItems="center">
        <Switch
          color="success"
          checked={isSubmitSwitchOn}
          onClick={() => handleSwitchClick(isSubmitSwitchOn, setIsSubmitSwitchOn, submitAllowType, setIsSubmitModalOpen)}
        />
        <Modal
          open={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
        >
          <Box>
            <AllowTypeForm title="Allow submit exercise" open={setIsSubmitModalOpen} />
          </Box>
        </Modal>
        <Stack >
          <Typography fontSize={"12px"} sx={{ color: "var(--raven)" }} >Past due</Typography>
          <Typography sx={{ color: "var(--raven)" }} >30/09/2023 09:30 am </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default LabRow;
