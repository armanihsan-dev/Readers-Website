import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ text, bg, hoverBg, py }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="px-2.5 py-1 text-[12px] rounded-2xl cursor-pointer transition text-white"
      style={{ backgroundColor: bg, paddingBlock: py }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverBg)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = bg)}
      onClick={() => loginWithRedirect()}
    >
      {text}
    </button>
  );
};

export default LoginButton;
