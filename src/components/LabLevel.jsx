import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Select, Stack, Typography, FormControl, MenuItem, InputLabel, Box,
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Checkbox, Button, TablePagination, Link as MuiLink
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

// Sub-components
const TableHeader = () => (
  <TableHead sx={{ bgcolor: "var(--ebony)" }}>
    <TableRow>
      <TableCell width={"10%"}>
        <Checkbox inputProps={{ "aria-label": "checkbox" }} sx={{ height: "40px" }} />
      </TableCell>
      <TableCell align="left" sx={{ fontSize: "16px", fontWeight: "500" }} >Exercise</TableCell>
    </TableRow>
  </TableHead>
);

const TableContent = ({ exerciseList, page, rowsPerPage }) => (
  <TableBody>
    {exerciseList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ex) => (
      <TableRow
        key={ex.id}
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
          />
        </TableCell>
        <TableCell align="left">
          <MuiLink sx={{
            color: "white",
            ":hover": {
              color: "var(--blueRibbon)"
            },
            textOverflow: "ellipsis"
          }}>{ex.name}</MuiLink>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);

const Actions = () => (
  <Stack direction={"row"} alignItems={"center"} spacing={"10px"} justifyContent={"flex-end"}>
    <Button variant='contained' size='medium' sx={{
      paddingX: "25px",
      borderRadius: "8px",
      bgcolor: "var(--cerulean )",
      textTransform: "none",
      flexShrink: "0",
    }}>Update</Button>
    <Link to={"/ins/g/:groupId/c/:chapterId/add-ex/:level"} >
      <Button variant='outlined' size='medium' sx={{
        textTransform: "none"
      }} startIcon={<AddCircleIcon size="small" color="primary" />}>Add Lab</Button>
    </Link>
  </Stack>
);

// Main Component
const LabLevel = ({ lv }) => {
  const [filterRule, setFilterRule] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

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
          <Typography>{lv.level}</Typography>
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
        <Box width={"100%"} height={"300px"} sx={{ overflowY: "auto" }} >
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHeader />
              <TableContent exerciseList={lv.exerciseList} page={page} rowsPerPage={rowsPerPage} />
            </Table>
          </TableContainer>
        </Box>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={lv.exerciseList.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[6, 12]} // Add this line
        />

        {/* Actions */}
        <Actions />
      </Stack>
    </Grid>
  );
};

LabLevel.propTypes = {
  lv: PropTypes.shape({
    level: PropTypes.string.isRequired,
    exerciseList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

TableContent.propTypes = {
  exerciseList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default LabLevel 