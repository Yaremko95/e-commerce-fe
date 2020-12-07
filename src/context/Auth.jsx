import React, { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
function Auth({ children }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, []);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, authenticated, setAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
}

export default Auth;
