import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../components/Logout';
import Dropdown from './Dropdown';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const liStyle =
    'text-sm cursor-pointer hidden lg:block text-cyan-500 hover:text-cyan-800 transition';

  const lis = ['About', 'Contact'];

  return (
    <header className="w-full flex justify-between items-center bg-white p-4 drop-shadow-md py-2 px-8">
      <div>
        <h1 className="font-bold text-[12px] text-black lg:text-sm">
          The Readers
        </h1>
      </div>
      <div>
        <ul className="flex px-6 gap-4">
          <li className={liStyle}>
            <Link to="/">Home</Link>
          </li>
          {lis.map((li) => (
            <li key={li} className={liStyle}>
              {li}
            </li>
          ))}
          <li className={liStyle}>
            <Link to="/formSubmission">Apply for Talent test</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div>
          {isAuthenticated ? (
            <Logout />
          ) : (
            <LoginButton text={'login'} bg={'#4ade80'} hoverBg={'#15803d'} />
          )}
        </div>
        <Dropdown optionProp={lis} />
      </div>
    </header>
  );
};

export default Header;
