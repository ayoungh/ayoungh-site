type ContainerProps = {
    children: React.ReactNode;
}

export default function Container({children}:ContainerProps) {
    return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
  }
  