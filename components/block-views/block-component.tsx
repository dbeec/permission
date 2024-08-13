import { FC, ReactNode } from "react";
import "./block-component.css";

interface PropBlockTitle {
  blockTitle?: string;
  children?: ReactNode;
}

const BlockView: FC<PropBlockTitle> = ({ blockTitle, children }) => {
  return (
    <>
      <div className="block__container">
        <div className="block__title">
          <p>{blockTitle}</p>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default BlockView;
