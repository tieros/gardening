import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useState } from 'react';
import { validateEmail, validatePassword } from '@/utils/validation';
import OnePlantImage from '../../src/assets/oneplant.png';
import Image from 'next/image';

type Props = {
    setIsLoginPage: (val: boolean) => void;
};
const SignUp = ({ setIsLoginPage }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    console.log(validatePassword(password));

    return (
        <div className='max-w-[900px] gap-14 flex flex-col justify-center items-center p-10 basis-full xl:basis-[80%] 2xl:basis-2/3'>
            <h1 className='text-dark max-w-[357px]'>Sign Up</h1>
            <form className='grid md:grid-cols-2 grid-cols-1 content-center gap-10'>
                <Input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onBlur={() => validateEmail(email)}
                    error={validateEmail(email)}
                    errorMessage={<span>Please enter valid email</span>}
                    label={
                        <span className='text-2xl text-dark font-semibold'>
                            Email
                        </span>
                    }
                />
                <Input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onBlur={() => validatePassword(password)}
                    error={validatePassword(password)}
                    errorMessage={<span>Please enter valid password</span>}
                    label={
                        <span className='text-2xl text-dark font-semibold'>
                            Password
                        </span>
                    }
                    type='password'
                />
                <Input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    error={name.length < 2}
                    errorMessage={<span>Please enter your name</span>}
                    label={
                        <span className='text-2xl text-dark font-semibold'>
                            Name
                        </span>
                    }
                />
                <Input
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    error={name.length < 2}
                    errorMessage={<span>Please enter your surname</span>}
                    label={
                        <span className='text-2xl text-dark font-semibold'>
                            Surname
                        </span>
                    }
                />
                <div className='md:col-span-2 flex flex-col items-center'>
                    <Button>Sign Up</Button>
                    <p className='mt-5 inline-flex items-center'>
                        Already have account?{' '}
                        <u
                            onClick={() => setIsLoginPage(true)}
                            className='cursor-pointer ml-1'
                        >
                            Login
                        </u>
                        <Image
                            className='ml-2'
                            width={30}
                            height={30}
                            src={OnePlantImage}
                            alt='one-plant-image'
                        />
                    </p>
                </div>
            </form>
        </div>
    );
};
export default SignUp;
