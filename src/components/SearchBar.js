import React from 'react'

const SearchBar = props => {
    return (
        <div style={styles.contentSearch}>
            <input 
            style={this.inputSearch}
            type="text" 
            placeholder="Search anything..." 
            onChange={props.onChangeSearch}
            
            />
        </div>
    )
}

const styles = {
    inputSearch:{
        width: 500,
        height: 30,
        padding: 20
    },
    contentSearch:{
        backgroundColor: "blue",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}

export default SearchBar;






















