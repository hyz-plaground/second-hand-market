"use client"

import { ICreateUser } from "@/types/req";
import createUser from "@/lib/createUser";
import { SubmitHandler, useForm } from "react-hook-form";

const SInput = `rounded-md p-2 outline-none border-2 focus:border-theme focus:bg-gray-light`;

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<ICreateUser>();
    const onSubmit: SubmitHandler<ICreateUser> = async (data: ICreateUser) => {
        const msg = await createUser(data);
        msg && alert(msg);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`flex flex-col gap-3 text-black`}>

                <input
                    required
                    className={SInput}
                    type={`text`}
                    placeholder={`username`}
                    {...register(`username`)} />

                <input
                    required
                    className={SInput}
                    type={`email`}
                    placeholder={`email`}
                    {...register(`email`)} />

                <input
                    required
                    className={`w-5 h-5 checked:before:bg-red-500`}
                    type={`checkbox`}
                    {...register("emailVisibility")} />

                <input
                    required
                    className={SInput}
                    type={`password`}
                    placeholder={`password`}
                    {...register(`password`)} />

                <input
                    required
                    className={SInput}
                    type={`password`}
                    placeholder={`passwordConfirm`}
                    {...register(`passwordConfirm`)} />

                <input
                    required
                    className={SInput}
                    type={`name`}
                    placeholder={`name`}
                    {...register(`name`)} />


                <button
                    type={`submit`} className={`bg-white rounded-md p-2 outline-none border-2 border-theme text-theme-dark font-bold hover:drop-shadow-md hover:scale-[1.02] transition-all`}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;

