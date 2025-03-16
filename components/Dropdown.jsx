import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { RiMenu3Line as DropMenu } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Dropdown = ({ optionProp }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer lg:hidden">
          <DropMenu className="text-black font-bold w-8 h-7" />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 bg-white drop-shadow-md border font-[poppins] border-none"
      >
        <DropdownMenuItem asChild>
          <Link to="/">Home</Link>
        </DropdownMenuItem>
        {optionProp.map((option, index) => (
          <DropdownMenuItem asChild key={index}>
            <a className="cursor-pointer">{option}</a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Link to="/formSubmission">Apply for Talent Test</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
