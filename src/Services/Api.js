import apisauce from 'apisauce';

const create = (baseURL = 'https://randomuser.me/api') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });

  const getUsers = () => api.get('/?nat=gb&results=5');

  return {
    getUsers,
  };
};

export default {
  create,
};
