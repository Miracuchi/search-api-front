import { useEffect, useState } from "react";
import Button from "../components/Button";
import SearchResultCard from "../components/ResultsCard";
import { SearchResultsProps } from "../types/types";

export default function Results({
  results: initialResults,
  searchText,
  accessToken,
  setResults,
}: {
  results: SearchResultsProps;
  searchText: string;
  accessToken: string;
  setResults: React.Dispatch<React.SetStateAction<SearchResultsProps | null>>;
}) {
  const [page, setPage] = useState(initialResults?.page || 1);
  const [loading, setLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(initialResults?.maxPage || 1);
  const adeleanApiUrl = import.meta.env.VITE_PUBLIC_API_URL;
  const searchEngineId = import.meta.env.VITE_PUBLIC_SEARCH_ENGINE_ID;

  useEffect(() => {
    setMaxPage(initialResults.maxPage);
    setPage(initialResults.page);
  }, [initialResults]);

  const loadMoreResults = async () => {
    if (page >= maxPage) return;
    try {
      const response = await fetch(adeleanApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({
          from: page * 10,
          size: 10,
          text: searchText,
          searchEngineId: searchEngineId,
        }),
      });

      const newResultsData = await response.json();
      console.log("NEW", newResultsData);

      if (Array.isArray(newResultsData.results)) {
        setResults((prevResults) => ({
          results: [...(prevResults?.results || []), ...newResultsData.results],
          page: prevResults?.page ? prevResults.page + 1 : 1,
          maxPage: newResultsData.maxPage,
          time: newResultsData.time || 0,
          total: newResultsData.total || 0,
        }));
      } else {
        console.error(
          "Format de réponse inattendu pour `results` :",
          newResultsData
        );
      }
      setPage(page + 1);
      setMaxPage(newResultsData.maxPage);
    } catch {
      console.error("Pas de résultats supplémentaires");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold text-blue-500">
          Search Results ({initialResults.total})
        </h2>
        <span className="text-sm text-slate-500">
          Found in {initialResults.time}ms
        </span>
      </div>

      <div className="space-y-4">
        {initialResults.results.map((result) => (
          <SearchResultCard key={result.id} results={result} />
        ))}
      </div>

      {page < maxPage && (
        <div className="flex justify-center">
          <Button type="button" onClick={loadMoreResults} disabled={loading}>
            More
          </Button>
        </div>
      )}
    </div>
  );
}
