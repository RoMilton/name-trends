import React from 'react';
import classNames from 'classnames';

const Tab = ({ children, isActive }) => (
  <div
    className={classNames(
      isActive === true && 'bg-yellow border-black border-1',
      'first:border-l-0',
      'last:border-r-0',
      'text-center',
      'text-xl',
      'font-bold',
      'tracking-wider',
      'flex-auto',
      'rounded-t-lg',
      'first:rounded-tl-none',
      'last:rounded-tr-none',
      'flex',
      'py-5',
      'justify-center',
      'items-center',
      'border-b-0'
    )}
  >
    {children}
  </div>
);

export default Tab;
