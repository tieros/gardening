import styled from 'styled-components';
import Button from '../UI/Button';
import { Modal } from '../UI/Modal';
import { useState } from 'react';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';

type Props = {
    onClose: (value: boolean) => void;
    availableServices: string[];
};

const BookingModal = ({ onClose, availableServices }: Props) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleCheckboxChange = (optionId: string) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(optionId)) {
                return prevSelectedOptions.filter((id) => id !== optionId);
            }
            return [...prevSelectedOptions, optionId];
        });
    };

    return (
        <Modal>
            <div className='p-10 flex flex-col w-full gap-14 rounded-[30px] bg-background text-dark'>
                <h3>Book Appointment</h3>
                <div>
                    <Input
                        type='date'
                        value={selectedDate}
                        onChange={(event) =>
                            setSelectedDate(event.target.value)
                        }
                        label='Please select date'
                    />

                    <div className='flex flex-col gap-5'>
                        <label htmlFor='selectedServices'>
                            Please select services you need
                        </label>
                        {availableServices.map((option, index) => (
                            <Checkbox
                                key={index}
                                name='selectedServices'
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                                label={option.toLocaleLowerCase()}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex justify-center gap-10'>
                    <Button>Book Appointment</Button>
                    <Button mode='white' onClick={() => onClose(false)}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default BookingModal;
