import React from "react";

type TabItemProps = {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const TabItem = ({ icon, isActive = false, onClick }: TabItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex-1 flex flex-col justify-center items-center cursor-pointer "
      style={{
        color: isActive ? "var(--color-new)" : "var(--color-hoverNavDark)",
      }}
    >
      <div>{icon}</div>
    </div>
  );
};

export default TabItem;
