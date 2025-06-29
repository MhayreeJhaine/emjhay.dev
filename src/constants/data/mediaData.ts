export type MediaItem = {
  id: string;
  type: "image" | "video";
  media: string[];
  description?: string;
  numOfComments?: number;
  githubLink?: string;
  liveLink?: string;
  pinned?: boolean;
  hashtags?: string;
  createdAt?: string;
};

export const postItems: MediaItem[] = [
  // {
  //   id: "p1",
  //   type: "image",
  //   media: ["./images/fessPortfolio.jpg", "./images/finalPortfolio.jpg"],
  //   numOfComments: 12,
  //   description:
  //     "This is a really long caption meant to test the read more and show less toggle in the post card view. Let's see how it wraps in smaller screens.",
  //   githubLink: "https://github.com/mhayreejhaine/react-portfolio",
  //   liveLink: "https://github.com/mhayreejhaine",
  //   hashtags:
  //     "#typescript, #frontend, #reactjs, #coding, #webdesign, #tech, #technology, #webdeveloper, #webdevcommunity",
  //   pinned: true,
  //   createdAt: "2025-06-28T18:16:00",
  // },
  // {
  //   id: "p2",
  //   type: "image",
  //   media: ["./images/testimonial.jpg"],
  //   description: "Coffee and code 💻☕ lorem ipsum lorem ipsum lorm ipsum",
  //   numOfComments: 5,
  //   githubLink: "https://github.com/mhayreejhaine/react-portfolio",
  //   // createdAt: "2025-06-28T17:43:00Z",
  //   createdAt: "2024-06-01T12:00:00",
  // },
  // {
];

export const taggedItems: MediaItem[] = [];

export const reelItems: MediaItem[] = [
  {
    id: "r1",
    type: "video",
    media: ["./videos/3Dee.mp4"],
    description: "First attempt at 3d animation 🎬",
    numOfComments: 3,
    githubLink: "https://github.com/mhayreejhaine/react-portfolio",
  },
];
