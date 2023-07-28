import clsx from 'clsx';

// * dompurify
import DOMPurify from 'dompurify';

// * showdown.js
import Showdown from 'showdown';

const converter = new Showdown.Converter();
converter.setFlavor('github');

// * components
import Card from '../Card';

// * styles
import './github-md.min.css';

const MarkdownDisplay = ({ theme, markdown, className, children }) => {
  const html = converter.makeHtml(markdown);
  const sanitizedHtml = DOMPurify.sanitize(html);
  const formatTheme = theme => theme.split(' ').join('_');

  return (
    <Card
      className={clsx(
        'markdown-display-wrap flex flex-col lg:col-span-6',
        'col-start-1 lg:col-start-7 row-start-2 sm:row-start-1 overflow-y-auto',
        className
      )}
    >
      {children}
      <div
        data-theme={formatTheme(theme)}
        className={clsx(
          'markdown-display h-full rounded-b-l',
          theme.startsWith('light') && 'border-solid border border-gray-'
        )}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </Card>
  );
};

export default MarkdownDisplay;
