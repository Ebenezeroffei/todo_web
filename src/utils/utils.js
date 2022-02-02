async function postData(url,data,headers={}){
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    })
    if([200,201,203].includes(response.status)){
        return response.json()
    }
    throw Error("HTTP Status", response.status);
}


async function getData(url,data,headers={}){
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    })
    if([200,201,203].includes(response.status)){
        return response.json()
    }
    throw Error("HTTP Status", response.status);
}

const generateEndpoints = (endpoint) => {
    const  baseDomain = "http://localhost:8000/";
    const authDomain = `${baseDomain}auth/`;
    const apiDomain  = `${baseDomain}api/v1/`
    const endpoints = {
        'login': `${authDomain}login/`,
        'register': `${authDomain}register/`,
        'refresh': `${authDomain}token/refresh/`,
        'passwordReset': `${authDomain}password-reset/`,
        'validateToken': `${authDomain}password-reset/validate_token/`,
        'passwordResetConfirm': `${authDomain}password-reset/confirm/`,
    }

    return endpoints[endpoint];

}



export {postData,getData,generateEndpoints};