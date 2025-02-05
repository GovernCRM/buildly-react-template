import React, { useState } from 'react';
import { Button } from '@mui/material';
import {
  Box, Typography, Container, Paper,
} from '@mui/material';
import './CommunityStyles.css';
import CustomTable from '@components/CustomTable/CustomTable';
import { ContactModal } from '@components/Dashboard/CreateContact';
import useAlert from '@hooks/useAlert';
import { useQuery } from 'react-query';
import { fetchStateRecords } from '@react-query/queries/stateRecords/getStateRecordsQuery';

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { displayAlert } = useAlert();

  const { data: stateRecordData, isLoading: isLoadingStateRecords } = useQuery(
    ['stateRecords'],
    () => fetchStateRecords(displayAlert),
    { refetchOnWindowFocus: false },
  );

  console.log(stateRecordData, 'dataaa');

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
        <CustomTable data={stateRecordData} />
      </Box>
    </>
  );
};

export default Community;
