import { forwardRef } from 'react';
import clsx from 'clsx';

const Card = forwardRef(({ className, children }, cardRef) => {
  return (
    <div ref={cardRef} className={clsx('card flex flex-col rounded-b-lg', className)}>
      {children}
    </div>
  );
});

export default Card;
