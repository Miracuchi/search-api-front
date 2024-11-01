import { useLocation } from "react-router-dom";
import SearchResultCard from "../components/ResultsCard";
import { SearchResultsProps } from "../types/types";
import SearchApp from "./SearchPage";

export default function Results() {
  const location = useLocation();
  const { results }: SearchResultsProps = location.state || { results: null };
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SearchApp />
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold text-blue-500">
          Search Results ({results.total})
        </h2>
        <span className="text-sm text-slate-500">
          Found in {results.time}ms
        </span>
      </div>

      <div className="space-y-4">
        {results.results.map((result) => (
          <SearchResultCard key={result.id} results={result} />
        ))}
      </div>
    </div>
  );
}
