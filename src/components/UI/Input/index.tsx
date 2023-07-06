import EyeOffIcon from '@/components/Icons/EyeOffIcon';
import EyeOnIcon from '@/components/Icons/EyeOnIcon';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export type Props = {
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value: string;
    error?: boolean;
    errorMessage?: React.ReactNode;
    label?: React.ReactNode;
    type?: 'text' | 'number' | 'date' | 'search' | 'password';
    placeholder?: string;
    disabled?: boolean;
};

const StyledInput = styled.input<Props>`
    box-shadow: ${({ theme, error }) =>
        error ? theme.boxShadows.inputError : theme.boxShadows.input};
    height: 54px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;

    :focus {
        outline: 1.5px solid ${({ theme }) => theme.colors.dark};
    }
`;

const StyledPasswordIconContainer = styled.span`
    position: relative;

    svg {
        position: absolute;
        bottom: 30%;
        right: 5%;
        transform: translate(0, -70%);
        cursor: pointer;
    }
`;
const Input = ({
    value,
    onChange,
    error,
    onBlur,
    errorMessage,
    label,
    type = 'text',
    placeholder,
    disabled,
}: Props) => {
    const [isTouched, setIsTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (
        event: React.MouseEvent<SVGElement, MouseEvent>,
    ) => {
        event.preventDefault();
        setShowPassword((prev) => !prev);
    };

    const handleInputType = (typeValue: Props['type']): Props['type'] => {
        return typeValue === 'password'
            ? showPassword
                ? 'text'
                : 'password'
            : typeValue;
    };

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
                type={handleInputType(type)}
                placeholder={placeholder}
                disabled={disabled}
            />
            {type === 'password' ? (
                <StyledPasswordIconContainer>
                    {showPassword ? (
                        <EyeOffIcon
                            onMouseDown={(event) => handleShowPassword(event)}
                        />
                    ) : (
                        <EyeOnIcon
                            onMouseDown={(event) => handleShowPassword(event)}
                        />
                    )}
                </StyledPasswordIconContainer>
            ) : null}
            {isTouched && error && errorMessage && (
                <span className='text-danger pt-1.5 pl-6'>{errorMessage}</span>
            )}
        </div>
    );
};
export default Input;
