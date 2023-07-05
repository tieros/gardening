import { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { Modal } from '../UI/Modal';
import StarRating from '../UI/StarRating';
type Props = {
    onClose: (val: boolean) => void;
};
const ReviewModal = ({ onClose }: Props) => {
    const [comment, setComment] = useState('');
    return (
        <Modal>
            <div className='p-10 flex flex-col gap-10 justify-center items-center'>
                <h5>Write a review</h5>
                <div>
                    Give a Rating:
                    <StarRating
                        readOnly={false}
                        onSaveRating={(value) => console.log(value)}
                    />
                </div>

                <Input
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    label='Leave a comment'
                />

                <div className='flex gap-5'>
                    <Button>Submit</Button>
                    <Button mode='white' onClick={() => onClose(false)}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ReviewModal;
