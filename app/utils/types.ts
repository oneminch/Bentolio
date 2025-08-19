export type SocialMediaKey = "X" | "LinkedIn" | "Bluesky" | "GitHub";

export interface SocialMediaValue {
  socialMediaIcon: string;
  socialMediaBgColor: string;
  socialMediaBorderColor: string;
  socialMediaTextColor: string;
  profileUrl: string;
}

export interface Portfolio {
  name: string;
  subtitle: string;
  avatar?: string;
  customOgImage?: string;
  company?: string;
  socials: Partial<Record<SocialMediaKey, SocialMediaValue>>;
  bio: {
    html?: string;
    text: string;
  };
  cta: {
    contact?: string;
    location?: string;
    link?: { url: string; label: string };
  };
}

export interface Style {
  roundedItems: boolean;
}

declare module "nuxt/schema" {
  interface AppConfigInput {
    portfolio: Portfolio;
    style?: Style;
  }

  interface AppConfig {
    portfolio: Portfolio;
    style?: Style;
  }
}
