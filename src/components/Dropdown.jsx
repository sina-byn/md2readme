import { useRef, useState } from 'react';
import clsx from 'clsx';

// * hooks
import useClickOutside from '../hooks/useClickOutside';

const Dropdown = ({ value, setValue, items, formatFn = val => val, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const openToggler = () => setIsOpen(prev => !prev);
  const changeHandler = e => {
    const item = e.target;
    const value = item.dataset.value;
    setValue(value);
    openToggler();
  };

  return (
    <div ref={dropdownRef} className={clsx('dropdown relative rounded-t-lg z-50', className)}>
      <button
        type='button'
        onClick={openToggler}
        className='dropdown-button h-full bg-inherit text-gray-200 font-light rounded-t-lg px-4'
      >
        {value || items[0]}
      </button>
      <div
        className={clsx(
          'dropdown-items flex-col w-full absolute left-0 bg-inherit',
          'border border-solid border-gray-400 rounded-b-lg overflow-hidden shadow-lg',
          isOpen ? 'flex' : 'hidden'
        )}
      >
        {items.map((item, idx) => (
          <button
            key={idx}
            type='button'
            data-value={formatFn(item)}
            onClick={changeHandler}
            className={clsx(
              'dropdown-item bg-transparent border-b border-solid border-gray-400',
              'last:border-0 text-gray-200 font-light py-1 px-4'
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
