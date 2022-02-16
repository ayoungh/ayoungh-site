import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({children, className}: Props) => {

    return (
      <div className={`grid grid-rows-1 grid-cols-12 border border-red-400 ${className}`}>
        {children}
      </div>
    );

};

export default Container; 