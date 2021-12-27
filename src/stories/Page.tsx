import React from "react";

import { Header } from "./Header";
import "./page.css";
import "../index.css";

interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: PageProps) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />
  </article>
);
