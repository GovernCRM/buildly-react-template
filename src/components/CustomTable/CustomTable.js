import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, Box, Pagination } from '@mui/material';
import './CustomTableStyles.css';

const columns = [
  { field: 'name', headerName: 'NAME', width: 200 },
  { field: 'email', headerName: 'EMAIL', width: 250 },
  { field: 'engagementStatus', headerName: 'ENGAGEMENT STATUS', width: 200 },
  { field: 'lastAttemptedDate', headerName: 'LAST ATTEMPTED DATE', width: 200 },
  { field: 'lastResponseDate', headerName: 'LAST RESPONSE DATE', width: 200 },
];

const rows = [
  {
    id: 1, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 2, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
  {
    id: 3, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 4, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 5, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 6, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
  {
    id: 7, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 8, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 9, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 10, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
  {
    id: 11, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 12, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 13, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 14, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
  {
    id: 15, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 16, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 17, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 18, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 19, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 20, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
  {
    id: 21, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 22, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 23, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 24, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
  {
    id: 25, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 26, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 27, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 28, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
  },
  {
    id: 29, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
  },
  {
    id: 30, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
  },
];

const CustomTable = () => (
  <>
    <Box className="custom-table-container">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        checkboxSelection
        className="custom-data-grid"
      />
    </Box>
    {/* <Box className="pagination-box">
      <Pagination count={1} variant="outlined" shape="rounded" />
    </Box> */}
  </>
);

export default CustomTable;
