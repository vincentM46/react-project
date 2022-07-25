import React, { useState } from 'react';

function SignUpPage() {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmitButton = () => {
        alert(`You have successfully signed up for our newsletter under ${inputValue}! When this gets implemented, be sure to come back and do it again for real!`);
    };
    return (
        <div>
            <h1 className="signUp">Do you believe you're an indecisive person who won't be able to ever figure out what they want to eat? Always in the mood to cook something regardless?</h1>
            <h2 className="signUpDescription">Luckily for you, you can subscribe for a weekly delivery of random recipes for you to try out!</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Your Email Here"/>
            <input type="submit" value="submit" onClick={handleSubmitButton}/>
        </div>
    )
}

export default SignUpPage;