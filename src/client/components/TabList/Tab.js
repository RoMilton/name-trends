import React from 'react';
import classNames from 'classnames';

const Tab = ({ children, isActive }) => (
  <div
    className={classNames(
      'text-center',
      'text-xl',
      'font-bold',
      'tracking-wider',
      'flex-auto',
      'rounded-t-lg',
      'first:rounded-tl-none',
      'last:rounded-tr-none',
      'flex',
      'py-6',
      'justify-center',
      'items-center',
      isActive === true && 'bg-yellow border-black border-t-1 border-r-1'
    )}
  >
    {children}
  </div>
);

export default Tab;
