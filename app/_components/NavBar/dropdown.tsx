import classNames from 'classnames';
import React, { useState } from 'react';

interface IProps {
  title: string;
  lastItem: boolean;
  children: any;
}

const Dropdown = ({ title, lastItem, children }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className={classNames('w-3 h-3 mt-0.5', {
            'rotate-180': open,
            'rotate-0': !open,
          })}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </button>
      {open && (
        <div
          className={classNames([
            'lg:absolute  w-full  lg:w-48',
            lastItem ? 'lg:right-0 origin-top-right' : 'lg:left-0 origin-top-left',
          ])}
        >
          <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
            {children?.map(
              (item: {
                path: string | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | Iterable<React.ReactNode>
                  | null
                  | undefined;
              }) => (
                <a href={item.path} className="py-1 text-gray-600 hover:text-gray-900">
                  {item.title}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default Dropdown;
