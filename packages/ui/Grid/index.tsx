
interface GridProps {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className }:GridProps) => {
  return (
    <div className={`h-screen overflow-hidden grid grid-rows-6 grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 border ${className}`}>
      {children}
    </div>
  );
};

export default Grid;

interface GridColumnProps {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  canvas?: boolean;
}

Grid.column = ({
  children,
  className = '',
  full = false,
  canvas = false,
}: GridColumnProps) => {
  if (full)
    return (
      <div className={`col-span-full border ${className}`}>{children}</div>
    );

  if (canvas) return <div className={`border ${className}`}>{children}</div>;

  return (
    <div className={`flex-grow my-1 p-2 w-full ${className} border`}>
      {children}
    </div>
  );
};
