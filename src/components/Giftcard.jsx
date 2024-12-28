import { useState } from 'react';
import Customhokk from './Customhokk';
import Redeem from './Redeem';

function Giftcard() {
    const [cardNum, setCardNum] = useState("");
    const [submittedCard, setSubmittedCard] = useState("");
    const [show, setShow] = useState(false);
    const { data, loading, error } = Customhokk(`https://aptech.heritagejewels.com.pk/microservices/singlecard.php?cardnumber=${submittedCard}`);

    function handleChange(e) {
        if (e.keyCode === 13) {
            setShow(true);
            setSubmittedCard(cardNum);
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center flex-column container'>
                <h1 className='text-center'>Swipe Your Card</h1>
                <input
                    className='form-control'
                    type="text"
                    onKeyUp={handleChange}
                    onChange={(e) => setCardNum(e.target.value)}
                    value={cardNum}
                    placeholder='Search'
                />
            </div>

            <div className='d-flex justify-content-center flex-column'>
                {error ? (
                    <h2 className="text-center text-danger">An error occurred while fetching data.</h2>
                ) : (
                    show && (
                        loading ? (
                            <h2 className="text-center">Please wait, loading in progress...</h2>
                        ) : (
                            data && data.length > 0 ? (
                                data.map((item) => (
                                    <div className='container d-flex flex-column align-items-center' key={item.cardnumber} style={{ border: "solid 1px black", backgroundColor: "grey", borderRadius: "10px" }}>
                                        <h3 className='text-center my-3'>CARD DETAILS</h3>
                                        <h4>Card Number: <br /><span>{item.cardnumber}</span></h4>
                                        <h4>Card Balance: <span>{item.cardbalance} PKR</span></h4>
                                        <h4>Card Value: <span>{item.cardvalue} PKR</span></h4>
                                        <h4>Card Creation Date/Time: <span>{item.createddate}</span></h4> {/* Corrected the typo here */}
                                    </div>
                                ))
                            ) : (
                                <h1 className="text-center text-danger">Invalid card number, please enter a valid card number.</h1>
                            )
                        )
                    )
                )}
            </div>
            
            <Redeem /> {/* Assuming you want to render the Redeem component */}
        </>
    );
}

export default Giftcard;
