import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white shadow-lg">
      <Link to="/dashboard"><SideBarIcon icon={<FaFire size="28" />} /></Link>
      <Divider />
      <Link to="/mytrips"><SideBarIcon icon={<BsPlus size="32" />} /></Link>
      <Link to="/travelpartners"><SideBarIcon icon={<BsFillLightningFill size="20" />} /></Link>
      <Link to="/costsplit"><SideBarIcon icon={<FaPoo size="20" />} /></Link>
      <Divider />
      <Link to="/settings"><SideBarIcon icon={<BsGearFill size="22" />} /></Link>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
