import React from 'react';

import {  Flex } from '@chakra-ui/react'



import { AccessCard } from '@/components/cards'

import { SignInForm } from '@/components/forms'



const index: React.FC = () => {
    return (
        <Flex bg='#ffa41c' w='100%' p={10} color='white' justifyContent='center'>
            <AccessCard
            footerText="Primeiro Acesso"
            footerHref="/signup"
            >
                <SignInForm /> 
            </AccessCard>
        </Flex>
    )
    
};

export default index;
