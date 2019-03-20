import React from 'react';


class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.country && this.props.city && <p className="weather">Location: 
                   <span className="weather-value"> {this.props.city}, {this.props.country}</span>
                </p>
                }

                {this.props.temperature && <p className="weather">Temperature: 
                <span className="weather-value">{this.props.temperature}</span>
                </p>
                }

                {this.props.humidity && <p className="weather">Humidity: 
                    <span className="weather-value">{this.props.humidity}</span>
                    </p>
                }
                
                {this.props.description && <p className="weather">Conditions:  
                    <span className="weather-value"> {this.props.description}</span>
                    </p>
                }
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;