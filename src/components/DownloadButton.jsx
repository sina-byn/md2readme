const DownloadButton = ({ markdown }) => {
  const downloadHandler = () => {
    if (!markdown.length) return;

    const blob = new Blob([markdown], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'README.md';

    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <button
      type='button'
      onClick={downloadHandler}
      className='download-button flex items-center gap-x-2 bg-gray-200 text-zinc-800 font-bold border-0 rounded-md cursor-pointer py-2 px-4'
    >
      <img src='/download.svg' alt='download icon' className='download-icon w-4' />
      Download
    </button>
  );
};

export default DownloadButton;
