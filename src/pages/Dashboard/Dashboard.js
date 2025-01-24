import React from 'react';
import { Box, Typography } from '@mui/material';
import './DashboardStyles.css';
import CustomTable from '@components/CustomTable/CustomTable';

const Dashboard = () => (
  <Box className="DashboardMainContainer" maxWidth="xl">
    <CustomTable />
  </Box>
);

export default Dashboard;
