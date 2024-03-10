import { environment } from "src/environments/environment";
import { ProductType } from "./ProductType";

export class Catalog {
  
  public static readonly pines      = new Catalog('pines',        ProductType.pin.displayName,      environment.google_drive_folder_id_pines);
  public static readonly accesories = new Catalog('accesorios',   ProductType.accesory.displayName, environment.google_drive_folder_id_accesories);
  public static readonly cases      = new Catalog('fundas',       ProductType.funda.displayName,    environment.google_drive_folder_id_fundas);

  private constructor(
    public readonly displayName: string,
    public readonly productName: string,
    public readonly googleDriveFolderId: string,
  ) 
  {  }

}