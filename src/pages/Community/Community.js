import React, { useState } from 'react';
import { Button } from '@mui/material';
import {
  Box, Typography, Container, Paper,
} from '@mui/material';
import './CommunityStyles.css';
import CustomTable from '@components/CustomTable/CustomTable';
import { ContactModal } from '@components/Dashboard/CreateContact';

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container maxWidth="xl" className="MainButtonContainerFirstRow">
        <Button
          variant="contained"
          color="tertiary"
          onClick={() => setIsModalOpen(true)}
        >
          Create Contact
        </Button>
      </Container>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Box className="DashboardMainTableContainer" maxWidth="xl">
        <CustomTable />
      </Box>
    </>
  );
};

export default Community;
