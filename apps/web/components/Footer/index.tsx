import React from 'react';
import Icon from '@components/SocialIcons';
import MusicCard from '@components/MusicCard';
import HealthCard from '@components/HealthCard';
import classnames from 'classnames';

const Links: {
  name: string;
  href: string;
  bgColor: string;
  iconColor: string;
}[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ayoungh/',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
  {
    name: 'Codepen',
    href: 'https://codepen.io/ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
  {
    name: 'Github',
    href: 'https://github.com/ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayoungh/',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },

  {
    name: 'Medium',
    href: 'https://medium.com/@ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },

  {
    name: 'Pinterest',
    href: 'https://www.pinterest.co.uk/ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },

  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UC3HauKwKSTTXzw-XLH9rMEQ',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/user/ayoungh',
    bgColor: 'bg-pink-600',
    iconColor: '#de3a3a',
  },
];

export const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <MusicCard />
        <HealthCard />
      </div>
      <ul role="list" className="my-4 grid grid-cols-1  md:grid-cols-2">
        {Links.map((link) => (
          <a href={link.href} target="_blank" className="">
            <li
              key={link.name}
              className="col-span-1 flex rounded-md shadow-sm hover:text-gray-600 hover:bg-gray-50"
            >
              <div
                className={classnames(
                  // link.bgColor,
                  'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                )}
              >
                <Icon fgColor="#de3a3a" networkKey={link.name.toLowerCase()} />
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <span className="font-medium text-gray-900">{link.name}</span>
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>

      <small className="p-2">
        {' '}
        &copy; Copyright. Anthony Young - {new Date().getFullYear()} -
        ayoungh.co.uk
      </small>
    </div>
  );
};
