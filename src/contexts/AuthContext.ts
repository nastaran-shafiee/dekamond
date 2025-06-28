export interface User {
    id: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
    };
    phone: string;
  }
  
 export interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isLoading: boolean;
  }
  