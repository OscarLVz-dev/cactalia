import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveServiceService {

  private BASE_URL = "https://www.googleapis.com/drive/v3/files";

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get folders in foler by folder id
   * @returns folders
   */
  getFoldersInFolder(bearerToken: string) {
    let params = new HttpParams();
    params = params.append('orderBy', "name");
    params = params.append('q', "mimeType='application/vnd.google-apps.folder'and'1QIKyODXY5hQU5oDUHFTFXg660IPLLpNW' in parents");
    params = params.append('fields', "nextPageToken,files(name,webViewLink,description,id)");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    })

    return this.http.get<any>(this.BASE_URL, { params: params, headers: headers });
  }

  /**
   * Get files in foler by folder id
   * @returns files
   */
  getFilesInFolder(folderId: string, bearerToken: string) {
    let params = new HttpParams();
    params = params.append('orderBy', "name");
    params = params.append('q', "'" + folderId + "' in parents");
    params = params.append('fields', "nextPageToken,files(id,name,description,webContentLink)");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    })

    return this.http.get<any>(this.BASE_URL, { params: params, headers: headers });
  }

}
