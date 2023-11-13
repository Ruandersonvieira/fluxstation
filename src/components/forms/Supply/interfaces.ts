export type TFormInputs = {
  cpf: String;
  amount:   number,
  liters:  number,
  fuelType: FuelType
};

enum FuelType {
  GASOLINA= "GASOLINA",
  VPOWER= "VPOWER",
  ETANOL= "ETANOL",
  DISEL = "DISEL"
} 


export interface IResponseBody  {
  id: String;
};
