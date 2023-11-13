import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../../lib/prisma';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
    const { driverId } = req.query;

    if (!driverId) {
        return res.status(400).end();
    }

    const { amount, fuelType, liters } = req.body;

    if (!amount || !fuelType || !liters) {
        return res.status(422).json({
            message:
                'The request was well-formed but was unable to be followed due to semantic errors.',
        });
    }

    await prisma.supplies.create({
        data: {
            amount,
            fuelType,
            liters,
            driverId,
        },
    });

    return res.status(201).json({});
};

export default create;
