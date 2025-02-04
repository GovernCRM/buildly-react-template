import { httpService } from '@modules/http/http.service';

export const fetchStateRecords = async (displayAlert) => {
  try {
    const response = await httpService.makeRequest(
      'get',
      `${window.env.fl_RECORDS_URL}`,
      null,
      true,
    );
    return response.data.results;
  } catch (error) {
    displayAlert('error', "Couldn't load records due to some error!");
    return [];
  }
};
