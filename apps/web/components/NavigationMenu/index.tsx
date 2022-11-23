import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { useRouter } from 'next/router';
// import { CaretDownIcon } from '@radix-ui/react-icons';

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

const NavigationMenuDemo = () => {
    const router = useRouter();
  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex flex-row rounded-lg p-2 py-5 space-x-2">
        {false && <>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={classNames(
              'px-3 py-2 text-sm rounded-md hover:bg-gray-100',
              'text-sm font-medium',
              'text-gray-700',
              'focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'
            )}
          >
            About
            {/* Learn <CaretDownIcon className="CaretDown" aria-hidden /> */}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={classNames(
              'px-3 py-2 text-sm rounded-md hover:bg-gray-100',
              'text-sm font-medium',
              'text-gray-700',
              'focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'
            )}
          >
            Overview
            {/* Overview <CaretDownIcon className="CaretDown" aria-hidden /> */}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
              >
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item></>}

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={classNames(
                'px-3 py-2 text-sm rounded-md hover:bg-gray-100',
                {'bg-gray-100': router.asPath === '/about'},
                'text-sm font-medium',
                'text-gray-700',
                'focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'
              )}
            href="/about"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={classNames(
                'px-3 py-2 text-sm rounded-md hover:bg-gray-100',
                {'bg-gray-100': router.asPath === '/blog'},
                'text-sm font-medium',
                'text-gray-700',
                'focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'
              )}
            href="/blog"
          >
            Blog
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;
