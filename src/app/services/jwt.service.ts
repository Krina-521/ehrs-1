import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private secretKey = 'mysecretkey';

  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey);
  }

  decodeToken(token: string): any {
    return jwt.verify(token, this.secretKey);
  }
}

