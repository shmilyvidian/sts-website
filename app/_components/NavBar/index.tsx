'use client';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../Container';
import classNames from 'classnames';
import Dropdown from './dropdown';
import LanguageSwitcher from '../LanguageSwitcher';
import { Locale } from '@/app/i18n/settings';
import useLocaleNames from '@/app/_hooks/useLocaleNames';
import { useTranslations } from 'next-intl';

function NavBar({ lang }: { lang: Locale }) {
  const localeNames = useLocaleNames();
  const t = useTranslations('NavBar');

  const menuitems = [
    {
      title: t('nav.home'),
      path: `/${lang}/`,
      // children: [
      //   { title: 'Action', path: '#' },
      //   { title: 'Another action', path: '#' },
      //   { title: 'Dropdown Submenu', path: '#' },
      // ],
    },
    {
      title: t('nav.studio'),
      path: `/${lang}/studio`,
    },
    {
      title: t('nav.about'),
      path: `/${lang}/about`,
    },
    {
      title: t('nav.blog'),
      path: `/${lang}/blog`,
    },
    {
      title: t('nav.contact'),
      path: `/${lang}/contact`,
    },
  ];

  const [navbar, setNavbar] = useState(false);
  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center my-5">
        <div className="flex w-full lg:w-auto items-center justify-between">
          <Link href={`/${lang}`} className="text-lg">
            <span className="font-bold text-slate-800">STS</span>
            <span className="text-slate-500">Website</span>
          </Link>
          <div className="block lg:hidden">
            <button
              onClick={() => {
                setNavbar(!navbar);
              }}
              className="text-gray-800"
            >
              <svg
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  x-cloak
                  x-show="open"
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
                <path
                  x-show="!open"
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={classNames('hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0', {
            block: navbar,
            hidden: !navbar,
          })}
          x-transition
        >
          <ul className="flex flex-col lg:flex-row lg:gap-3">
            {menuitems.map((item, index) => (
              <>
                {item.children && (
                  <Dropdown
                    title={item.title}
                    children={item.children}
                    lastItem={index === menuitems.length - 1}
                  />
                )}

                {!item.children && (
                  <li>
                    <Link
                      href={item.path}
                      className="flex lg:px-3 py-2 text-gray-600  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    >
                      {item.title}
                    </Link>
                  </li>
                )}
              </>
            ))}
          </ul>
          <div className="lg:hidden flex items-center mt-3 gap-4">
            {/* <Link href="#" style="muted" block size="md">Log in</Link>
        <Link href="#" size="md" block>Sign up</Link> */}
          </div>
        </nav>
        <div>
          <div className="hidden lg:flex items-center gap-4">
            <Link href="#">{t('login')}</Link>
            <Link href="#">{t('signUp')}</Link>
            <LanguageSwitcher localeNames={localeNames} />
          </div>
        </div>
      </header>
    </Container>
  );
}

export default NavBar;
