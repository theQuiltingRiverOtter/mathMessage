import React from "react";
import WinMessage from "./WinMessage";
import Letter from "./Letter";
import FormButton from "./Form/FormButton";

export default function Message({ secretMessage, origMessage }) {
    const [messageData, setMessageData] = React.useState({});

    function updateMessageData(e) {
        setMessageData({
            ...messageData,
            [e.target.name]: e.target.value
        });
    }
    const [isCorrect, setIsCorrect] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const message = origMessage.split(" ").join("").toLowerCase();
        const letters = Object.values(messageData).join("").toLowerCase();
        if (message === letters) {
            setMessageData({});
        }
        setIsCorrect(message === letters);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="container">
                    {secretMessage.map((row, i) => (
                        <div key={i} className="row">
                            {row.map((letter, j) => (
                                <Letter
                                    key={j}
                                    i={i}
                                    j={j}
                                    letter={letter}
                                    update={updateMessageData}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <FormButton formId="submitBtn" btnText="Check Message" />
            </form>
            {isCorrect && <WinMessage message={origMessage} />}
        </div>
    );
} 
