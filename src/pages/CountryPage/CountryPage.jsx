import React, { Component } from 'react';
import { getAllCountries } from '../../services/countries';
import { Link } from 'react-router-dom';

class CountryPage extends Component {
    state = {
        countries: getAllCountries()
    }

    render() {
        return (
            <>
                <h4>Countries</h4>
                {this.state.countries.map((country) =>
                    <div key={country.name}>
                        <Link
                            to={{
                            pathname: `/details/${country.id}`,
                            country: {country}
                            }}
                        >{country.name}</Link><br></br>
                    </div> 
                )}
            </>
        )
    }
}

export default CountryPage;