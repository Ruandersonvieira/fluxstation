export type TFormInputs = {
  cpf: string;
  amount:   number,
  liters:  number,
  fuelType: FuelType
};

enum FuelType {
  GASOLINA= "GASOLINA",
  VPOWER= "VPOWER",
  ETANOL= "ETANOL",
  DIESEL = "DIESEL"
} 


export interface IResponseBody  {
  id: string;
};
