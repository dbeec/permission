import './title-views.css'

import React from "react";

interface PropTitle {
  title: string;
}

const Title: React.FC<PropTitle> = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
