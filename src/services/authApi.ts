import { GoogleAuthRequest, AuthData } from '../types/types';

const API_BASE_URL = 'http://192.168.0.134:9090/api/v4/auth';

export const authApi = {
  verifyGoogleToken: async (token: string): Promise<AuthData> => {
    try {
      const payload: GoogleAuthRequest = { token };

      const response = await fetch(`${API_BASE_URL}/verifyGoogleToken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies (for HTTP-only JWT cookie)
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Token verification failed');
      }

      const data: AuthData = await response.json();
      return data;
    } catch (error) {
      console.error('❌ Error verifying Google token:', error);
      throw error;
    }
  },
};
