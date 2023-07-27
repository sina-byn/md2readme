import clsx from 'clsx';

const TabSwitchButton = ({ tab, setCurrentTab, className, children }) => {
  const tabSwitchHandler = () => setCurrentTab(tab);

  return (
    <button
      type='button'
      onClick={tabSwitchHandler}
      className={clsx(
        'tab-toggle-button relative text-lg text-gray-200 font-light rounded-t-lg z-50 py-1 px-4',
        className
      )}
    >
      {children}
    </button>
  );
};

export default TabSwitchButton;
