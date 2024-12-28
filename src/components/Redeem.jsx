import axios from 'axios';
import React, { useState } from 'react';

function Redeem() {
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [info, setInfo] = useState('');

    const handleRedeem = () => {
        // Validate the inputs
        if (amount <= 0 || isNaN(amount)) {
            setInfo('Please enter a valid amount.');
            return;
        }

        if (!cardNumber.trim()) {
            setInfo('Please enter a valid card number.');
            return;
        }

        // Prepare the payload for the POST request
        const payload = {
            cardNumber: cardNumber,
            amount: amount,
            userId: '1',
        };

        // Make the POST request to redeem
        axios
            .post('https://aptech.heritagejewels.com.pk/microservices/addtransaction.php', payload)
            .then((response) => {
                try {
                    const res = JSON.parse(response.data);
                    if (res.success) {
                        setInfo(
                            <div className="d-flex justify-content-center flex-column">
                                <h1 className="text-center">Congratulations!</h1>
                                <h3 className="text-center">Redemption successful</h3>
                            </div>
                        );
                    } else {
                        setInfo("Redemption failed. Please try again.");
                    }
                } catch (error) {
                    setInfo("An error occurred. Please try again.");
                }

                // Clear the success/error message after 5 seconds
                setTimeout(() => {
                    setInfo('');
                }, 5000);
            })
            .catch((error) => {
                console.error(error);
                setInfo('Error occurred. Please try again.');
                setTimeout(() => {
                    setInfo('');
                }, 5000);
            });
    };

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center">
                <input
                    className="form-control mt-5"
                    type="text"
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <input
                    className="form-control mt-2"
                    type="number"
                    placeholder="Enter redeem amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <br />
                <button className="btn btn-outline-danger" onClick={handleRedeem}>
                    Redeem
                </button>
                {info && <p className="text-center mt-3">{info}</p>}
            </div>
        </div>
    );
}

export default Redeem;
