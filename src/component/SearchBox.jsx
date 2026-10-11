function SearchBox({ searchfield, searchChange }){
    return(
        <div className="pa2" >
            <input className="pa3 bg-lightest-blue" type="search" placeholder="search robots"
            value={searchfield} onChange= {searchChange} />
            
        </div>
    )
}

export default SearchBox;
