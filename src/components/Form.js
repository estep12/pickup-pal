import React from 'react';


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weather}>
                <input className="input-box" type="text" name="city" placeholder="City" />
                <input className="input-box" type="text" name="country" placeholder="Country" />
                <button className="btn-secondary">Get Weather Conditions</button>
            </form>
        )
    }
};

export default Form;