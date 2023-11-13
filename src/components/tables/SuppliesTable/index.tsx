import React from 'react';
import { format } from 'date-fns';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
} from '@chakra-ui/react';

import { Badge } from '@/components/badge';

import { ISuppliesTable } from './interfaces';

const SuppliesTable = ({ data }: ISuppliesTable) => {
    const getAverage = (liters: number, amount: number) => {
        const value = liters / amount;
        return `R${value.toFixed(2)}/L`;
    };
    return (
        <TableContainer>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>Data</Th>
                        <Th>Tipo de Gasolina</Th>
                        <Th>Litros</Th>
                        <Th isNumeric>Valor</Th>
                        <Th>Média</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(({ id, date, amount, liters, fuelType }) => {
                        return (
                            <Tr key={id}>
                                <Th>
                                    <Text>
                                    {format(new Date(date), 'dd/MM/yyyy ')}
                                        </Text>
                                        </Th>
                                <Td>
                                    <Badge fuelType={fuelType}>
                                        {fuelType}
                                    </Badge>
                                </Td>
                                <Th isNumeric>{String(liters)}l</Th>
                                <Th isNumeric>R${String(amount)}</Th>
                                <Th isNumeric>
                                    {getAverage(liters, amount)}
                                </Th>
                            </Tr>
                        );
                    })}
                </Tbody>
                <TableCaption>
                    {`Totalizando R$${data.reduce(
                        (acc, {amount}) => (acc + amount), 0)
                    } Abastecido`}
                </TableCaption>
            </Table>
        </TableContainer>
    );
};

export default SuppliesTable;
