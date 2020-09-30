/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    {
        name: "Email",
        icon: "MailIcon",
        // i18n: "Email",
        slug:"Home",
    },
    {
        url: '/',
        name: "Главная",
        tagColor: "warning",
        icon: "HomeIcon",
        slug:"Home",
        // i18n: "Home" Как язык добавим нужно откоментить// i18n: "Home",
    },
  {
      url: '/individuals',
      name: "Частным лицам",
      tagColor: "warning",
      icon: "PackageIcon",
      // i18n: "Individuals Как язык добавим нужно откоментить",
      slug:"Individuals",

  },
  {
      url: '/for-business',
    name: "Бизнесу",
    icon: "LayersIcon",
    // i18n: "ForBusiness", Как язык добавим нужно откоментить
      slug:"ForBusiness",
      tagColor: "warning",
  },
  {
      url: '/projects',
    name: "Проекты",
    icon: "Edit3Icon",
    // i18n: "Projects", Как язык добавим нужно откоментить
      slug:"Projects",
      tagColor: "warning",
  },
  {
      url: '/about-us',
    name: "О нас",
    icon: "FileIcon",
    // i18n: "AboutUs", Как язык добавим нужно откоментить
      slug:"AboutUs",
      tagColor: "warning",
  },
  {
      url: '/contacts',
    header: "Контакты",
    icon: "PieChartIcon",
    // i18n: "Contacts", Как язык добавим нужно откоментить
      slug:"Contacts",
      tagColor: "warning",
  },

]

