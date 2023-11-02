import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchContent from "@/components/SearchContent";
import SearchInput from "@/components/SearchInput";
import React from "react";

interface SearchProps {
  searchParam: {
    title: string;
  };
}
export const revalidate = 0;

async function Search({ searchParam }: SearchProps) {
  const songs = await getSongsByTitle(searchParam?.title);

  return (
    <div className="bg-neutral-900 rounded0lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            <SearchInput />
          </h1>
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
}

export default Search;
