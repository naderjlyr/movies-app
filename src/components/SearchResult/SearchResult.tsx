import { FC, ReactNode } from "react";

export interface ISearchResult {
  searchedPhrase: string | null;
  children: ReactNode | string;
}

const SearchResult: FC<ISearchResult> = ({ children, searchedPhrase }) => {
  return (
    <div>
      <div className="header__section mb-2">
        <h2>Search results for "{searchedPhrase}"</h2>
      </div>
      {children}
    </div>
  );
};
export default SearchResult;
