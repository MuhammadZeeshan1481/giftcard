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
            .get('https://aptech.heritagejewels.com.pk/microservices/transaction.php')
            .then((response) => {
                setData(response.data);
                console.log(response.data[0]);
                setShow(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-4'></div>

                <div className='col-md-4'>
                    <h1 className='text-center'>All transaction details</h1>
                </div>

                <div className='col-md-4'></div>
            </div>

            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    {show && data.length > 0 ? (
                        <DataTable className="Display mx-5 table table-bordered">
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Card Number</th>
                                    <th>Amount Withdrawn</th>
                                    <th>Card Date/Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.cardnumber}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.datecreated}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </DataTable>
                    ) : (
                        <p className="text-center">No data available</p>
                    )}
                </div>
                <div className='col-md-1'></div>
            </div>
        </>
    );
}

export default Giftcard;
