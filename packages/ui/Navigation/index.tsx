import Link from "next/link";
import React from "react";

interface Link {
  to: string;
  name: string;
}

type Props = {
  links: Link[];
};

export const Navigation = ({ links }: Props) => {
  return (
    <nav aria-label="Tabs">
      {links &&
        React.Children.toArray(
          links.map((link) => (
            <Link href={link.to}>
              <a className="whitespace-nowrap py-4 px-1">{Link.name}</a>
            </Link>
          ))
        )}
    </nav>
  );
};

export default Navigation;
