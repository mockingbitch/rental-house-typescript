import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/store/slices/auth-slice';
import { AppDispatch, RootState } from '@/store/store.ts';
import { emailIcon, eyeCloseIcon, eyeIcon, googleIcon, facebookIcon } from '@/assets/images/icon';
import AuthenticateLayout from '@/pages/authentication/authenticate-layout.tsx';
import { AsyncThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { AsyncThunkConfig } from 'node_modules/@reduxjs/toolkit/dist/createAsyncThunk';
import {useTranslation} from "react-i18next";

type DataType = {
    email?       : string,
    password?    : string,
}

type MessageValidationType = {
    email?      : [],
    password?   : [],
}

type LoginAction = AsyncThunkAction<
    AxiosResponse<any, any>, DataType, AsyncThunkConfig
> | UnknownAction;


const SignIn = () => {
    const { t }= useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const authState = useSelector((state: RootState) => state.auth);
    const [data, setData] = useState<DataType>();
    const [messageValidation, setMessageValidation] = useState<MessageValidationType | any>();
    const [isPreviewPassword, setIsPreviewPassword] = useState<boolean>(true);

    useEffect(() => {
        if (authState?.error && authState?.error?.fields) {
            setMessageValidation(authState?.error?.fields);
        }
    }, [authState]);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        setData((values: DataType|undefined): DataType => {
            return ({...values, [targetName]: targetValue});
        });
    }

    const handleLogin = async () => {
        try {
            const action: LoginAction | any = login(data!);
            dispatch(action);
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    };

    return (
        <AuthenticateLayout>
            <form onSubmit={ event => event.preventDefault() }>
                <div className="mb-12">
                    <h3 className="text-3xl font-extrabold dark:text-black">{ t('sign_in.sign_in') }</h3>
                    <p className="text-sm mt-4 dark:text-gray-700">
                        { t('sign_in.do_not_have_account') }
                        <Link
                            to='/register'
                            className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                        >
                            { t('sign_in.register_here') }
                        </Link>
                    </p>
                </div>
                <div>
                    <Label className="text-xs block mb-2 dark:text-black">
                        { t('sign_in.email') }
                    </Label>
                    <div className="relative flex items-center">
                        <Input
                            name="email"
                            type="text"
                            className="w-full text-sm border-b border-gray-300 px-2 py-3 outline-none dark:bg-white dark:text-black"
                            placeholder={ t('sign_in.enter_email') }
                            onChange={ e => handleOnChange(e) }
                        />
                        <img src={ emailIcon } className="w-[18px] h-[18px] absolute right-2" alt="Email icon"/>
                    </div>
                    <span
                        className="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
                    >
                        {
                            Array.isArray(messageValidation?.email)
                            && messageValidation?.email.length > 0
                            ? messageValidation?.email[0]
                            : ''
                        }
                    </span>
                </div>
                <div className="mt-8">
                    <Label className="text-xs block mb-2 dark:text-black">
                        { t('sign_in.password') }
                    </Label>
                    <div className="relative flex items-center">
                        <Input
                            name="password"
                            type={ isPreviewPassword ? 'text' : 'password' }
                            className="w-full text-sm border-b border-gray-300 px-2 py-3 outline-none dark:bg-white dark:text-black"
                            placeholder={ t('sign_in.enter_password') }
                            onChange={e => handleOnChange(e)}
                        />
                        <img
                            onClick={ () => setIsPreviewPassword(!isPreviewPassword) }
                            src={ isPreviewPassword ? eyeCloseIcon : eyeIcon }
                            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                            alt="Eye icon"
                        />
                    </div>
                    <span
                        className="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
                    >
                        {
                            Array.isArray(messageValidation?.password)
                            && messageValidation?.password.length > 0
                            ? messageValidation?.password[0]
                            : ''
                        }
                    </span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-5">
                    <div className="flex items-center">
                        <Input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:text-black"
                        />
                        <Label htmlFor="remember-me" className="ml-3 block text-sm dark:text-black">
                            { t('sign_in.remember_me') }
                        </Label>
                    </div>
                    <div>
                        <a
                            href=""
                            className="text-blue-600 font-semibold text-sm hover:underline"
                        >
                            { t('sign_in.forgot_password') }
                        </a>
                    </div>
                </div>
                <div className="mt-12">
                    <Button
                        type="button"
                        className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        onClick={ handleLogin }
                    >
                        { t('sign_in.sign_in') }
                    </Button>
                </div>
                <p className="my-8 text-sm text-gray-400 text-center">
                    { t('sign_in.or_continue_with') }
                </p>
                <div className="space-x-8 flex justify-center">
                    <span>
                        <img src={ googleIcon } className="inline cursor-pointer" alt="Google icon"/>
                    </span>
                    <span>
                        <img src={ facebookIcon } className="cursor-pointer" alt="Facebook icon"/>
                    </span>
                </div>
            </form>
        </AuthenticateLayout>
    );
}

export default SignIn;