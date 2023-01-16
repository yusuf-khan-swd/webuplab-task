import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayouts = () => {
  const dashboardItems = <>
    <li className='border rounded-lg m-1'><Link to='/dashboard'>Dashboard</Link></li>
    <li className='border rounded-lg m-1'><NavLink to='/dashboard/data'>Data</NavLink></li>
  </>
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white lg:bg-transparent text-base-content">
            {dashboardItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;