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
    <div className='w-full flex justify-center gap-10 py-5 px-8 border-b border-white/8'>
      {links.map((link) => (
        <Link href={link.href}>
          <p
            className={clsx('text-sm font-medium text-gray-400', {
              'text-white': pathname === link.href,
            })}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
