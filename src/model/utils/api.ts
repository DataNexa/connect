import { SessionManager } from "../libs/SessionManager";

const apiUrl = import.meta.env.VITE_API_URL;

interface ResponseAPI {
    code: number;
    body: any;
    message: string;
}

const buildHeaders = (token?: string): Record<string, string> => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
});

const get = async (url: string, credentials: boolean = false): Promise<ResponseAPI> => {
    
    const token = SessionManager.getSessionToken();
    const tempToken = SessionManager.getSessionTemp();
    const usedToken = tempToken || token;

    const header: RequestInit = {
        method: 'GET',
        headers: buildHeaders(usedToken),
        ...(credentials && { credentials: 'include' }),
    };

    const response = await fetch(apiUrl + url, header);
    const data = await response.json();

    if (!response.ok) {
        return { code: response.status, body: null, message: data.message || 'Erro inesperado' };
    }

    return { code: response.status, body: data.body, message: data.message };
};

const post = async (url: string, body: any, credentials: boolean = false): Promise<ResponseAPI> => {
    const token = SessionManager.getSessionToken();

    const header: RequestInit = {
        method: 'POST',
        headers: buildHeaders(token),
        body: JSON.stringify(body),
        ...(credentials && { credentials: 'include' }),
    };

    const response = await fetch(apiUrl + url, header);
    const data = await response.json();

    if (!response.ok) {
        return { code: response.status, body: null, message: data.message || 'Erro inesperado' };
    }

    return { code: response.status, body: data.body, message: data.message };
};

export default { get, post };