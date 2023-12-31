

import { GoogleOAuthProvider } from "@react-oauth/google";
// components

import { lazy, Suspense } from 'react';

//components
import UserProvider from './context/UserProvider';

// import Loader from './components/loader/Loader';

import AccountProvider from "./context/AccountProvider";
const Messenger = lazy(() => import('./components/Messenger'));

function App() {

  // const clientId = '260055461609-5jt4493vlu9981ouvu08l3pummidr7jk.apps.googleusercontent.com';
   const clientId = '260055461609-q86q6imec7rohv7ko1lurvkm5pmr9h4b.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
