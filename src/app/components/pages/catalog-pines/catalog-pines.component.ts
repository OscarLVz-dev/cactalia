import { Component } from '@angular/core';
import { GoogleAuthServiceService } from 'src/app/services/google-auth-service.service';
import { GoogleDriveServiceService } from 'src/app/services/google-drive-service.service';

@Component({
  selector: 'catalog-pines-component',
  templateUrl: './catalog-pines.component.html',
  styleUrls: ['./catalog-pines.component.scss']
})
export class CatalogPinesComponent {

  public token;
  public folders;
  public folderSelected;
  public folderSelectedPines;
  public loading:boolean = false;

  constructor(
    private googleDriveService: GoogleDriveServiceService,
    private googleAuthService: GoogleAuthServiceService
  ) {
    this.loading = true;
    this.googleAuthService.getBearerToken().subscribe(response => {
      this.token = response.access_token;
      this.googleDriveService.getFoldersInFolder(this.token).subscribe(response => {
        this.folders = response.files;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
    }, error =>{
      this.loading = false;
    });
  }

  /**
   * Set folder selected
   * @param folder 
   */
  selectFolder(folder: any) {
    this.loading = true;
    this.folderSelected = folder;
    this.googleDriveService.getFilesInFolder(folder.id, this.token).subscribe(response => {
      if (response.files) {
        response.files.forEach(file => {
          if (file.description) {
            let jsonData = JSON.parse(file.description);
            file.name = jsonData.name;
            file.desc = jsonData.desc;
            file.price = jsonData.price;
            file.quantity = jsonData.price;
          }
        });
      }
      this.folderSelectedPines = response.files;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

}
