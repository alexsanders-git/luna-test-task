import Button from "./components/button";
import RegistrationForm from "./components/registrationForm.tsx";


function App() {
    return (
        <div className="container h-screen m-auto px-4">
            <div className="relative flex item-center justify-center h-full">
                <RegistrationForm/>

                <div className="absolute top-4 right-4">
                    <Button text="Team" disabled={true}/>
                </div>
            </div>
        </div>
    )
}

export default App
