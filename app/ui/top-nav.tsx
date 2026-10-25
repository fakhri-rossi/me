'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <div className='w-full flex justify-center gap-10 py-5 px-8 border-b border-gray-200 dark:border-white/10'>
      {links.map((link, i) => (
        <Link href={link.href} key={i}>
          <p
            className={clsx(
              'text-sm font-medium transition-colors',
              pathname === link.href
                ? 'text-black dark:text-white'
                : 'text-gray-400 hover:text-black dark:text-white/70 dark:hover:text-white',
            )}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
