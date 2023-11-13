
import React from 'react';
import { Flex } from '@chakra-ui/react'


import { SignUpForm } from '@/components/forms'
import { AccessCard } from '@/components/cards';

const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ1-HekrwTQkZ0rval-YK1BYUNsKEpR9FO9uTkFDPe2AK6RdO8pcGWOfPM1vYf44hPQ&usqp=CAU';

const index: React.FC = () => {
    return (
        <Flex bg='#ffa41c' w='100%' p={10} color='white' justifyContent='center'>
            <AccessCard
            footerText="Já tenho Acesso"
            footerHref="/"
            >
                <SignUpForm /> 
            </AccessCard>
        </Flex>
    )
    
};

export default index;
