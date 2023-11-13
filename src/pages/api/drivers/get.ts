import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

interface IReqBody {
        cpf?: string,
}

const get = async (req: NextApiRequest, res: NextApiResponse) => {
    const { cpf } = req?.body as IReqBody;

    if (!cpf) {
        return res.status(400).end();
    }

    const result = await prisma.drivers.findFirst({
        where: {
           cpf,
        },
    });

    return !result ? res.status(204).end() : res.status(200).json(result)


};

export default get;
