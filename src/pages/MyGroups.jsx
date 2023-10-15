import { Box, Container, Stack, Grid } from "@mui/material";
import slideShow from '@/assets/images/slideshowicon.png';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSetAtom } from "jotai";
import { sidebarSelectedAtom } from "@/store/store";

// components
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs';
import Header from '@/components/_shared/Header';
import GroupCard from "@/components/MyGroupsPage/GroupCard";

function MyGroups() {
  const [groupList, setGroupList] = useState([]);
  const setSelected = useSetAtom(sidebarSelectedAtom);

  useEffect(() => {
    setSelected(1.1);
    const fetchGroupList = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupListById?year=${import.meta.env.VITE_YEAR}`, { withCredentials: true });
      setGroupList(res.data.payload.group_list ?? []);
    };

    fetchGroupList();
  }, []);

  const items = [{ label: 'My Groups', href: '/ins' }];

  return (
    <Box>
      <Container>
        <Stack spacing="20px">
          <MyBreadCrumbs items={items} />
          <Header logoSrc={slideShow} title="My Groups" />
          <Grid container spacing="10px" sx={{ width: "100%" }}>
            {groupList.map((group) => (
              <GroupCard
                key={group.group_id}
                id={group.group_id}
                groupNo={group.group_no}
                schedule={`${group.day_of_week}, ${group.time_start} - ${group.time_end}`}
                year={group.year}
                semester={group.semester}
                department={group.department}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default MyGroups;