import React from 'react';

const SearchBar = ({ searchInput, setSearchInput, handleSearch, handleKeyPress, loading }) => {
  return (
    <div className="meal-search">
      <h2 className="title">Mau Masak Apa Hari Ini?</h2>
      <blockquote>
        Everyday i'm gonna make something delicious!.<br />
        <cite>- Chef Juna</cite>
      </blockquote>

      <div className="w-3/4 my-5 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Cari Resep Masakan"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="flex flex-row items-center">
            <button accessKey='' onClick={handleSearch} className="rounded-md btn-block" disabled={loading} >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.76 0-5.207-1.121-7-2.945z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-8 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
