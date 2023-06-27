export class ProductType {
  
  public static readonly pin = new ProductType('Pin', 'pin');

  private constructor(public readonly displayName: string, public readonly value: string,) {  }

}