// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Yinph";
export const SITE_TITLE = "Yinph";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Yinph";
export const USER_SITE = "https://yinph.netlify.app/"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "首页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有博客",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术博客",
        href: "/blog/categories/技术Tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活博客",
        href: "/blog/categories/生活Life",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "朋友",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "thanks",
    text: "感谢",
    href: "/thanks",
    svg: "thanks",
    target: "_self",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "mailto:3795199897@qq.com",
    ariaLabel: "Mail",
    title: "Mail",
    svg: "contact",
  },
  {
    href: "https://github.com/Aurora-Yinph",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/1670180008",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "https://www.zhihu.com/people/yinph",
    ariaLabel: "知乎",
    title: "知乎",
    svg: "zhihu",
  },
];