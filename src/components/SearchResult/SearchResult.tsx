import { FC, ReactNode } from "react";

interface ISearchResult {
  children: ReactNode;
}

const SearchResult: FC<ISearchResult> = ({ children }) => {
  return <div>{children}</div>;
};
export default SearchResult;
