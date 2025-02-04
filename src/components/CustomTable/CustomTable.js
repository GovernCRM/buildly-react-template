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
