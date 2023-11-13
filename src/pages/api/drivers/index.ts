import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

const index = async (_: NextApiRequest, res: NextApiResponse) => {
    const result = await prisma.drivers.findMany();

    return res.status(200).json(result);
};

export default index;
