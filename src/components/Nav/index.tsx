import { Flex, Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const logo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ1-HekrwTQkZ0rval-YK1BYUNsKEpR9FO9uTkFDPe2AK6RdO8pcGWOfPM1vYf44hPQ&usqp=CAU';

const Nav: React.FC = () => {
    const { push } = useRouter();

    const handleClear = () => {
        localStorage.clear();

        push('/');
    };

    return (
        <Flex
            backgroundColor="#fff"
            p="10"
            flexDirection="row"
            justifyContent="space-between"
        >
            <Flex>
                <Image src={logo} alt="fluxstation-logo" width="35%" />
            </Flex>
            <Flex justifyContent="end">
                <Button colorScheme="red" onClick={handleClear}>
                    Sair
                </Button>
            </Flex>
        </Flex>
    );
};

export default Nav;
