import { Component } from '@angular/core';
import { GoogleAuthServiceService } from 'src/app/services/google-auth-service.service';
import { GoogleDriveServiceService } from 'src/app/services/google-drive-service.service';

@Component({
  selector: 'catalog-pines-component',
  templateUrl: './catalog-pines.component.html',
  styleUrls: ['./catalog-pines.component.scss']
})
export class CatalogPinesComponent {

  public folders;

  constructor(
    private googleDriveService: GoogleDriveServiceService,
    private googleAuthService: GoogleAuthServiceService
  ) {
    this.googleAuthService.getBearerToken().subscribe(response => {
      let token = response.access_token;
      this.googleDriveService.getFoldersInFolder(token).subscribe(response => {
        this.folders = response.files;
      });
    });
  }

}
