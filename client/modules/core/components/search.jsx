import React from 'react';

const closeSearch = () => {
    $("#searchContain").collapse("hide");
    Session.set('searchResults', null);
}

const handleSearch = (users, feed) => {
	var lastSearchTime = Session.get('lastSearchTime');

	//if (lastSearchTime) { // check for session variable

	//	if (lastSearchTime - new Date().getTime() > 200) { // enforce 200ms delay for reactive query
			Session.set('lastSearchTime', lastSearchTime);

			setSearchResults(users, feed);
	//	}

	//} else { // set session variable and continue search

	//	lastSearchTime = new Date().getTime();
	//	Session.set('lastSearchTime', lastSearchTime);

	//	setSearchResults(users, feed);
	//}
	
}

const setSearchResults = (users, feed) => {
	var searchValue = $('input#searchInput').val();
	var results = [];

	results.push(
		{_id: "12346", resultType: "user", result: "Alec Wantoch"}
	);

	Session.set('searchResults', results);
}

const renderSearchResults = (searchResults) => {
	if (searchResults) {
		return searchResults.map((o)=>{
			return (
				<div key={o._id}>{o.result}</div>
			)
		});
	}
}

const Search = ({searchResults, users, feed}) => (
	<div className="collapse" id="searchContain">
		<div id="searchBar" className="bg-inverse p-a-1">
			<input type="text" className="form-control" id="searchInput" onChange={handleSearch.bind(this, users, feed)} onBlur={closeSearch.bind(this)} placeholder="Search"/>
		</div>

		{renderSearchResults(searchResults)}

    </div>
);

export default Search;