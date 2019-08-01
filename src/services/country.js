import axios from 'axios';

export const getCountries = () => {
    return axios.get('http://api.geonames.org/countryInfoJSON?username=dperic')
    .then(response => {
        return response.data.geonames.map(c => {
            const {countryName, countryCode} = c;
            return {countryName, countryCode};
        })
    })
}