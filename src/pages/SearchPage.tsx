import { House, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Input from "../components/Input";
import { SearchResultsProps } from "../types/types";
import UseLocalStorage from "../utils/useLocalStorage";
import Results from "./Results";

export default function SearchPage() {
  const { getFromLocalStorage, setToLocalStorage } = UseLocalStorage();
  const [searchText, setSearchText] = useState<string>("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const tokenUrl = import.meta.env.VITE_PUBLIC_TOKEN_URL;
  const adeleanApiUrl = import.meta.env.VITE_PUBLIC_API_URL;
  const searchEngineId = import.meta.env.VITE_PUBLIC_SEARCH_ENGINE_ID;
  const accessTokenKeyLS = "accessToken";
  const [results, setResults] = useState<SearchResultsProps | null>(null);

  useEffect(() => {
    const storedKey = getFromLocalStorage(accessTokenKeyLS);
    if (storedKey) setToken(storedKey);
  }, [getFromLocalStorage]);

  const login = async () => {
    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "candidate@adelean.com",
          password: "candidateforadelean",
        }),
      });
      if (!response.ok) throw new Error("Login Failed");
      const data = await response.json();
      setToken(data.accessToken);
      setToLocalStorage(accessTokenKeyLS, data.accessToken);
      return data.accessToken;
    } catch {
      throw new Error("Authentication Failed");
    }
  };

  const handleSearch = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      let accessToken = "";
      if (token) {
        accessToken = token;
      } else {
        accessToken = await login();
      }

      const response = await fetch(adeleanApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({
          from: 0,
          size: 10,
          text: searchText,
          searchEngineId: searchEngineId,
        }),
      });
      const data = await response.json();
      navigate("/results");
      setResults(data);
    } catch {
      throw new Error("Pas de résultat");
    }
  };

  const backToHomePage = () => {
    navigate("/");
    setResults(null);
    setSearchText("");
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl ">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Document Search</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <form onSubmit={handleSearch} className="flex gap-2 w-11/12">
            <Input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter search query..."
              className="flex-1"
            />
            <Button type="submit">
              <Search />
            </Button>
          </form>

          <Button type="button" onClick={backToHomePage}>
            <House />
          </Button>
        </CardContent>
      </Card>

      {results && (
        <Results
          results={results}
          searchText={searchText}
          accessToken={token}
          setResults={setResults}
        />
      )}
    </div>
  );
}
