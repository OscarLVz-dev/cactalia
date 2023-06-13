import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import rsa from 'jsrsasign';

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

  private key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2FXpe+evBu82/\nlw9S0DCvAVOrgyNV8Fdv6AGApF+Fd54Zq800I3xzwcMQPHsoF65OFHW9kjGlhmqw\nI7lgauLGYE7Ucmr1cmOFSM5aKguuFUqSSjnBWYll9WIK0hXVeepXv4TS9ZvLBLDO\nIU1O28D1t2wFBSPW062WQbjT//BPbak8lZWswgeXt+g/mR3gM7t3QGv/4YHzDpbo\nr3k/AJLU2bdEAYxyB3si3mguntPaXWwQP7dnEbFETJ/cHK3SFXQuUE+1lfUdZ2Hg\nZ3ehCwqRbNGYbLbXVi/SASKhnD+/wfbsfleowyhkH2yyDNJs0gICxg2wUawsxzzg\nnaYuerfLAgMBAAECggEAPxg7Mq0MjjHbLmAUfcBJlmLx0NVcybtCOTNeTerndLLJ\n9KBNN5tyVRRX2Qj0LiTikAjT8dA2ZuKoloeShYAUO+SEfGZ3fLzaEoXzh1fZe0XC\ndOXGlKLHky6P/irlSPd5hlWFm6pjBVsHPy5YARLyDtMz2Zt520e3d4EnoEKoTYUd\nrpeDN6pcIUTdzt1Ecf/gliv/9eWQjb2xWT2IygEIDOKi3KhEKaYYlXWJXOntLARk\nkEj3LpN7GUEtt+tGzHirNfOlmCGoo3JCFhFkPCe56L5+vNJEz97/4odXHdQptFGk\nQz2ETFzSdwNBQZYnlq74AB81NV7+imT19o+HH/jaxQKBgQD5yZsmkrANEwbZzeeY\njqHvc/gWUVUzGkqnjV5MJu4shS/woM5vSGcuLywQmdN4P8u3Ug0zCXW1DVmKiuXG\naIeaHHisQgQfMj581WfXN9uyRXH/0BJUznekG/Qe+jqMNcYzCMfjvXgTkMw/WIK5\nYkQZ+VtaQ2r5UXvl/TpKO7MVtQKBgQC6nM3I1kqjWB0CebUix6pgVwhwWr7lMzoY\new6ZO9TN66pjM8tsRrOUgtq6nn3J4ulm6GWT4Gfs5dr86RZoWRW7d+E8nK81o/kb\n3slsahwYicAPZACcQdU+J2KbbGkP5bqf0s5UBLZN/1fAOZ2neC0ZWUPz1l4KEHq7\nX7XhNb8HfwKBgDjdtPyrGHlhg4XCYp9QmX0yIaCzE3p22dgbTwR3OHHaQHe/pD+h\ndBwHkTiWTJZrr60keOzNkoaNa30m8fihg32KTc6pmNahUaiJzQIqLVIAjVt3uzSj\nbIln88O5o+qXs2+a6Cbo05VguZ8SP3CE9owTQMDj6E6qRlKtu796p+KhAoGBAIE+\nCjO3XlgEtYq6Wh4tZK12eYy+/Ijm0qyTxYeQ7ZB0UDyGabOiv8ryWaR4EixZcEbq\nWzdwaumiQ+l3USKR2EBPBXqiFaKz3tpTkPL6Bl1kQdUm8FlIKvTx+BQmoBj3hSod\nqPJ9lPkuCEtEXBDZZXqx3SMqa1TTFv1giynfvF7nAoGBAKZR2JcUiuxItcZ9IEr1\n8CnNksJd8/RPufIdx7sApM1+BaI9kWaXGpNGA0YLfb56OZ4P/ZAcbSh2yKrEZ3kJ\nwzrw3wrqjE2UwWwIst0tAWyWr7ZkMc9g5UST5Itw88cq26qOlDLF2b+SgbFNYcR8\nmnzdIz98JbiVBF+tRn2XyyOp\n-----END PRIVATE KEY-----\n";
  private serviceAccountEmail = "postman@oscarlvz-389023.iam.gserviceaccount.com";

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
