import { forwardRef } from 'react';

// * monaco-editor
import MonacoEditor from '@monaco-editor/react';

// * components
import Card from '../Card';
import EditorLoader from './EditorLoader';

// * utils
import { debounce } from '../../utils';

const Editor = forwardRef(({ value, setValue, children }, editorRef) => {
  const debouncedSetValue = debounce(value => {
    localStorage.setItem('markdown', value);
    setValue(value);
  });
  const changeHandler = value => debouncedSetValue(value);

  return (
    <Card
      ref={editorRef}
      className='editor-container hidden lg:flex flex-col col-span-6 col-start-1 row-start-1 h-full w-full z-30 overflow-hidden'
    >
      {children}
      <MonacoEditor
        width='100%'
        height='100%'
        theme='vs-dark'
        language='markdown'
        value={value}
        onChange={changeHandler}
        className='overflow-hidden rounded-tr-lg'
        options={{ fontSize: 16, wordWrap: true }}
        loading={<EditorLoader />}
      />
    </Card>
  );
});

export default Editor;
