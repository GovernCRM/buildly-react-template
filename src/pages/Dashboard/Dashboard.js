import React from 'react';
import { Box, Typography } from '@mui/material';
import './DashboardStyles.css';
import CustomTable from '@components/CustomTable/CustomTable';

const Dashboard = () => (
  <Box mt={5} mb={5}>
    <CustomTable />
  </Box>
);

export default Dashboard;
