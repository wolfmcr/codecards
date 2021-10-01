import React from 'react';

export default function Footer() {
  return (
    <div className="fixed-bottom footer">
      <ul className="">
        <li className="">
          &copy;{' '}
          <a href="http://wolfgangmcrae.com" target="_blank">
            Wolfgang McRae
          </a>{' '}
          2021
        </li>
      </ul>
    </div>
  );
}
