import { Component } from '@angular/core';
import { ProductType } from 'src/app/constants/ProductType';
import { GoogleAuthServiceService } from 'src/app/services/google-auth-service.service';
import { GoogleDriveServiceService } from 'src/app/services/google-drive-service.service';
import { TicketCartService } from 'src/app/services/ticket-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'clothing-available',
  templateUrl: './clothing-available.component.html',
  styleUrls: ['./clothing-available.component.scss']
})
export class ClothingAvailableComponent {

  public token;
  public folders;
  public folderSelected;
  public posts = null;
  public totalPosts: number = 0;
  public loading: boolean = false;
  public ProductTypeEnum = ProductType;

  constructor(
    private ticketService: TicketCartService,
    private googleDriveService: GoogleDriveServiceService,
    private googleAuthService: GoogleAuthServiceService
  ) {
    this.loading = true;
    this.googleAuthService.getBearerToken().subscribe(response => {
      this.token = response.access_token;
      this.googleDriveService.getFoldersInFolder(environment.google_drive_folder_id_available, this.token).subscribe(response => {
        this.folders = response.files;
                this.loading = false;
      }, error => {
        this.loading = false;
      });
    }, error => {
      this.loading = false;
    });
  }

  /**
   * Set folder selected
   * @param folder 
   */
  selectFolder(folder: any) {
    this.loading = true;
    this.totalPosts = 0;
    this.folderSelected = folder;
    this.googleDriveService.getFilesInFolder(folder.id, this.token).subscribe(response => {
      if (response.files) {
        response.files.forEach(file => {
          this.googleDriveService.getFile(file.id, this.token).subscribe(response => {
            let jsonData = response;
            this.totalPosts = jsonData.posts.length;            
            this.posts = jsonData.posts;
          }, error => {
            this.loading = false;
          });
        });
      }
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  /**
   * Add item to cart
   */
  addItem(item) {
    this.ticketService.addItem(
      {
        photo: null,
        name: item.nombre,
        description: null,
        category: this.ProductTypeEnum.clothes.displayName,
        price: item.precio,
        quantity: 1,
      }
    );
  }

}
