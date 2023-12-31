/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Grid, Select, Stack, Typography, FormControl, MenuItem, InputLabel, Box,
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Checkbox, Button, TablePagination, Link as MuiLink
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ABS_INS_URL } from '@/utils/constants/routeConst';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// Sub-components
const TableHeader = ({ exerciseList, selected, setSelected }) => {
  const handleChecked = () => {
    if (selected.length !== 0) {
      setSelected([])
    } else {
      setSelected(exerciseList.map(ex => ex.exercise_id))
    }
  }

  return (
    <TableHead sx={{ bgcolor: "var(--ebony)" }}>
      <TableRow>
        <TableCell width={"10%"}>
          <Checkbox inputProps={{ "aria-label": "checkbox" }} sx={{ height: "40px" }} checked={selected.length === exerciseList.length} indeterminate={selected.length != 0 && selected.length !== exerciseList.length} onClick={handleChecked} />
        </TableCell>
        <TableCell align="left" sx={{ fontSize: "16px", fontWeight: "500" }} >Exercise</TableCell>
      </TableRow>
    </TableHead>
  );
}

const TableContent = ({ lv, exerciseList, page, rowsPerPage, selected, setSelected }) => {

  const handleChecked = (exerciseId) => {
    if (selected.includes(exerciseId)) {
      setSelected(selected.filter(id => id !== exerciseId))
    } else {
      setSelected([...selected, exerciseId])
    }
  }

  const { groupId, chapterId } = useParams();

  return (
    <TableBody>
      {exerciseList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ex, index) => (
        <TableRow
          key={index}
          sx={{
            cursor: "pointer",
            "td": {
              padding: "0px 16px",
              borderTop: "1px solid var(--raven)",
              borderBottom: "1px solid var(--raven)",
              fontSize: "16px",
            },
            "&:last-child td, &:last-child th": { border: "0" },
            ":hover": {
              bgcolor: "var(--hover)"
            }
          }}
        >
          <TableCell width={"10%"}>
            <Checkbox
              inputProps={{ "aria-label": "checkbox" }}
              sx={{
                height: "40px",
              }}
              checked={selected.includes(ex.exercise_id)}
              onClick={() => { handleChecked(ex.exercise_id) }}
            />
          </TableCell>
          <TableCell align="left">
            <MuiLink
              to={ABS_INS_URL.DYNAMIC.EDIT_EXERCISE(groupId, chapterId, lv, ex.exercise_id)}
              component={Link}
              sx={{
                color: "white",
                ":hover": {
                  color: "var(--blueRibbon)"
                },
                textOverflow: "ellipsis"
              }}>{ex.lab_name}</MuiLink>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

const Actions = ({ groupId, chapterId, lv }) => {

  return (
    <Stack direction={"row"} alignItems={"center"} spacing={"10px"} justifyContent={"flex-end"}>
      <Button variant='contained' size='medium' sx={{
        paddingX: "25px",
        borderRadius: "8px",
        bgcolor: "var(--cerulean )",
        textTransform: "none",
        flexShrink: "0",
      }}>Update</Button>
      <Link to={ABS_INS_URL.DYNAMIC.ADD_EXERCISE(groupId, chapterId, lv)} >
        <Button variant='outlined' size='medium' sx={{
          textTransform: "none"
        }} startIcon={<AddCircleIcon size="small" color="primary" />}>Add Lab</Button>
      </Link>
    </Stack>
  )
};

// Main Component
const LabLevel = ({ lv, index, selectedList }) => {
  const [filterRule, setFilterRule] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [selected, setSelected] = useState(selectedList);
  const [filteredList, setFilteredList] = useState(lv);
  const { groupId, groupNo, chapterId } = useParams();

  useEffect(() => {
    const filter = (rule) => {
      switch (rule) {
        case "all":
          setFilteredList(lv)
          break;
        case "selected":
          setFilteredList(lv.filter(ex => selected.includes(ex.exercise_id)))
          break;
        case "Not selected":
          setFilteredList(lv.filter(ex => !selected.includes(ex.exercise_id)))
          break;
        default:
          break;
      }
    }

    filter(filterRule)
  }, [filterRule, lv, selected])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid item xs={12} md={6}>
      <Stack spacing={"15px"} sx={{
        bgcolor: "var(--biscay)",
        borderRadius: "8px",
        padding: "20px",
      }}>
        {/* Filter UI */}
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
          <Typography>Level {index + 1} - Exercises Pool</Typography>
          <Box width={"120px"}  >
            <FormControl size="small" fullWidth>
              <InputLabel id="filter-rule">Filter</InputLabel>
              <Select
                labelId="filter-rule"
                label="Type"
                value={filterRule}
                onChange={(e) => setFilterRule(e.target.value)}
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"selected"}>Selected</MenuItem>
                <MenuItem value={"Not selected"}>Not selected</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        {/* Table */}
        <Box width={"100%"} /* height={"300px"} */ sx={{ overflowY: "auto" }} >
          <TableContainer component={Paper}>
            <Table size="small">
              {/* <TableHeader exerciseList={lv} selected={selected} setSelected={setSelected} /> */}
              <TableContent lv={index + 1} exerciseList={filteredList} page={page} rowsPerPage={rowsPerPage} selected={selected} setSelected={setSelected} />
            </Table>
          </TableContainer>
        </Box>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={filteredList.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[6, 12]}
        />

        {/* Actions */}
        <Actions groupId={groupId} groupNo={groupNo} chapterId={chapterId} lv={index + 1} />

      </Stack>
    </Grid>
  );
};

export default LabLevel 