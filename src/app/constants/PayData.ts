export class PayData {
  public static readonly BA_card = new PayData('Número de tarjeta (Banco azteca)', '4027665745223041', '4027 6657 4522 3041');
  public static readonly BA_clabe = new PayData('Clabe (Banco azteca)', '127420013847143007', '1274 2001 3847 1430 07');
  public static readonly BBVA_card = new PayData('Número de tarjeta (BBVA)', '4152313778006507', '4152 3137 7800 6507');
  public static readonly BBVA_clabe = new PayData('Clabe (BBVA)', '012180015440426008', '0121 8001 5440 4260 08');

  private constructor(public readonly displayName: string, public readonly value: string, public readonly displayValue: string) {
  }
}