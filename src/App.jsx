import { useState, useEffect } from 'react';

// * components
import Container from './components/Container';
import Editor from './components/Editor';
import MobileEditor from './components/MobileEditor';
import MarkdownDisplay from './components/MarkdownDisplay';
import TabSwitchButton from './components/TabSwitchButton';
import DownloadButton from './components/DownloadButton';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [currentTab, setCurrentTab] = useState('editor');

  useEffect(() => {
    const savedMarkdown = localStorage.getItem('markdown');

    if (savedMarkdown !== null) setMarkdown(savedMarkdown);
  }, []);

  return (
    <div className='app-container'>
      <header className='app-header h-[65px] bg-zinc-800 text-gray-200 px-2 md:px-5'>
        <Container className='flex justify-between items-center'>
          <h1 className='app-title text-xl font-bold'>md2readme</h1>
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
            <TabSwitchButton
              tab='display'
              setCurrentTab={setCurrentTab}
              className='bg-github-dark self-end lg:self-start'
            >
              README.md
            </TabSwitchButton>
          </MarkdownDisplay>
        </Container>
      </main>
    </div>
  );
};

export default App;
