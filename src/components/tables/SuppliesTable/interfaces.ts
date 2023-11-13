export interface ISuppliesTable {
    data: ISupplies[];
}

interface ISupplies {
    id: string;
    date: Date;
    amount: number;
    liters: number;
    fuelType: FuelType;
}

enum FuelType {
    GASOLINA = 'GASOLINA',
    VPOWER = 'VPOWER',
    ETANOL = 'ETANOL',
    DISEL = 'DISEL',
}
