import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVerifyEmailMutation } from '@react-query/mutations/authUser/verifyEmailMutation';
import useAlert from '@hooks/useAlert';
import {
  Container, Typography, Button, CircularProgress, Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ReplayIcon from '@mui/icons-material/Replay';
import { routes } from '@routes/routesConstants';

import './EmailVerificationStyles.css';

const VerifyEmail = () => {
  const { token } = useParams();
  const { displayAlert } = useAlert();

  const {
    mutate: verifyEmail, isLoading, isSuccess, isError, data,
  } = useVerifyEmailMutation(displayAlert);

  const verifyEmailRef = useRef(verifyEmail);

  useEffect(() => {
    if (token) {
      verifyEmailRef.current({ token });
    }
  }, [token]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: 'center', margin: 'auto',
      }}
      className="emailVerificationMainContainer"
    >
      {isLoading && (
      <Box>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Verifying your email...
        </Typography>
      </Box>
      )}

      {isSuccess && data && data.success && (
      <Box>
        <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
        <Typography variant="h5" sx={{ mt: 2 }}>Email Verified Successfully!</Typography>
        <Typography>Your account is now active. You can start using GovernCRM.</Typography>
        <Link
          to={routes.LOGIN}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Go to Dashboard
          </Button>
        </Link>
      </Box>
      )}

      {isError && data && data.error === 'Link expired' && (
      <Box>
        <ErrorIcon color="error" sx={{ fontSize: 60 }} />
        <Typography variant="h5" sx={{ mt: 2 }}>Verification Link Expired</Typography>
        <Typography>The link has expired. Please request a new verification email.</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        // onClick={() => navigate('/resend-verification')}
        >
          Resend Verification Email
        </Button>
      </Box>
      )}

      {isError && data && data.error === 'Email already verified' && (
      <Box>
        <ReplayIcon color="warning" sx={{ fontSize: 60 }} />
        <Typography variant="h5" sx={{ mt: 2 }}>Email Already Verified</Typography>
        <Typography>Your email is already verified. You can log in now.</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        // onClick={() => navigate('/login')}
        >
          Go to Login
        </Button>
      </Box>
      )}

      {isError && (!data || !data.error) && (
      <Box>
        <ErrorIcon color="error" sx={{ fontSize: 60 }} />
        <Typography variant="h5" sx={{ mt: 2 }}>Something Went Wrong</Typography>
        <Typography>We couldn't verify your email. Please try again later.</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          // onClick={() => verifyEmail({ token })}
        >
          Retry Verification
        </Button>
      </Box>
      )}
    </Container>
  );
};

export default VerifyEmail;
