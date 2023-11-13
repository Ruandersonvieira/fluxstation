

import React, { Children } from 'react';


import { Card, CardHeader, CardBody, Text, Flex } from '@chakra-ui/react'

import { Image } from '@chakra-ui/react';
import Link from 'next/link';


const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ1-HekrwTQkZ0rval-YK1BYUNsKEpR9FO9uTkFDPe2AK6RdO8pcGWOfPM1vYf44hPQ&usqp=CAU';

import { IAccessCard } from './interfaces';

const accessCard: React.FC<IAccessCard> = ({ footerHref, footerText, children} ) => {


   return ( 
   <Card borderRadius={25}>
    <CardHeader>
        <Flex m={5} justifyContent='center' alignItems='center'>
            <Image src={logo} alt="fluxstation-logo" width="50%"/>
        </Flex>
    </CardHeader>
    <CardBody>
        {children}
    </CardBody>
        <Flex justifyContent="center"  p={5} alignItems='center'>
            <Link href={footerHref}>
                <Text fontWeight="bold" color="#565656">{footerText}</Text>
            </Link>
        </Flex>
    </Card>
  )

}


export default accessCard;
