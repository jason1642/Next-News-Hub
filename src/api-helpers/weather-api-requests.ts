import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            aggregateHours: '24',
            location: 'NewYorkCity,NY,USA',
            contentType: 'json',
            unitGroup: 'us',
            shortColumnNames: 'false'
        }
        
    }
    )



export const getVisualCrossingWeatherApiData = async(location:string = 'NewYorkCity,NY,USA') =>
    await api.get(`?${location}`).then(res=>res,err=>err)