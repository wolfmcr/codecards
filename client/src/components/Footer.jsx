import React from 'react';
import { useMediaQuery } from '@mui/material';
export default function Footer() {
  const mobile = useMediaQuery('(max-width: 800px)');
  return (
    <div className={mobile ? 'footer' : 'fixed-bottom footer'}>
      <ul className="">
        <li className="">
          &copy;{' '}
          <a href="http://wolfgangmcrae.com" target="_blank" rel="noreferrer">
            Wolfgang McRae
          </a>
          {' 2021'}
        </li>
      </ul>
    </div>
  );
}
