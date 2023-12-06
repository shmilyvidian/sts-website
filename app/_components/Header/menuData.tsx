import { Locale } from "@/app/types";
import { Menu } from "@/types/menu";



const getMenuData = (lang: Locale) => {
  const menuData: Menu[] = [
    {
      id: 1,
      title: "nav.home",
      path: `/${lang}/`,
      newTab: false,
    },
    {
      id: 2,
      title: "nav.course",
      path: `/${lang}/course`,
      newTab: false,
    },
    {
      id: 3,
      title: "nav.studio",
      path: `/${lang}/studio`,
      newTab: false,
    },
    {
      id: 4,
      title: "nav.blog",
      path: `/${lang}/blog`,
      newTab: false,
    },
    {
      id: 5,
      title: "nav.about",
      path: `/${lang}/about`,
      newTab: false,
    },
    {
      id: 6,
      title: "nav.contact",
      path: `/${lang}/contact`,
      newTab: false,
    },
    // {
    //   id: 4,
    //   title: "Pages",
    //   newTab: false,
    //   submenu: [
    //     {
    //       id: 41,
    //       title: "About Page",
    //       path: "/about",
    //       newTab: false,
    //     },
    //     {
    //       id: 42,
    //       title: "Contact Page",
    //       path: "/contact",
    //       newTab: false,
    //     },
    //     {
    //       id: 43,
    //       title: "Blog Grid Page",
    //       path: "/blog",
    //       newTab: false,
    //     },
    //     {
    //       id: 44,
    //       title: "Blog Sidebar Page",
    //       path: "/blog-sidebar",
    //       newTab: false,
    //     },
    //     {
    //       id: 45,
    //       title: "Blog Details Page",
    //       path: "/blog-details",
    //       newTab: false,
    //     },
    //     {
    //       id: 46,
    //       title: "Sign In Page",
    //       path: "/signin",
    //       newTab: false,
    //     },
    //     {
    //       id: 47,
    //       title: "Sign Up Page",
    //       path: "/signup",
    //       newTab: false,
    //     },
    //     {
    //       id: 48,
    //       title: "Error Page",
    //       path: "/error",
    //       newTab: false,
    //     },
    //   ],
    // },
  ];
  return menuData
}
export default getMenuData;
