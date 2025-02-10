import { useMutation } from 'react-query';
import { httpService } from '@modules/http/http.service';

export const useVerifyEmailMutation = (displayAlert) => useMutation(
  async (verifyData) => {
    const response = await httpService.makeRequest(
      'post',
      `${window.env.API_URL}coreuser/verify_email/`,
      verifyData,
      false, // useJwt
      'application/json', // contentType
      'JSON', // responseType
      true, // skipAuth
    );
    return response.data;
  },
  {
    onSuccess: (data) => {
      if (data && data.success) {
        displayAlert('success', 'Email verified successfully!');
      } else {
        displayAlert('error', 'Unexpected response. Please try again.');
      }
    },
    onError: (error) => {
      let errorMessage = 'Email verification failed. Please try again.';
      if (error && error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      displayAlert('error', errorMessage);
    },
  },
);
