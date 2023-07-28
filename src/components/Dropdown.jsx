import { useRef, useState } from 'react';
import clsx from 'clsx';

// * hooks
import useClickOutside from '../hooks/useClickOutside';

const Dropdown = ({ value, setValue, items, className, ...props }) => {
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
    <div
      ref={dropdownRef}
      className={clsx('dropdown relative text-gray-200 rounded-lg z-[100]', className)}
      {...props}
    >
      <button
        type='button'
        onClick={openToggler}
        className={clsx(
          'dropdown-button flex items-center justify-between gap-x-2',
          'w-full h-full bg-inherit text-inherit font-light',
          'rounded-lg sm:rounded-b-none px-4'
        )}
      >
        <span className='truncate'>{value || items[0]}</span>
        <i
          className={clsx('fa-solid fa-2xs mt-0.5', isOpen ? 'fa-chevron-up' : 'fa-chevron-down')}
        />
      </button>
      <div
        className={clsx(
          'dropdown-items flex-col w-full absolute left-0 bg-inherit',
          'border border-solid border-gray-700 rounded-lg sm:rounded-t-none overflow-hidden',
          isOpen ? 'flex' : 'hidden'
        )}
      >
        {items.map((item, idx) => (
          <button
            key={idx}
            type='button'
            data-value={item}
            onClick={changeHandler}
            className={clsx(
              'dropdown-item w-full bg-transparent border-b border-solid border-gray-700',
              'last:border-0 text-inherit font-light whitespace-nowrap py-2 px-4'
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
