import { httpService } from '@modules/http/http.service';

export const fetchStateRecords = async (displayAlert, offset, limit) => {
  try {
    const response = await httpService.makeRequest(
      'get',
      `${window.env.fl_RECORDS_URL}?limit=${limit}&offset=${offset}`,
      null,
      true,
    );

    return {
      results: response.data.results || [],
      total: response.data.count || 0,
      next: response.data.next,
    };
  } catch (error) {
    displayAlert('error', "Couldn't load records due to some error!");
    return { results: [], total: 0 };
  }
};
