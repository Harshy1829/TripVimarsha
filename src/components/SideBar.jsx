import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="Dashboard" link="/" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="My Trips" link="/trips" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Travel Partners" link="/partners" />
      <SideBarIcon icon={<FaPoo size="20" />} text="Cost Split" link="/cost-split" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" link="/settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, text, link }) => (
  <Link to={link} className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
