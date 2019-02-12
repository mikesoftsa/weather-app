import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from './ForecastItem'
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];
const data = {
    temperature:10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
};

export const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { 
            forecastData: null,
        }
    }

    componentDidMount(){
        //fetch or axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
            }
        );
    }

    renderForecastItemDays(){
        return "Render Items";
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
    }

    renderProgress(){
        return <h3>Cargando Pronostico extendido...</h3>;
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
               <h2 className="forecast-title"> Pronostico Extendido para { city } </h2> 
               {forecastData ? 
                    this.renderForecastItemDays(): 
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;