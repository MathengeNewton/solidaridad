export interface SSOButtonProps {
    provider: string; // e.g., 'Google', 'Facebook', etc.
    onLoginSuccess: (user: any) => void;
    onLoginFailure: (error: any) => void;
  }