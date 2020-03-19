export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}
   
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
   
export const setUserSession = (response) => {
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('user', JSON.stringify(response.user.userName));
    sessionStorage.setItem('email', JSON.stringify(response.user.email))
}