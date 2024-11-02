export interface SearchResult {
  id: string;
  title: string;
  highlight: string;
  location: {
    raw: string;
    link: string;
    displayChildren: boolean;
  };
  documentType: string;
  domainName: string;
  a2type: string;
}

export interface SearchResultCardProps {
  results: SearchResult;
}

export interface SearchResultsProps {
  time: number;
  total: number;
  page: number;
  size?: number;
  maxPage: number;
  results: SearchResult[];
}
