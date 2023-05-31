export class PayData {
  public static readonly BA_card = new PayData('Número de tarjeta (Banco azteca)', '4027665745223041');
  public static readonly BA_clabe = new PayData('Clabe (Banco azteca)', '127420013847143007');
  public static readonly BBVA_card = new PayData('Número de tarjeta (BBVA)', '4152313778006507');
  public static readonly BBVA_clabe = new PayData('Clabe (BBVA)', '012180015440426008');

  private constructor(public readonly displayName: string, public readonly value: string,) {
  }
}