import React from 'react';

const SiteLayout: React.FC = ({ children }) => {
  return (
    <div className={`layout`}>
      <main className={'main'}>{children}</main>
    </div>
  );
};

export default SiteLayout;
