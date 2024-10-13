export const geo_url = process.env.REACT_APP_GEO_URL;
export const geo_options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
    }
};

export const weather_url = process.env.REACT_APP_WEATHER_URL;
export const weather_key = process.env.REACT_APP_WEATHER_KEY;