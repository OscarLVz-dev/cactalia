import { Component } from '@angular/core';
import { ProductType } from 'src/app/constants/ProductType';
import { GoogleAuthServiceService } from 'src/app/services/google-auth-service.service';
import { GoogleDriveServiceService } from 'src/app/services/google-drive-service.service';
import { TicketCartService } from 'src/app/services/ticket-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'catalog-fundas',
  templateUrl: './catalog-fundas.component.html',
  styleUrls: ['./catalog-fundas.component.scss']
})
export class CatalogFundasComponent {

  public token;
  public folders;
  public folderSelected;
  public folderSelectedQuantity: number = 0;
  public folderSelectedPines = null;
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
      this.googleDriveService.getFoldersInFolder(environment.google_drive_folder_id_fundas, this.token).subscribe(response => {
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
        category: this.ProductTypeEnum.funda.displayName,
        price: item.price,
        quantity: 1,
      }
    );
  }

}
