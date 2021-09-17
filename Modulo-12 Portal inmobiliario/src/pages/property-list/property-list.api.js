import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then((response) => {
    return response.data;
  });

const salesTypeUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () =>
  Axios.get(salesTypeUrl).then((response) => {
    return response.data;
  });

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () =>
  Axios.get(provinceListUrl).then((response) => {
    return response.data;
  });
