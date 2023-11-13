import React from 'react';
import { Flex } from '@chakra-ui/react';

import { SignUpForm } from '@/components/forms';
import { AccessCard } from '@/components/cards';

const index: React.FC = () => {
    return (
        <Flex
            bg="#ffa41c"
            w="100%"
            p={10}
            color="white"
            justifyContent="center"
        >
            <AccessCard footerText="Já tenho Acesso" footerHref="/">
                <SignUpForm />
            </AccessCard>
        </Flex>
    );
};

export default index;
