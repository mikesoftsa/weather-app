import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from "./../reducers";


class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city && 
            <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired, /*ptsr para que cree por defecto proptype string requerido*/
    forecastData: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) })

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

/*rccp para crear por defecto con proptypes*/