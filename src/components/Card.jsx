import { forwardRef } from 'react';
import clsx from 'clsx';

const Card = forwardRef(({ className, children }, cardRef) => {
  return (
    <div ref={cardRef} className={clsx('card rounded-b-lg', className)}>
      {children}
    </div>
  );
});

export default Card;
