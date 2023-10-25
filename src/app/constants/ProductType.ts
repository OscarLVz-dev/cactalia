export class ProductType {
  
  public static readonly pin = new ProductType('Pin', 'pin');
  public static readonly accesory = new ProductType('Accesorio', 'accesory');

  private constructor(public readonly displayName: string, public readonly value: string,) {  }

}