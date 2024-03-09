
import axios from 'axios';
import Cookies from 'js-cookie';
export async function signIn(login: string, password: string): Promise<void> {
  try {
    const response = await axios.post('/api/signin', { login, password });
    const { access_token, refresh_token } = response.data;
    Cookies.set('access_token', access_token, { expires: 7 });
    Cookies.set('refresh_token', refresh_token, { expires: 7 });
  } catch (error) {
    console.error('Ошибка входа:', error);
    throw error;
  }
}
export function signOut(): void {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
}
