import { Box, Button, Container, Grid, Stack, Skeleton } from "@mui/material"
import blueFolderIcon from '@/assets/images/bluefoldericon.png'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

import Header from "@/components/_shared/Header"
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import LeftBox from "@/components/InsGroupPage/LeftBox";
import MiddleBox from "@/components/InsGroupPage/MiddleBox";
import LabRow from "@/components/InsGroupPage/LabRow"
import RightBox from "../components/InsGroupPage/RightBox";

const InsGroup = () => {
  const { groupId } = useParams();

  // TODO: Do something with this later
  const { data: groupData, isLoading: isClassLoading } = useQuery({
    queryKey: ['groupData', groupId],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupDataById?group_id=${groupId}`, { withCredentials: true })
      return res.data.payload.class_schedule;
    }
  });

  const { data: labData, isLoading: isLabChapterLoading } = useQuery({
    queryKey: ['labData', groupId],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupDataById?group_id=${groupId}`, { withCredentials: true })
      return res.data.payload.group_permission;
    }
  });

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: `Group ${groupData?.group_no}`, href: '#' },
          ]} />

          <Header logoSrc={blueFolderIcon} title={`Group ${!isClassLoading ? groupData?.group_no : "..."}`} />

          <Grid container spacing={"10px"} >

            <LeftBox isClassLoading={isClassLoading} groupData={groupData} />

            <MiddleBox isClassLoading={isClassLoading} groupData={groupData} />

            <RightBox groupData={groupData} />

          </Grid>

          <Stack spacing={"10px"}>
            {/* Table Head */}
            <Stack direction={"row"} spacing={"5px"} sx={{ position: "sticky", top: "0", bgcolor: "var(--ebony)", zIndex: "10", paddingY: "10px" }} >
              <Box flex={1} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Chapter</Button>
              </Box>
              <Box width={100} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Score</Button>
              </Box>
              <Box width={300} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Access exercise</Button>
              </Box>
              <Box width={300} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Allow submit</Button>
              </Box>
            </Stack>

            {isLabChapterLoading && <>
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
            </>}
            {!isLabChapterLoading && Object.keys(labData || {}).map((key, index) => (
              <LabRow key={index} lab={labData[key]} groupId={groupId} groupNo={groupData?.group_no} />
            ))}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default InsGroup