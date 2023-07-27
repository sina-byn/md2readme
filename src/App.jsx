import { useState } from 'react';

// * components
import Container from './components/Container';
import Editor from './components/Editor';
import MobileEditor from './components/MobileEditor';
import MarkdownDisplay from './components/MarkdownDisplay';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className='app-container'>
      <header className='app-header h-[65px] bg-zinc-800 text-gray-200 px-2 md:px-5'>
        <Container className='flex justify-center items-center'>
          <h1 className='app-title text-xl font-bold'>md2readme</h1>
        </Container>
      </header>
      <main className='main-container w-screen h-[calc(100vh_-_65px)] p-2 md:p-5'>
        <Container className='grid lg:grid-cols-12 gap-x-5'>
          <Editor value={markdown} setValue={setMarkdown} />
          <MobileEditor value={markdown} setValue={setMarkdown} />
          <MarkdownDisplay markdown={markdown} />
        </Container>
      </main>
    </div>
  );
};

export default App;
