import { Flex, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { FormikProps, Formik } from 'formik';
import Input from '@/components/Input';

import { useRouter } from 'next/navigation';

import { TFormInputs } from './interfaces';

const SignUpForm = () => {
    const { push } = useRouter();

    const signUp = async (cpf: string, name: string) => {
        await fetch('/api/drivers/create', {
            method: 'POST',
            body: JSON.stringify({ cpf, name }),
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

    const handleSubmmit = async ({ cpf, name }: TFormInputs) => {
        await signUp(cpf, name);
    };

    return (
        <>
            <Formik
                initialValues={{ cpf: '', name: '' }}
                onSubmit={handleSubmmit}
            >
                {(props: FormikProps<TFormInputs>) => (
                    <form onSubmit={props.handleSubmit}>
                        <Flex px="20">
                            <FormLabel>Nome:</FormLabel>
                        </Flex>

                        <Flex px="20">
                            <Input name="name" />
                        </Flex>

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
                                Criar Conta
                            </Button>
                        </Flex>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SignUpForm;
