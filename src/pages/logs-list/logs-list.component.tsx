import { Header, Menu, LoadingLogo } from '@components';
import LogsList from './logs-list.template';
import { useState } from 'react';

export function PageListComponent() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-col w-full h-full bg-black">
      <Header />
      <Menu />
      {isLoading ? (
        <div className="flex-1 flex lg:ml-64 justify-center items-center">
          <LoadingLogo />
        </div>
      ) : (
        <div className="flex-1 lg:pl-64 pl-0 overflow-auto">
          <LogsList />
        </div>
      )}
    </div>
  );
}
