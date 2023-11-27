export interface IPeople {
  id: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface PeoplesState {
  total: number;
  totalPages: number;
  currentPage: number;
  nextPageUrl: null | string;
  previousPageUrl: null | string;
  allPeoples: IPeople[];
  maleCounter: number;
  femaleCounter: number;
  otherCounter: number;
  loading: boolean;
}

export type PeoplesListResponse = {
  count: string;
  next: string;
  previous: string;
  results: itemType[];
};

//Props

export type PeoplesListProps = {
  data: PeoplesListResponse;
  currentPage: string;
  handleNext: () => void;
  handlePrev: () => void;
  maleCounter: number;
  femaleCounter: number;
  otherCounter: number;
};

export type DetailsItemProps = {
  label: string;
  value: string;
};

export type DetailsProps = {
  details: itemType;
};

export type PaginatorProps = {
  handleNext: () => void;
  handlePrev: () => void;
  count: string;
  currentPage: string;
};
