export interface Feature {
  title: string;
  description: string;
  image: string;
  backgroundImage: string;
  id: string | number;
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: "Search Data",
    description:
      "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
    image: "/assets/feature-1.png",
    backgroundImage: "/assets/feature-bg-1.png",
  },
  {
    id: 2,
    title: "24 Hours Access",
    description:
      "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
    image: "/assets/feature-2.png",
    backgroundImage: "/assets/feature-bg-2.png",
  },
  {
    id: 3,
    title: "Print Out",
    description:
      "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    image: "/assets/feature-3.png",
    backgroundImage: "/assets/feature-bg-3.png",
  },
  {
    id: 4,
    title: "Security Code",
    description:
      "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.",
    image: "/assets/feature-4.png",
    backgroundImage: "/assets/feature-bg-4.png",
  },
];
