
const apiUrl = import.meta.env.VITE_API_URL;

interface HeaderAPI {
    Accept: string;
    'Content-Type': string;
    Authorization?: string;
}

interface ResponseAPI {
    code: number;
    body: any;
    message: string;
}

const get = async (url: string, token?: { type:string, value:string }):Promise<ResponseAPI> => {

    let header:{ method:string, headers:HeaderAPI } = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }

    if (token) {
        header.headers['Authorization'] = `${token.type} ${token.value}`;
    }

    const response = await fetch(apiUrl+url, header as any);
    let data = await response.json()

    if (!response.ok) {
        return { code: response.status, body: null, message: data.message };
    }

    return { code: response.status, body: data.body, message:data.message };

}

const post = async (url: string, body: any, credentials: boolean = false, token?: { type:string, value:string }):Promise<ResponseAPI> => {

    let header:{ method:string, headers:HeaderAPI, body:any, credentials?:'include' } = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    if (token) {
        header.headers['Authorization'] = `${token.type} ${token.value}`;
    }

    if(credentials){
        header.credentials = 'include';
    }

    const response = await fetch(apiUrl+url, header as any);
    let data = await response.json();

    if (!response.ok) {
        return { code: response.status, body: null, message: data.message };
    }

    return { code: response.status, body: data.body, message: data.message };

}


export default { get, post };