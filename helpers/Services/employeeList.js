import { APIClient } from "../api_helper";
import * as url from "../url_helper"

const api = new APIClient();

export const getEmployeesList = () => api.get(url.getEmployeesApi);
export const setEmployeesData = (data) => api.post(url.setEmployeesApi, data);
export const deleteEmployeesData = (data) => api.post(url.deleteEmployeesApi, data);


export const addAttendanceData = (data) => api.post(url.addAttendanceApi, data);
export const getAttendanceData = (data) => api.post(url.getAttendanceApi, data);