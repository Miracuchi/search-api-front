import { ExternalLink, FileType2, Globe } from "lucide-react";
import { SearchResultCardProps } from "../types/types";
import { Card, CardContent } from "./Card";

export default function SearchResultCard({ results }: SearchResultCardProps) {
  const createMarkup = (html: string) => ({ __html: html });

  return (
    <Card className="hover:bg-slate-100 transition-colors">
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-medium text-blue-600 flex items-center gap-2">
              <FileType2 className="h-4 w-4" />
              <div dangerouslySetInnerHTML={createMarkup(results.title)} />
            </h3>
            <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
              {results.documentType}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Globe className="h-4 w-4" />
            <a
              href={results.location.raw}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 flex items-center gap-1"
            >
              {results.domainName}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Highlight/Preview */}
          <div
            className="text-sm text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={createMarkup(results.highlight)}
          />

          {/* Additional Metadata */}
          <div className="flex gap-2 pt-2">
            <span className="text-xs text-slate-500">
              Type: {results.a2type}
            </span>
            <span className="text-xs text-slate-500">
              ID: {results.id.slice(0, 8)}...
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
