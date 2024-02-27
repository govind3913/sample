import React, { ReactNode } from "react";

interface MainSectionProps {
  collapsed: boolean;
  children: ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children, collapsed }) => {
  const sidebarWidth = collapsed ? 50 : 250; // Define the width of the collapsed and expanded sidebar
  const marginLeft = collapsed ? sidebarWidth : 0; // Set the margin-left based on the collapsed state

  return (
    <div className="main-section" style={{ marginLeft }}>
      {children}
    </div>
  );
};

export default MainSection;
