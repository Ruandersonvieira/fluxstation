import React, { useCallback, useEffect, useState } from 'react';

import {  Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router';


import { SuppliesTable } from '@/components/tables';
import {SupplyForm}  from '@/components/forms';
import Nav from '@/components/Nav';


const dashboard = () => {
    const   [dataItems, setDataItem]= useState([]);
    const { push } = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure()


    const getData = useCallback(async ()=> {
        const driverId = localStorage.getItem("driverId");

        console.log({driverId})

        if(!driverId) {
            push('/')
        }
        const res = await fetch(`http://localhost:3000/api/drivers/${driverId}/supplies`)
        const data = await res.json()
        
        setDataItem(data)
    },[push])

    useEffect(()=>{
        getData()
    }, [getData])

    return (
      <>
      <Nav />
        <Flex bg='#ffa41c'  p={10} color='white' alignContent="center" flexDirection="column">

        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registrar Abastecimento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SupplyForm></SupplyForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    <Flex justifyContent="end">
      <Flex my='5' >
        <Button backgroundColor="#fff"   onClick={onOpen}>+ Adicionar Abastecimento</Button>
      </Flex>
    </Flex>

<Flex justifyContent='center' width="100%" backgroundColor="#fff" borderRadius={10} p="5">
  <SuppliesTable data={dataItems}/>
</Flex>
        </Flex>
        </>
    )
    
};

export default dashboard;

