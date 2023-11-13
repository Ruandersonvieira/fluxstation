import React from 'react';
import { Badge as BadgeTemplate } from '@chakra-ui/react';

import { IBedge } from './interface';

export const Badge: React.FC = ({ fuelType }: IBedge) => {
    const dataColor = {
        VPOWER: 'red',
        GASOLINA: 'yellow',
        ETANOL: 'green',
        DISEL: 'purple',
    };

    return (
        <BadgeTemplate colorScheme={dataColor[fuelType]}>
            {fuelType}
        </BadgeTemplate>
    );
};
