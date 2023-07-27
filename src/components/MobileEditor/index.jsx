import { forwardRef } from 'react';

// * components
import Card from '../Card';

// * utils
import { debounce } from '../../utils';

const MobileEditor = forwardRef(({ value, setValue, children }, editorRef) => {
  const debouncedSetValue = debounce(value => {
    localStorage.setItem('markdown', value);
    setValue(value);
  });
  const changeHandler = value => debouncedSetValue(value);

  return (
    <Card
      ref={editorRef}
      className='editor-container flex lg:hidden flex-col col-span-6 col-start-1 row-start-1 h-full w-full z-30 overflow-hidden'
    >
      {children}
      <textarea
        spellCheck
        translate='no'
        onChange={changeHandler}
        className='mobile-editor h-full bg-vs-dark text-gray-200 rounded-tr-lg resize-none focus:outline-none p-4'
      />
    </Card>
  );
});

export default MobileEditor;
