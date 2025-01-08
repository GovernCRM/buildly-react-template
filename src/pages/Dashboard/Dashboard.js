import React from 'react';
import { Box, Typography } from '@mui/material';
import './DashboardStyles.css';

const Dashboard = () => (
  <Box mt={5} mb={5}>
    <Typography variant="body1" className="dashboardRoot">
      Welcome to the Dashboard
    </Typography>
  </Box>
);

export default Dashboard;
