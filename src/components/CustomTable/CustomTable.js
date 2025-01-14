import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, Box, Pagination } from '@mui/material';

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
    id: 5, name: '', email: '', engagementStatus: '', lastAttemptedDate: '', lastResponseDate: '',
  },
  {
    id: 6, name: '', email: '', engagementStatus: '', lastAttemptedDate: '', lastResponseDate: '',
  },
  {
    id: 7, name: '', email: '', engagementStatus: '', lastAttemptedDate: '', lastResponseDate: '',
  },
  {
    id: 8, name: '', email: '', engagementStatus: '', lastAttemptedDate: '', lastResponseDate: '',
  },
  {
    id: 9, name: '', email: '', engagementStatus: '', lastAttemptedDate: '', lastResponseDate: '',
  },
  {
    id: 10, name: '', email: '', engagementStatus: '', lastAttemptedDate: '', lastResponseDate: '',
  },
];

const CustomTable = () => (
  <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      disableSelectionOnClick
      checkboxSelection
      components={{
        Pagination: () => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: '#F9D658',
              width: '100%',
            }}
          >
            <Pagination count={1} variant="outlined" shape="rounded" />
          </Box>
        ),
      }}
      sx={{
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: '#780000 ',
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #000',
        },
        '& .MuiDataGrid-cell': {
          backgroundColor: '#fff',
          border: '1px solid #ddd',
        },
        '& .MuiDataGrid-row': {
          borderBottom: '1px solid #ddd',
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: '1px solid #ddd',
        },
      }}
    />
  </Box>
);

export default CustomTable;
