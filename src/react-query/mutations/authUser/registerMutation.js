import { useMutation } from 'react-query';
import { httpService } from '@modules/http/http.service';

export const useRegisterMutation = (
  history,
  redirectTo,
  displayAlert,
) => useMutation(
  async (registerData) => {
    const response = await httpService.makeRequest(
      'post', // method
      `${window.env.API_URL}coreuser/`, // url
      registerData, // body
      false, // useJwt
      null, // contentType
      null, // responseType
      true, // skipAuth
    );
    return response;
  },
  {
    onSuccess: async () => {
      displayAlert('success', 'Registration successful');
      history.push(redirectTo);
    },
    onError: (error) => {
      if (error && error.username) {
        displayAlert('error', `Registration failed: ${error.username[0]}`);
      } else {
        displayAlert('error', 'An unexpected error occurred.');
      }
    },
  },
);
