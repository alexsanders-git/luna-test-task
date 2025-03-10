import Input from "./components/input";
import Button from "./components/button";
import {useForm} from "react-hook-form";

interface IForm {
    firstName: string,
    lastName: string,
}

function App() {
    const {register, handleSubmit} = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        console.log('Form data: ', data);
    }

    return (
        <div className="container h-screen m-auto px-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex item-center justify-center h-full">
                <form className="w-full max-w-4xl m-auto space-y-4">
                    <Input
                        type="text"
                        label="First name"
                        placeholder="Enter first name"
                        {...register('firstName')}
                    />
                    <Input
                        type="text"
                        label="Last name"
                        placeholder="Enter last name"
                        {...register('lastName')}
                    />
                    <Button text="Save" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default App
