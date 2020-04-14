import React, { Fragment } from 'react';

interface InnerInterface {
  lowTop?: boolean;
  lowBottom?: boolean;
  wide?: boolean;
  children: any;
  className?: string;
}

const Inner: React.FC<InnerInterface> = ({ lowTop, lowBottom, wide, children, className }) => {
  return (
    <Fragment>
      <div
        className={`inner ${wide ? 'inner_wide' : ''} ${lowTop ? 'inner_low-top' : ''} ${
          lowBottom ? 'inner_low-bottom' : ''
        } ${className ? className : ''}`}
      >
        {children}
      </div>

      <style jsx>{`
        .inner {
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          padding-top: var(--innerBlockVerticalPadding);
          padding-bottom: var(--innerBlockVerticalPadding);
          padding-right: var(--innerBlockHorizontalPadding);
          padding-left: var(--innerBlockHorizontalPadding);
        }

        .inner_low-top {
          padding-top: 0;
        }

        .inner_low-bottom {
          padding-bottom: 0;
        }

        .inner_wide {
          max-width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Inner;
