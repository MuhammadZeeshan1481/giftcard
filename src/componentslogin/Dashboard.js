import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <>
        <div style={{ padding: '1rem' }} className='d-flex justify-content-center flex-column'>
           
                  <h4 className='text-center'>HERITGE JEWELERS</h4>
                  <h5 className='text-center'>Click to Logout</h5>
                  
          
        </div>
        <div className='d-flex justify-content-center'>
         <button className='btn btn-outline-primary btn-md' onClick={logout} >
         Logout
     </button> 
     </div>
     <div className='mb-50'>
     <hr/>
     </div>
     </>
    );
};

export default Dashboard;
