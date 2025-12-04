const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://kasuwan-gizo.onrender.com";

export interface SignupData {
  businessName: string;
  contactName: string;
  email: string;
  password: string;
  phone: string;
  businessType: string;
  location: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  userId: string;
  email: string;
  token?: string;
  message?: string;
}

export interface VerifyEmailResponse {
  success: boolean;
  message: string;
  userId?: string;
  email?: string;
}

class AuthService {
  private tokenKey = "kg_auth_token";
  private userKey = "kg_auth_user";
  private emailVerifiedKey = "kg_email_verified";

  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/kasuwan-gizo/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Signup failed");
    }

    const result = await response.json();
    
    // Store user info but don't store token yet - wait for email verification
    this.setUser(result);
    
    return result;
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/kasuwan-gizo/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    const result = await response.json();
    
    // Check if email is verified before storing token
    if (!result.emailVerified) {
      throw new Error("Email not verified. Please check your email for verification link.");
    }

    // Store token and user info
    this.setToken(result.token);
    this.setUser(result);
    this.setEmailVerified(true);

    return result;
  }

  async verifyEmail(userId: string, token: string): Promise<VerifyEmailResponse> {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/kasuwan-gizo/auth/verify-email?userId=${userId}&token=${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Email verification failed");
    }

    const result = await response.json();
    
    // Mark email as verified
    this.setEmailVerified(true);
    
    return result;
  }

  setToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  setUser(user: any): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  getUser(): any {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem(this.userKey);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  setEmailVerified(verified: boolean): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.emailVerifiedKey, JSON.stringify(verified));
    }
  }

  isEmailVerified(): boolean {
    if (typeof window !== "undefined") {
      const verified = localStorage.getItem(this.emailVerifiedKey);
      return verified ? JSON.parse(verified) : false;
    }
    return false;
  }

  isAuthenticated(): boolean {
    if (typeof window !== "undefined") {
      const token = this.getToken();
      return !!token;
    }
    return false;
  }

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userKey);
      localStorage.removeItem(this.emailVerifiedKey);
    }
  }
}

export const authService = new AuthService();
