import React from "react";
import classNames from "classnames";

interface IProps {
  cls?: string;
  children: React.ReactNode;
}
const Container = ({cls, children}:IProps) => {
  return (
    <div className={classNames(["max-w-screen-xl mx-auto px-5", cls])}>
      {children}
    </div>
  );
};

export default Container
