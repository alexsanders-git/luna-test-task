import Button from "./components/button";
import RegistrationForm from "./components/registrationForm.tsx";
import {useTrainerStore} from "./store/trainer.ts";


function App() {
    const {trainer} = useTrainerStore();

    const isTrainerSet = trainer !== null;

    return (
        <div className="container h-screen m-auto px-4">
            <div className="relative flex item-center justify-center h-full">
                <RegistrationForm/>

                <div className="absolute top-4 right-4">
                    <Button text="Team" disabled={!isTrainerSet} onClick={() => alert('test')}/>
                </div>
            </div>
        </div>
    )
}

export default App
