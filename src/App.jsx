import React from "react";

import Calendar from './Components/Calendar';

class App extends React.Component {
    state = {
        date: null
    };

    handleDateChange = date => this.setState({ date })

    render() {
        const  { date } = this.state

        return (
            <div>
                {date && <p>Обрана дата: {date.toLocaleDateString()}</p>}

                <Calendar
                    onChange={this.handleDateChange}
                />
            </div>
        );
    }
}

export default App;
