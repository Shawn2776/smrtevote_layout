import React from "react";

interface Props {}

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <div>Navbar</div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default layout;
