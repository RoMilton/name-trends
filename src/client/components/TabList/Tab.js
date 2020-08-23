import React from 'react';
import classNames from 'classnames';

const Tab = ({ children, isActive }) => (
  <div
    className={classNames(
      isActive === true && 'bg-yellow border-1 border-b-0',
      isActive === false && 'border-b-1',
      'border-brown',
      'first:border-l-0',
      'last:border-r-0',
      'first:rounded-tl-none',
      'last:rounded-tr-none',
      'rounded-t-lg',
      'text-center',
      'text-xl',
      'font-bold',
      'tracking-wider',
      'flex-auto',
      'flex',
      'py-4',
      'justify-center',
      'items-center'
    )}
  >
    {children}
  </div>
);

export default Tab;
