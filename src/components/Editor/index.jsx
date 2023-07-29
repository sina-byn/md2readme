import clsx from 'clsx';

// * monaco-editor
import MonacoEditor from '@monaco-editor/react';

// * components
import Card from '../Card';
import EditorLoader from './EditorLoader';

const Editor = ({ value, setValue }) => {
  const changeHandler = value => {
    localStorage.setItem('markdown', value);
    setValue(value);
  };

  return (
    <Card
      className={clsx(
        'editor-container hidden lg:flex flex-col col-span-6',
        'col-start-1 row-start-1 h-full w-full overflow-hidden'
      )}
    >
      <h1
        className={clsx(
          'editor-title w-fit bg-vs-dark text-xl text-gray-200',
          'font-light rounded-t-lg py-1 px-4'
        )}
      >
        Editor
      </h1>
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
};

export default Editor;
