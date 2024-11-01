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
  results: {
    time: number;
    total: number;
    results: SearchResult[];
  };
}
