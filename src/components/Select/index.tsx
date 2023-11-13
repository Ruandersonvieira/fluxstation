import { useField } from 'formik';

import { ChakraSelect } from './styles';
import { IInputProps } from './interface';

const Select = ({ name, ...props }: IInputProps) => {
    const [field] = useField(name);

    return (
        <ChakraSelect {...props} {...field}>
            <option value="GASOLINA">GASOLINA</option>
            <option value="VPOWER">VPOWER</option>
            <option value="ETANOL">ETANOL</option>
            <option value="DIESEL">DIESEL</option>
        </ChakraSelect>
    );
};

export default Select;
