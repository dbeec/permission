import { FC, ReactNode } from "react";
import "../globalstyle-buttons.css";

interface PropButton {
  nameButton?: string;
  children?: ReactNode;
}
const ExportButton: FC<PropButton> = ({ nameButton, children }) => {
  return (
    <>
      <button className="button">
        {nameButton} {children}
      </button>
    </>
  );
};

export default ExportButton;
