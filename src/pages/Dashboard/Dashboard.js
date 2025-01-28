import React, { useState } from 'react';
import { Button } from '@mui/material';
import {
  Box, Typography, Container, Paper,
} from '@mui/material';
import './DashboardStyles.css';
import CustomTable from '@components/CustomTable/CustomTable';
import { ContactModal } from '@components/Dashboard/CreateContact';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container maxWidth="lg">
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(true)}
        >
          Create Contact
        </Button>
      </Container>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Box className="DashboardMainContainer" maxWidth="xl">
        <CustomTable />
      </Box>
    </>
  );
};

export default Dashboard;
