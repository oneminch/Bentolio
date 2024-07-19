export const SITE_TITLE = "Dawit";
export const SITE_DESCRIPTION = "Full-Stack Problem-Solver";

export interface SocialLink {
  socialMediaIcon: string;
  socialMediaBgColor: string;
  socialMediaTextColor: string;
  socialMediaName: string;
  profileUrl: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    socialMediaName: "GitHub",
    socialMediaIcon: "simple-icons:github",
    profileUrl: "https://github.com/oneminch",
    socialMediaBgColor: "!bg-white",
    socialMediaTextColor: "!text-black"
  },
  {
    socialMediaName: "X",
    socialMediaIcon: "simple-icons:x",
    profileUrl: "https://x.com/oneminch",
    socialMediaBgColor: "!bg-black",
    socialMediaTextColor: "!text-white"
  },
  {
    socialMediaName: "LinkedIn",
    socialMediaIcon: "simple-icons:linkedin",
    profileUrl: "https://linkedin.com/in/oneminch",
    socialMediaBgColor: "!bg-blue-600",
    socialMediaTextColor: "!text-white"
  },
  {
    socialMediaName: "Unsplash",
    socialMediaIcon: "simple-icons:unsplash",
    profileUrl: "https://unsplash.com/@oneminch",
    socialMediaBgColor: "!bg-white",
    socialMediaTextColor: "!text-black"
  }
];
