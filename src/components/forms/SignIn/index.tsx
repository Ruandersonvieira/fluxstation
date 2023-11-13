import { Flex, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { FormikProps, Formik } from 'formik';
import Input from '@/components/Input';

import { useRouter } from 'next/navigation';

import { TFormInputs } from './interfaces';

const SignInForm = () => {
    const { push } = useRouter();

    const signIn = async (cpf: string) => {
        await fetch('/api/drivers/get', {
            method: 'POST',
            body: JSON.stringify({ cpf }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Vary: 'Accept-Encoding',
            },
        }).then((response) => {
            response.text().then(function (result) {
                const { id } = JSON.parse(result);

                if (id) {
                    localStorage.setItem('driverId', id);

                    push('/dashboard');
                }
            });
        });
    };

    const handleSubmmit = async ({ cpf }: TFormInputs) => {
        const result = await signIn(cpf);
    };

    return (
        <>
            <Formik initialValues={{ cpf: '' }} onSubmit={handleSubmmit}>
                {(props: FormikProps<TFormInputs>) => (
                    <form onSubmit={props.handleSubmit}>
                        <Flex px="20">
                            <FormLabel>CPF:</FormLabel>
                        </Flex>

                        <Flex px="20">
                            <Input name="cpf" />
                        </Flex>

                        <Flex pt="5" px="20">
                            <Button
                                backgroundColor="#ffa41c"
                                width="100%"
                                type="submit"
                            >
                                Acessar
                            </Button>
                        </Flex>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SignInForm;
