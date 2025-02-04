import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, Box, Pagination } from '@mui/material';
import './CustomTableStyles.css';

const columns = [
  { field: 'first_name', headerName: 'Name', flex: 1 },
  { field: 'type', headerName: 'Type' },
  { field: 'mailing_address', headerName: 'Mailing Address', flex: 1 },
  { field: 'city', headerName: 'City' },
  { field: 'zip', headerName: 'Zip' },
  { field: 'precinct', headerName: 'Precinct' },
  { field: 'phone', headerName: 'Phone' },
  { field: 'registration_date', headerName: 'Member Since' },
  { field: 'last_engagement', headerName: 'Last Engagement', flex: 1 },
  { field: 'notes', headerName: 'Notes' },
  { field: 'email', headerName: 'Email' },
  { field: 'added_by', headerName: 'Added By' },
];

// const rows = [
//   {
//     id: 1, name: 'Saurabh Mohanrao Sonvane', email: 'saurabh.sonvane@buildly.com', engagementStatus: 'Pending',
//   },
//   {
//     id: 2, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
//   {
//     id: 3, name: 'Saurabh Mohanrao Sonvane', email: 'saurabh.sonvane@buildly.com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 4, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 5, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
//   },
//   {
//     id: 6, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
//   {
//     id: 7, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 8, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 9, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
//   },
//   {
//     id: 10, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
//   {
//     id: 11, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 12, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 13, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
//   },
//   {
//     id: 14, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
//   {
//     id: 15, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 16, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 17, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 18, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 19, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
//   },
//   {
//     id: 20, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
//   {
//     id: 21, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 22, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 23, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
//   },
//   {
//     id: 24, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
//   {
//     id: 25, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 26, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 27, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 28, name: 'Full Name', email: 'name@com', engagementStatus: 'R 12/06/24', lastAttemptedDate: '11/20/24', lastResponseDate: '12/06/24',
//   },
//   {
//     id: 29, name: 'Full Name', email: 'name@com', engagementStatus: 'Pending',
//   },
//   {
//     id: 30, name: 'Full Name', email: 'name@com', engagementStatus: 'A 11/05/24', lastAttemptedDate: '11/20/24',
//   },
// ];

const CustomTable = ({ data }) => {
  const rows = data || [];
  return (
    <Box className="custom-table-container">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        checkboxSelection
        rowHeight={42}
        headerHeight={42}
        className="custom-data-grid"
      />
    </Box>
  );
};

export default CustomTable;
