/* eslint-disable react/prop-types */
import { Stack, Box, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { ABS_INS_URL, ABS_STU_URL } from "@/utils/constants/routeConst"
import useCurrentTime from "@/hooks/useCurrentTime"
import moment from "moment"
import { useMemo } from "react"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PermissionText from "@/components/_shared/PermissionText"

const ChapterListTableBody = ({ chapter }) => {
  const { hash } = window.location
  const onStudentPage = hash.split("/")[1] === "stu"
  const currentTime = useCurrentTime()
  const getUrl = onStudentPage ? ABS_STU_URL.DYNAMIC.EXERCISE : ABS_INS_URL.DYNAMIC.STUDENT_SUBMIT_HISTORY

  const isAccessible = () => {
    if (chapter.allow_access_type === "always" || chapter.allow_access_type === "timer_paused") {
      return true
    } else if (chapter.allow_access_type === "timer") {
      const timeStart = moment(chapter.access_time_start)
      const timeEnd = moment(chapter.access_time_end)
      return currentTime.isBetween(timeStart, timeEnd)
    }
    return false
  }

  const canEnter = isAccessible()

  const totalMarking = useMemo(() => {
    return chapter?.items ? chapter.items.reduce((acc, object) => acc + parseInt(object.stu_lab.marking), 0) : 0;
  }, [chapter]);

  const getItemScoreBoxBgColor = (item) => {
    const studentScore = parseInt(item.stu_lab.marking);
    const fullMark = parseInt(item.full_mark);

    if (studentScore === 0) {
      return "var(--raven)";
    } else if (studentScore > 0 && studentScore < fullMark) {
      return "var(--monday)";
    } else {
      return "var(--fruitSalad)";
    }
  };

  const renderScoreBox = (item, index) => {
    const args = onStudentPage ? [item.stu_lab.chapter_id, index + 1] : [item.group_id, item.stu_lab.stu_id, item.stu_lab.chapter_id, item.stu_lab.exercise_id];

    return (
      <Link key={index} to={isAccessible() ? getUrl(...args) : ""}>
        <Box className="item-score-box" sx={{ bgcolor: getItemScoreBoxBgColor(item) }}>
          <Typography>ข้อ {item.item_id}</Typography>
          <Typography>{item.stu_lab.marking}/{item.full_mark}</Typography>
        </Box>
      </Link>
    );
  };

  return (
    <Stack direction="row" spacing="5px" sx={{
      pointerEvents: canEnter ? "auto" : "none",
      opacity: canEnter ? 1 : 0.5,
    }} >
      <Stack spacing={1} direction='row' justifyContent="flex-start" alignItems="center" flex={1.5} className="row-info-box">
        <Typography>{chapter.chapter_id}. {chapter.chapter_name}</Typography>
        {!canEnter && <LockOutlinedIcon />}
      </Stack>
      <Box flex={1} className="row-info-box">
        <PermissionText prefix='submit' type={chapter.allow_submit_type} lab={chapter} />
      </Box>
      <Box width={395} className="row-info-box">
        <Stack direction="row" flexWrap="wrap">
          {chapter?.items && chapter.items.map(renderScoreBox)}
        </Stack>
      </Box>
      <Box alignItems="center" width={90} className={`outlined ${'row-info-box'}`}>
        <Typography>คะแนน</Typography>
        <Typography>{totalMarking}/{chapter.chapter_fullmark}</Typography>
      </Box>
    </Stack>
  )
}

export default ChapterListTableBody