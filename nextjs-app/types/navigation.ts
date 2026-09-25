export interface NavItem {
  _key: string;
  title: string;
  link?: {
    _type: 'link';
    linkType: 'page' | 'car' | 'href' | 'path';
    href: string | null;
    page: {
      _id: string;
      title: string;
      slug: string;
    } | null;
    openInNewTab?: boolean;
    path: string | null;
    icon?: {
      asset: {
        _ref: string;
      };
    };
    text?: string;
  };
  hasSubPages?: boolean | null;
  navigation?: {
    navItems?: NavItem[];
  } | null;
}

export interface HeaderFragment {
  header: {
    navigation: {
      navItems: NavItem[];
    };
    logo: {
      altText: string;
      image: {
        asset: {
          _ref: string;
        };
      };
    };
  };
}

export interface Link {
  _type: 'link';
  linkType: 'page' | 'car' | 'href' | 'path';
  href: string | null;
  page: {
    _ref: string;
    _type: "reference";
    slug: string;
  } | null;
  openInNewTab?: boolean;
  icon?: {
    asset: {
      _ref: string;
    };
  };
  text?: string;
}

export interface FooterLink {
  linkText: string;
  link: Link;
}

export interface SocialLink {
  link: Link & {
    text?: string;
    icon?: {
      asset: {
        _ref: string;
      };
    };
  };
}

export type CustomImage = {
  _type: "customImage";
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    _type: "image";
  };
  altText?: string;
  isImageFullWidth?: boolean;
};



export type LinkItem = {
  _key: string;
  _type: "linkItem";
  linkText: string;
  link: Link;
};

export type LinkList = {
  _type: "linkList";
  title?: string;
  links: LinkItem[];
};

export type FooterFragment = {
  footer : {copyrightText?: string;
  footerLogo?: CustomImage;
  footerLogo2?: CustomImage;
  linkList?: LinkList;
  linkList1?: LinkList;
  linkList2?: LinkList;
  linkList3?: LinkList;
  }
};
