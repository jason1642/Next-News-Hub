import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            aggregateHours: '1',
            location: 'NewYorkCity,NY,USA',
            contentType: 'json',
            unitGroup: 'us',
            shortColumnNames: 'false'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_VISUALCROSSINGWEATHER_API_KEY,
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
        
    }
    )



export const getVisualCrossingWeatherApiData = async(location:string = 'NewYorkCity,NY,USA') =>
    await api.get(`?${location}`).then(res=>res,err=>err)