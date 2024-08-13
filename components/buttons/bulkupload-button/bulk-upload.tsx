import { FC, ReactNode } from "react";
import "../globalstyle-buttons.css";

interface PropBulkButton {
  nameButton?: string;
  children?: ReactNode;
}

const BulkUploadButton: FC<PropBulkButton> = ({ nameButton, children }) => {
  return (
    <>
      <button className="button">
        {nameButton} {children}
      </button>
    </>
  );
};

export default BulkUploadButton;
