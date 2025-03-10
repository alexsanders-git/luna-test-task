import {useForm} from "react-hook-form";
import Input from "./input.tsx";
import Button from "./button.tsx";
import {ITrainer} from "../types.ts";
import {useTrainerStore} from "../store/trainer.ts";

export default function RegistrationForm() {
    const {register, formState: {errors}, handleSubmit} = useForm<ITrainer>();

    const {setTrainer} = useTrainerStore();

    const onSubmit = (data: ITrainer) => {
        setTrainer(data)
    }

    return (
        <form className="w-full max-w-4xl m-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                label="First name"
                placeholder="Enter first name"
                error={errors.firstName?.message}
                {...register('firstName', {
                    required: 'Field is required',
                    minLength: {value: 2, message: 'Minimum 2 characters'},
                    maxLength: {value: 12, message: 'Maximum 12 characters'},
                    pattern: {value: /^[A-Za-z]+$/, message: 'Only Latin letters are allowed'}
                })}
            />
            <Input
                type="text"
                label="Last name"
                placeholder="Enter last name"
                error={errors.lastName?.message}
                {...register('lastName', {
                    required: 'Field is required',
                    minLength: {value: 2, message: 'Minimum 2 characters'},
                    maxLength: {value: 12, message: 'Maximum 12 characters'},
                    pattern: {value: /^[A-Za-z]+$/, message: 'Only Latin letters are allowed'}
                })}
            />
            <Button text="Save" type="submit"/>
        </form>
    )
}