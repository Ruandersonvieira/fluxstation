import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../../lib/prisma';

interface IReqQuery {
        driverId?: string,
}

const index = async (req: NextApiRequest, res: NextApiResponse) => {
    const { driverId } = req?.query as IReqQuery;

    if (!driverId) {
        return res.status(400).end();
    }

    const result = await prisma.supplies.findMany({
        where: {
            driverId,
        },
    });

    return res.status(200).json(result);
};

export default index;
