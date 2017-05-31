import React from 'react';

const closeSearch = () => {
    $("#searchContain").collapse("hide");
    Session.set('searchResults', null);
};

const handleSearch = (users) => {
	let lastSearchTime = Session.get('lastSearchTime');

	//if (lastSearchTime) { // check for session variable

	//	if (lastSearchTime - new Date().getTime() > 200) { // enforce 200ms delay for reactive query
			Session.set('lastSearchTime', lastSearchTime);

			setSearchResults(users);
	//	}

	//} else { // set session variable and continue search

	//	lastSearchTime = new Date().getTime();
	//	Session.set('lastSearchTime', lastSearchTime);

	//	setSearchResults(users, feed);
	//}
	
};

const setSearchResults = (users) => {
	let searchValue = $('input#searchInput').val();
	let results = [];

	results.push(
		{_id: "12346", resultType: "user", result: "Alec Wantoch"},
		{_id: "12344", resultType: "user", result: "Zachary Pelkey"},
		{_id: "12345", resultType: "user", result: "Trevor Jacoby"}
	);

	Session.set('searchResults', results);
};

const renderSearchResults = (users) => {
	if (users) {
		return users.map((o)=>{
			return (
				<a key={o._id} href={"/profile/" + o.username}><div className="search-item" key={o._id}>{o.firstName + " " + o.lastName}</div></a>
			)
		});
	}
};

class Search extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {searchResults, users} = this.props;
        return (
			<div className="collapse" id="searchContain">
				<div id="searchBar" className="bg-inverse p-a-1">
					<input type="text" className="form-control" id="searchInput" onChange={handleSearch.bind(this, users)} onBlur={closeSearch} placeholder="Search"/>
				</div>
				<div className="searchResults">
                    {renderSearchResults(users)}
				</div>
			</div>
        )
    }
}

export default Search;