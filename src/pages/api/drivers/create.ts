import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
    const { cpf, name } = req.body;

    const isRegistered = await prisma.drivers.findFirst({
        where: {
            cpf,
        },
    });

    if (isRegistered) {
        return res.status(409).end();
    }

    return await prisma.drivers
        .create({
            data: {
                cpf,
                name,
            },
        })
        .then(({ id }) => res.status(201).json({ id }))
        .catch(() => res.status(400).end());
};

export default create;
