import { useState, useEffect } from 'react';

// * components
import Container from './components/Container';
import Dropdown from './components/Dropdown';
import Editor from './components/Editor';
import MobileEditor from './components/MobileEditor';
import MarkdownDisplay from './components/MarkdownDisplay';
import TabSwitchButton from './components/TabSwitchButton';
import DownloadButton from './components/DownloadButton';

// * data
import themes from './data/themes.json';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [currentTab, setCurrentTab] = useState('editor');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedMarkdown = localStorage.getItem('markdown');

    if (savedMarkdown !== null) setMarkdown(savedMarkdown);
  }, []);

  return (
    <div className='app-container'>
      <header className='app-header h-[65px] bg-zinc-800 text-gray-200 px-2 md:px-5'>
        <Container className='flex justify-between items-center'>
          <img src='/md2readme.svg' alt='md2readme logo' className='w-10' />
          <DownloadButton markdown={markdown} />
        </Container>
      </header>
      <main className='main-container w-screen h-[calc(100vh_-_65px)] p-2 md:p-5'>
        <Container className='grid lg:grid-cols-12 gap-x-5'>
          <Editor
            value={markdown}
            setValue={setMarkdown}
            className={currentTab === 'editor' && 'z-30'}
          />
          <MobileEditor
            value={markdown}
            setValue={setMarkdown}
            className={currentTab === 'editor' && 'z-30'}
          >
            <TabSwitchButton tab='editor' setCurrentTab={setCurrentTab} className='bg-vs-dark'>
              Editor
            </TabSwitchButton>
          </MobileEditor>
          <MarkdownDisplay markdown={markdown} className={currentTab === 'display' && 'z-30'}>
            <header className='display-header flex flex-row-reverse lg:flex-row justify-start lg:justify-between gap-x-2'>
              <TabSwitchButton
                tab='display'
                setCurrentTab={setCurrentTab}
                className='bg-github-dark'
              >
                README.md
              </TabSwitchButton>
              <Dropdown
                value={theme}
                setValue={setTheme}
                items={themes}
                className='bg-github-dark w-40'
                formatFn={value => value.split(' ').join('_')}
              />
            </header>
          </MarkdownDisplay>
        </Container>
      </main>
    </div>
  );
};

export default App;
