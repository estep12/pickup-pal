import React from 'react';


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weather}>
                <input className="input-box" type="text" name="city" placeholder="City" />
                <input className="input-box" type="text" name="country" placeholder="Country" />
                <button className="btn-secondary">Get Weather</button>
            </form>
        )
    }
};

export default Form;