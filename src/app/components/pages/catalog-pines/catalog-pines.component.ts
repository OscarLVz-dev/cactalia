import { Component } from '@angular/core';
import { ProductType } from 'src/app/constants/ProductType';
import { GoogleAuthServiceService } from 'src/app/services/google-auth-service.service';
import { GoogleDriveServiceService } from 'src/app/services/google-drive-service.service';
import { TicketCartService } from 'src/app/services/ticket-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'catalog-pines-component',
  templateUrl: './catalog-pines.component.html',
  styleUrls: ['./catalog-pines.component.scss']
})
export class CatalogPinesComponent {

  public token;
  public folders;
  public folderSelected;
  public folderSelectedQuantity: number = 0;
  public folderSelectedPines = null;
  public loading: boolean = false;
  public ProductTypeEnum = ProductType;

  //Fullpage image vars
  showImageFull: boolean = false;
  selectedImageIndex: number = -1;
  showImagesFiles: Array<object> = [];

  constructor(
    private ticketService: TicketCartService,
    private googleDriveService: GoogleDriveServiceService,
    private googleAuthService: GoogleAuthServiceService
  ) {
    this.loading = true;
    this.googleAuthService.getBearerToken().subscribe(response => {
      this.token = response.access_token;
      this.googleDriveService.getFoldersInFolder(environment.google_drive_folder_id_pines, this.token).subscribe(response => {
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
    this.folderSelected = folder;
    this.folderSelectedQuantity = 0;
    this.googleDriveService.getFilesInFolder(folder.id, this.token).subscribe(response => {
      if (response.files) {
        response.files.forEach(file => {
          if (file.description) {
            let jsonData = JSON.parse(file.description);
            file.name = jsonData.name;
            file.desc = jsonData.desc;
            file.price = jsonData.price;
            file.quantity = jsonData.quantity;
            if (file.quantity > 0) {
              this.folderSelectedQuantity++;
            }
          }
        });
      }
      this.folderSelectedPines = response.files;
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
        photo: "https://lh3.googleusercontent.com/d/"+item.id,
        name: item.name,
        description: item.desc,
        category: this.ProductTypeEnum.pin.displayName,
        price: item.price,
        quantity: 1,
      }
    );
  }

  /**
   * Open full image view
   * @param index to start
   * @param item to get image
   */
  openFullImageView(index, item) {
    this.selectedImageIndex = index;
    this.showImageFull = true;
    this.showImagesFiles = [];

    this.showImagesFiles.push(
      {
        image: "https://lh3.googleusercontent.com/d/" + item.id,
        alt: item.name,
        title:item.name
      }
    );
  }

  /**
   * Close full image view
   */
  closeFullImageView() {
    this.selectedImageIndex = -1;
    this.showImageFull = false;
    this.showImagesFiles = [];
  }

}
