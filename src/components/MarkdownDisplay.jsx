import { forwardRef } from 'react';

// * dompurify
import DOMPurify from 'dompurify';

// * showdown.js
import Showdown from 'showdown';

const converter = new Showdown.Converter();
converter.setFlavor('github');

// * components
import Card from './Card';

// * styles
import '../styles/github-md.min.css';

const MarkdownDisplay = forwardRef(({ markdown, children }, displayRef) => {
  const html = converter.makeHtml(markdown);
  const sanitizedHtml = DOMPurify.sanitize(html);

  return (
    <Card
      ref={displayRef}
      className='markdown-display-wrap flex flex-col col-span-6 col-start-1 lg:col-start-7 row-start-1 overflow-y-auto'
    >
      {children}
      <div
        data-theme='dark'
        className='markdown-display h-full rounded-b-lg lg:rounded-tr-lg'
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </Card>
  );
});

export default MarkdownDisplay;
