// * styles
import './EditorLoader.css';

const EditorLoader = () => {
  return (
    <div className='loader-wrap flex items-center justify-center w-full h-full bg-[#1e1e1e] rounded-tr-lg'>
      <div className='editor-loader inline-block relative w-[80px] h-[80px]'>
        <div className='loader-bar inline-block absolute left-[8px] w-[16px] bg-gray-200' />
        <div className='loader-bar inline-block absolute left-[32px] w-[16px] bg-gray-200' />
        <div className='loader-bar inline-block absolute left-[56px] w-[16px] bg-gray-200' />
      </div>
    </div>
  );
};

export default EditorLoader;
