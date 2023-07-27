import clsx from 'clsx';

// * components
import Card from '../Card';

// * utils
import { debounce } from '../../utils';

const MobileEditor = ({ value, setValue, className, children }) => {
  const debouncedSetValue = debounce(e => {
    const { value } = e.target;
    localStorage.setItem('markdown', value);
    setValue(value);
  });
  const changeHandler = value => debouncedSetValue(value);

  return (
    <Card
      className={clsx(
        'editor-container flex lg:hidden flex-col col-span-6',
        'col-start-1 row-start-1 h-full w-full overflow-hidden',
        className
      )}
    >
      {children}
      <textarea
        spellCheck
        translate='no'
        defaultValue={value}
        onChange={changeHandler}
        className='mobile-editor h-full bg-vs-dark text-gray-200 lg:rounded-tr-lg resize-none focus:outline-none p-4'
      />
    </Card>
  );
};

export default MobileEditor;
