import React, {Component} from 'react'
import NumericInput from 'react-numeric-input';

class Values extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    handleSubmit = (event) => {
        event.preventDefault()
    }
    handleInputChange = () => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>hang<NumericInput min={0} max={100} value={10} format={secFormat}/></p>
                    <p>rest<NumericInput min={0} max={100} value={30} format={secFormat}/></p>
                    <p>reps<NumericInput min={0} max={100} value={4} format={repFormat}/></p>
                    <br></br>
                    <p>rest<NumericInput min={0} max={300} value={120} format={secFormat}/></p>
                    <p>reps<NumericInput min={0} max={100} value={4} format={repFormat}/></p>
                    <p>
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        )

        function secFormat(num) {
            return num + 's';
        }

        function repFormat(num) {
            return num + ' reps'
        }
    }


}

export default Values