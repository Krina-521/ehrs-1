import { JwtService } from './jwt.service';
import { Observable, of } from 'rxjs';

export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string): Observable<any> {
    // TODO: call your authentication API to get a token
    const token = this.jwtService.generateToken({ username: username });
    localStorage.setItem('auth_token', token);
    return of(true);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        this.jwtService.decodeToken(token);
        return true;
      } catch (err) {
        // token is invalid
        return false;
      }
    }
    return false;
  }
}
