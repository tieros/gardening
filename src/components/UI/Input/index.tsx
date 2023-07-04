import { type } from 'os';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export type Props = {
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value: string;
    error?: boolean;
    errorMessage?: React.ReactNode;
    label?: React.ReactNode;
    type?: 'text' | 'number' | 'date';
};

const StyledInput = styled.input<Props>`
    box-shadow: ${({ theme, error }) =>
        error ? theme.boxShadows.inputError : theme.boxShadows.input};
    height: 54px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
`;
const Input = ({
    value,
    onChange,
    error,
    onBlur,
    errorMessage,
    label,
    type = 'text',
}: Props) => {
    const [isTouched, setIsTouched] = useState(false);
    return (
        <div className='flex flex-col max-w-[357px]'>
            {label && label}
            <StyledInput
                value={value}
                onChange={onChange}
                onBlur={() => {
                    setIsTouched(true);
                    onBlur;
                }}
                error={isTouched && error}
                className='w-[300px] md:w-[357px]'
                type={type}
            />
            {isTouched && error && errorMessage && (
                <span className='text-danger pt-1.5 pl-6'>{errorMessage}</span>
            )}
        </div>
    );
};
export default Input;
