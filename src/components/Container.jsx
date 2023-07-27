import clsx from 'clsx';

const Container = ({ className, children }) => {
  return (
    <div className={clsx('container w-full h-full max-w-[1920px] mx-auto', className)}>
      {children}
    </div>
  );
};

export default Container;
