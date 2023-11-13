-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('GASOLINA', 'VPOWER', 'ETANOL', 'DIESEL');

-- CreateTable
CREATE TABLE "Drivers" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplies" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "liters" DOUBLE PRECISION NOT NULL,
    "fuelType" "FuelType" NOT NULL,
    "driverId" TEXT NOT NULL,

    CONSTRAINT "Supplies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Supplies" ADD CONSTRAINT "Supplies_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
