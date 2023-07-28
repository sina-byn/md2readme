import { forwardRef } from 'react';
import clsx from 'clsx';

const Card = forwardRef(({ className, children, ...props }, cardRef) => {
  return (
    <div ref={cardRef} className={clsx('card rounded-b-lg', className)} {...props}>
      {children}
    </div>
  );
});

export default Card;
