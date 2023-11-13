import React from 'react';
import { format } from 'date-fns';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
} from '@chakra-ui/react'

import {  Badge} from '@/components/badge'

const SuppliesTable = ({data}) => {
  
  return (

    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption> Totalizando R${data.reduce((acc, obj) => acc += obj.amount, 0)} Abastecido</TableCaption>
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
    {data.map(({id, date, amount,liters, fuelType}) => {


return (<Tr key={id}>
  <Th>{
  format(new Date(date), 'dd/MM/yyyy ', {
  timeZone: 'America/Sao_Paulo',
})
}
</Th>
  <Td><Badge fuelType={fuelType}>{fuelType}</Badge></Td>
  <Th isNumeric>{liters}l</Th>
  <Th isNumeric>R${amount}</Th>
  <Th isNumeric>R${(liters/amount).toFixed(2)}/L</Th>

</Tr>
)
      })}
    
    </Tbody>
  </Table>
</TableContainer>

  );
}

export default SuppliesTable;