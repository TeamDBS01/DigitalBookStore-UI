export interface RegistrationRequest {
    name: string | null;
    email: string | null;
    password?: string | null; 
    confirmPassword?: string | null; 
  } 