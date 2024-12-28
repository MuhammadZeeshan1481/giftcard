import { useState, useEffect } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import axios from 'axios';

DataTable.use(DT);

function Giftcard() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios
            .get('https://aptech.heritagejewels.com.pk/microservices/giftcard.php')
            .then((response) => {
                setData(response.data);
                setShow(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-4'>
                    <h1>All customer details</h1>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    {show ? (
                        data.length > 0 ? (
                            <DataTable className="display mx-5 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Card Number</th>
                                        <th>Card Balance</th>
                                        <th>Card Value</th>
                                        <th>Card Date/Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.cardnumber}>
                                            <td>{item.cardnumber}</td>
                                            <td>{item.cardbalance}</td>
                                            <td>{item.cardvalue}</td>
                                            <td>{item.createddate}</td> {/* Fixed typo */}
                                        </tr>
                                    ))}
                                </tbody>
                            </DataTable>
                        ) : (
                            <p className="text-center">No data available</p> // Fallback message when no data is available
                        )
                    ) : (
                        <p className="text-center">Loading...</p> // Show loading when data is being fetched
                    )}
                </div>
                <div className='col-md-1'></div>
            </div>
        </>
    );
}

export default Giftcard;
