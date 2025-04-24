import { jwtDecode } from 'jwt-decode';

type DecodedJWT = {
    type:number,
    vtoken:number,
    id:number,
    client_id?: number | null
};

class Session {
    
    private type_session: 'session' | 'temp'
    private token: string
    private payload: DecodedJWT | null 

    constructor(type_session: 'session' | 'temp' = 'session', token: string = '', payload: DecodedJWT | null = null) {
        this.type_session = type_session;
        this.token = token;
        this.payload = payload;
    }

    public get JWT(): string {
        return this.token;
    }
    public get decodedPayload(): DecodedJWT | null {   
        return this.payload;
    }
    public get typeSession(): 'session' | 'temp' {
        return this.type_session;
    }
}

export class SessionManager {

    private static instance: SessionManager = new SessionManager();
    private sessions: { session?:Session, temp?:Session } = {}

    private constructor(){}

    public static saveSessionToken(JWT: string, type:'session' | 'temp'): void { 
        try {
            const decodedPayload = jwtDecode(JWT);
            const session = new Session(type, JWT, decodedPayload as DecodedJWT);
            if(type == 'session'){
                this.instance.sessions.session = session;
            }
            if(type == 'temp'){
                this.instance.sessions.temp = session;
            }
        } catch (err) {
            console.warn('JWT inválido ao salvar a sessão:', err);
        }
    }

    public static getSessionToken(): string { 
        return this.instance.sessions.session?.JWT || '';
    }

    public static getSessionTemp(): string { 
        const sesstemp = this.instance.sessions.temp?.JWT || ''
        if(sesstemp){
            this.instance.sessions.temp = undefined;
        }
        return sesstemp
    }

    public static getSessionPayload(): DecodedJWT | null {
        return this.instance.sessions.session?.decodedPayload || null;
    }

    public static deleteSessionToken(): void {
        this.instance.sessions.session = undefined;
        this.deleteCookie();
    }

    public static setCookie(name: string, value: string, days = 1): void {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${value}; path=/; expires=${expires}; Secure; SameSite=Strict`;
    }

    private static getCookie(name: string): string | null {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    public static deleteCookie(): void {
        document.cookie = `session_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax`;
    }

}