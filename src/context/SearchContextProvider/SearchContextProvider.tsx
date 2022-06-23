import React, { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


export const SearchContext = createContext<{ term: string, setTerm: Dispatch<SetStateAction<string>> }>({
  term: '',
  setTerm: () => {
  },
});

interface Props {
  children: React.ReactNode;
}

export const SearchContextProvider = ({ children }: Props) => {

  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [term, setTerm] = useState(q || '');

  return (
    <SearchContext.Provider value={ { term, setTerm } }>
      { children }
    </SearchContext.Provider>
  );
};