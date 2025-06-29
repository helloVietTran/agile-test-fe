import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './SignIn.module.scss';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { useSignin } from '@/hooks/useSignin';

const cx = classNames.bind(styles);

const SignIn = () => {
    const signinMutation = useSignin();
    const [username, setUsername] = useState<string>('');

    const handleSubmit = async () => {

        signinMutation.mutate({ username });
    }

    return (
        <div className={cx('signin')}>
            <Link to="/" className={cx('logo')}>
                <img src="/assets/logo.png" alt="Logo" />
            </Link>

            <div className={cx('container')}>
                <h1 className={cx('title')}>Sign In</h1>

                <form
                    className={cx('form')}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <label htmlFor="username" className={cx('label')}>
                        Username
                    </label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        style={{ marginBottom: '16px', fontSize: '1.6rem' }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Button variant="secondary" children="Sign In" style={{ width: '100%', height: '54px' }} type='submit' />

                </form>
            </div>
        </div>
    );
};

export default SignIn;
