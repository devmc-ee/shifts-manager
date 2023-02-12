type NavMenuItemType = {
  id: string;
  icon: string;
  url?: string;
};

export const NAV_MENU: { [item: string]: NavMenuItemType } = {
  home: {
    id: 'home',
    icon: 'HomeIcon',
    url: '/',
  },
};
