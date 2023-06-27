import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import rsa from 'jsrsasign';
import { environment } from 'src/environments/environment';

interface JsonData {
  iss: string;
  scope: string;
  aud: string;
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthServiceService {

  private key = environment.google_api_key;
  private serviceAccountEmail = environment.google_api_service_account;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get authorization token
   * @returns token
   */
  private getToken() {
    let header = JSON.stringify({ "alg": "RS256", "typ": "JWT" });
    let body: JsonData = {
      iss: this.serviceAccountEmail,
      scope: "https://www.googleapis.com/auth/drive", //Change to param
      aud: "https://oauth2.googleapis.com/token",
      exp: Math.round((Date.now()/1000))+3600,
      iat: Math.round((Date.now()/1000))
    }

    return rsa.KJUR.jws.JWS.sign(null, header, JSON.stringify(body), this.key);
  }

  /**
   * Get bearer token
   * @returns bearer token
   */
  getBearerToken(){
    let token = this.getToken();
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded;'
    );
    let body ='grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion='+token;
    
    return this.http.post<any>("https://oauth2.googleapis.com/token", body, { headers:headers });
  }
  
}
