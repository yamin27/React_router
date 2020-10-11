import React, {Component} from 'react';
import axios from 'axios';

class CountryList extends Component {

    constructor(props) {
        super(props);

        this.state={

            mydata: []

        }
    }


    componentDidMount() {

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response=>{

                console.log(response.data)
                this.setState({mydata: response.data})

            })
            .catch(error=>{

                console.log(error)

            })


    }


    render() {

        const myList= this.state.mydata

       const CountryName= myList.map((myList)=>{

            return <li>{myList.name}</li>

        })

        return (
            <div>
                <ul>{CountryName}</ul>
            </div>
        );
    }
}

export default CountryList;