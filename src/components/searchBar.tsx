import { SearchLogo } from "../assets/svg";

export default function SearchBar(props: { search: any; setSearch: any }) {
  let { search, setSearch } = props;

  return (
    <>
      <div className="flex font-medium justify-center border border-gray-400 w-2/3 rounded-md h-11 bg-transparent  fill-slate-500">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="bg-transparent w-full p-3  focus:outline-none "
          type="text"
          value={search}
          placeholder="search for restaurants"
        />
        <span className="pt-2">
          <SearchLogo />
        </span>
      </div>
    </>
  );
}
