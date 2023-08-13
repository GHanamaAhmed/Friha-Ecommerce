"use client";
import { Auth0Provider } from '@auth0/auth0-react';
export default function Auth0({ children }) {
  return (
    <Auth0Provider
      domain="dev-lsmw7wsceuyggjvl.us.auth0.com"
      clientId="j2FaRlqeGs4mOqyxayuzS8eWujgF4Gfu"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
    >
      {children}
    </Auth0Provider>
  );
}
