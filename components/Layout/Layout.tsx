import React, { ReactNode } from "react";
import Nav from "../Nav/Nav";

interface Layout {
  children: ReactNode;
}

export default ({ children }: Layout) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
