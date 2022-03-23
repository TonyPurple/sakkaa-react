import React, { Component } from 'react'
import SearchForm from '../../components/SearchBar/SearchBar'
import axios from 'axios'

class PlayerSearch extends Component {

    render() { 
        return ( 
            <>
                <h3>Player Data should appear here</h3>
                <SearchForm />
            </>
         );
    }
}

export default PlayerSearch;