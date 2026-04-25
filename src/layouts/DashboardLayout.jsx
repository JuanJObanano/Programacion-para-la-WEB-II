import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

function DashboardLayout (){
    return (
        <div className='dashboard-contenedor'>
            <Sidebar />
            <div className='dashboard-derecha'>
                <TopNav />
                <main className='dashboard-contenido'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;