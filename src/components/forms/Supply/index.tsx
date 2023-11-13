import { Flex, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@chakra-ui/react'
import {  FormikProps, Formik } from "formik";
import Input from '@/components/Input';
import Select from '@/components/Select';


import { useRouter } from 'next/navigation';


import {TFormInputs } from './interfaces'

const SupplyForm = () => {
  const { refresh } = useRouter();

 const put = async (amount: Number,liters: Number, fuelType: String)=> {
  const driverId = localStorage.getItem("driverId");

  
  await fetch(`/api/drivers/${driverId}/supplies/create`, {
    method: "POST",
    body: JSON.stringify({ 
      liters: Number(liters),
      amount: Number(amount),
      fuelType,
    }),
    headers: {
      "Content-Type": 'application/json; charset=utf-8',
      "Vary": "Accept-Encoding"
    }
  })
  .then((response)=> {
    response.text()
    .then(function(result) {
      refresh()
    })
  })

 }

 const handleSubmmit = async ({
  amount,
  liters,
  fuelType
}: TFormInputs) => {

  
  put(
    amount,
    liters,
    fuelType)
 }

  return (
  <Flex py="5">
    <Formik
        initialValues={{
  amount: "", 
  liters: "", 
  fuelType: "GASOLINA"
      }}
        onSubmit={handleSubmmit}
      >
        {(props: FormikProps<TFormInputs>) => (
          <form onSubmit={props.handleSubmit}>
            <Flex px='20'>
              <FormLabel>Valor:</FormLabel>
            </Flex>

            <Flex  px='20'>
              <Input name="amount" />
            </Flex>
           
            <Flex px='20'>
              <FormLabel>Litros:</FormLabel>
            </Flex>

            <Flex  px='20'>
              <Input name="liters" />
            </Flex>

            <Flex px='20'>
              <FormLabel>Tipo:</FormLabel>
            </Flex>

            <Flex  px='20'>
              <Select name="fuelType" />
            </Flex>

            <Flex pt='5' px='20'>
                <Button backgroundColor='#ffa41c' width='100%' type='submit'>Cadastrar</Button>
            </Flex>
          </form>
        )}
      </Formik>
  </Flex>
  )
}

export default SupplyForm;