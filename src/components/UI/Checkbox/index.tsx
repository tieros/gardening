import React from 'react';
import styled from 'styled-components';

type Props = {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: React.ReactNode;
    name: string;
    value: string;
};

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f7f7f7;
    border: 1px solid ${({ theme }) => theme.colors.background};
    margin-right: 8px;
    outline: none;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25),
        0px 1px 4px 0px rgba(0, 0, 0, 0.25) inset;
    &:checked {
        box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.25) inset,
            1px 1px 4px 0px rgba(0, 0, 0, 0.25);
        background: ${({ theme }) => theme.colors.greenLinear};
    }
`;

const CheckboxLabel = styled.span`
    font-size: 16px;
`;

const Checkbox = ({ checked, onChange, label, name, value }: Props) => (
    <CheckboxContainer>
        <CheckboxInput
            checked={checked}
            name={name}
            onChange={onChange}
            value={value}
        />
        <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
);
export default Checkbox;
