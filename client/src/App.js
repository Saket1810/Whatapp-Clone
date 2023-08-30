

import { GoogleOAuthProvider } from "@react-oauth/google";
// components

import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '260055461609-5jt4493vlu9981ouvu08l3pummidr7jk.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />

      </AccountProvider>
    
    </GoogleOAuthProvider>
  );
}

export default App;
