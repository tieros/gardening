import { ChangeEvent } from 'react';
import styled from 'styled-components';

export type Props = {
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value: string;
    error?: boolean;
    errorMessage?: React.ReactNode;
    mobile?: boolean;
    label?: React.ReactNode;
};

const StyledInput = styled.input<Props>`
    box-shadow: ${({ theme, error }) =>
        error ? theme.boxShadows.inputError : theme.boxShadows.input};
    width: ${({ mobile }) => (mobile ? '300px' : '357px')};
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
    mobile = false,
    label,
}: Props) => (
    <>
        {label && label}
        <StyledInput
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            mobile={mobile}
        />
        {error && errorMessage && (
            <span className='text-danger pt-1.5 pl-6'>{errorMessage}</span>
        )}
    </>
);
export default Input;
