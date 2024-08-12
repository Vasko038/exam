export const typeData: Array<string> = [
  "Humo",
  "UzCard",
  "MasterCard",
  "UniuonPay",
  "Visa",
  "American Express",
];
export interface IData {
  id: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  type:
    | "Humo"
    | "UzCard"
    | "MasterCard"
    | "UniuonPay"
    | "Visa"
    | "American Express"
    | string;
}

function createCardData(
  id: string,
  firstName: string,
  lastName: string,
  cardNumber: string,
  expiryDate: string,
  type:
    | "Humo"
    | "UzCard"
    | "MasterCard"
    | "UniuonPay"
    | "Visa"
    | "American Express"
): IData {
  return {
    id,
    firstName,
    lastName,
    cardNumber,
    expiryDate,
    type,
  };
}
export const cardData = [
  createCardData("1", "Husan", "Mirobidov", "1234123412341234", "0202", "Humo"),
  createCardData(
    "2",
    "Sherzod",
    "Abdushukorov",
    "432142143214321",
    "0340",
    "UzCard"
  ),
  createCardData("2", "Jasur", "Ergashev", "123412341234124", "0204", "Visa"),
];
