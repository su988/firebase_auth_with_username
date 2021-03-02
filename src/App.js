import React from 'react';
import Main from './Main';
import { UserContext } from '../src/lib/context';
import { useUserData } from '../src/lib/hooks';

export default function App() {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Main />
    </UserContext.Provider>
  );
}
