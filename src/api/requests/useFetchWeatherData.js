//  External Modules  //
import axios from 'axios';
import React from 'react';

export default function useFetchWeatherData (
    cityName
) {
    const [weather, setWeather] = React.useState({
        data: null,
        status: 'loading'
    });
    console.log('Retrieving weather for', cityName);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Annapolis&appid=cb73b84f0c014fb6b0b6e4efec52b68b');
                setWeather({
                    data: response.data,
                    status: response.status,
                    statusText: response.statusText
                });
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, []);

    return weather;
};
