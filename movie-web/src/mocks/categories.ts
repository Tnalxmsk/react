export interface Category {
  id: number;
  name: string;
  categoryType: string;
  url: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "현재 상영중인",
    categoryType: "NowPlaying",
    url: "/now-playing"
  },
  {
    id: 2,
    name: "인기있는",
    categoryType: "Popular",
    url: "/popular"
  },
  {
    id: 3,
    name: "높은 평가를 받은",
    categoryType: "TopRated",
    url: "/top-rated"
  },
  {
    id: 4,
    name: "개봉 예정중인",
    categoryType: "UpComing",
    url: "/up-coming"
  },
];
