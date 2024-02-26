/* eslint-disable @typescript-eslint/no-floating-promises */
import { Header, Menu, LoadingLogo } from '@components';
import LogsList from './logs-list.template';
import { useState } from 'react';
// import { fetcher } from 'services/fetcher';

export function PageListComponent() {
  // const endDate = '2023-12-06';

  // const fetchLogs = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetcher('byDate', { endDate });
  //     const data = await response;
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setIsLoading(false);
  // };

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
