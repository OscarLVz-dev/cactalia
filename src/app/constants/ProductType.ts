export class ProductType {
  
  public static readonly pin      = new ProductType('Pin');
  public static readonly accesory = new ProductType('Accesorio');
  public static readonly clothes  = new ProductType('Prenda');
  public static readonly funda    = new ProductType('Funda');

  private constructor(
    public readonly displayName: string
  ) 
  {  }

}