export const byId = (id) => document.getElementById(id);
export const byIdVal = (id) => document.getElementById(id).value;

export const url = "http://192.168.76.178:8080/";

export const config = {
    headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
    }
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken"); 

export const getFile = url + "user/getImage/";