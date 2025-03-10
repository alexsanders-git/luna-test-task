import Button from "./components/button";
import RegistrationForm from "./components/registrationForm.tsx";
import {useTrainerStore} from "./store/trainer.ts";
import {useState} from "react";
import Modal from "./components/modal.tsx";


function App() {
    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const {trainer} = useTrainerStore();

    const isTrainerSet = trainer !== null;

    return (
        <div className="container h-screen m-auto px-4">
            <div className="relative flex item-center justify-center h-full">
                <div className="absolute top-4 right-4">
                    <Button text="Team" disabled={!isTrainerSet} onClick={openModal}/>
                </div>

                <RegistrationForm/>

                {showModal && <Modal onClick={closeModal}/>}
            </div>
        </div>
    )
}

export default App
