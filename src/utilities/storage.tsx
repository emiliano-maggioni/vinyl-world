export const getLoggedUser = () => {
    let user = localStorage.getItem('userLogged');
    if(user)
        return JSON.parse(user);
    else
        return null;
}

export const saveLoggedUser = (email: string) => {
    localStorage.setItem('userLogged',JSON.stringify(email));
}

export const deleteLoggedUser = () => {
    localStorage.removeItem('userLogged');
}