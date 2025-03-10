import Input from "./components/input";
import Button from "./components/button";

function App() {
    return (
        <div className="container h-screen m-auto px-4">
            <div className="flex item-center justify-center h-full">
                <form className="w-full max-w-4xl m-auto space-y-4">
                    <Input type="text" name="firstName" label="First name" placeholder="Enter first name"/>
                    <Input type="text" name="lastName" label="Last name" placeholder="Enter last name"/>
                    <Button text="Save" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default App
