export interface IUser{
    Email: string;
    password: string;
    confirmPassword: string;    
}

export interface ILoginUser{
    Username: string;
    Password: string;   
}

export interface IGoogleUser{
    Email: string;
    HasRegistered: boolean;  
    LoginProvider: string; 
}