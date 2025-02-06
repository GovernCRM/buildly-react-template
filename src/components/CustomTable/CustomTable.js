import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, CircularProgress } from '@mui/material';
import './CustomTableStyles.css';
import useAlert from '@hooks/useAlert';
import { useQuery } from 'react-query';
import { fetchStateRecords } from '@react-query/queries/stateRecords/getStateRecordsQuery';

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

const CustomTable = () => {
  const { displayAlert } = useAlert();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 100,
  });

  const offset = paginationModel.page * paginationModel.pageSize;

  const { data, isLoading, isFetching } = useQuery(
    ['stateRecords', offset, paginationModel.pageSize],
    () => fetchStateRecords(displayAlert, offset, paginationModel.pageSize),
    { keepPreviousData: true, refetchOnWindowFocus: false },
  );

  const hasNextPage = !!(data && data.next);

  const rows = (data && data.results)
    ? data.results.map((row, index) => ({
      ...row,
      id: row.id ? row.id : `${offset}-${index}`,
    }))
    : [];

  return (
    <Box className={`custom-table-container ${isFetching ? 'blurred' : ''}`}>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
          <CircularProgress />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          rowCount={(data && data.total) ? data.total : 0}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={(newPagination) => {
            if (newPagination.page > paginationModel.page && !hasNextPage) return;
            setPaginationModel(newPagination);
          }}
          loading={isFetching}
          checkboxSelection
          rowHeight={42}
          headerHeight={42}
          className="custom-data-grid"
          components={{
            LoadingOverlay: () => (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
              </Box>
            ),
          }}
        />
      )}
    </Box>
  );
};

export default CustomTable;
