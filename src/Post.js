import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {

    constructor() {
        super();

        this.state= {

            postData: " ",
            postResult: " "
        }
    }

    onClickHandler=(event)=>{

        axios.post('http://ss.rabbil.com/test.php', this.state.postData)
            .then((response)=>{

                this.setState({postResult:response.data})
                alert(this.state.postData)

            })
            .catch((error)=>{

                alert("Something went wrong")
            })

    }

    onChangeHandler=(event)=>{

        var mydata = event.target.value;
        this.setState({postData:mydata})

    }


    render() {
        return (
            <div>
                <p>{this.state.postData}</p>

                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>Send</button>

            </div>
        );
    }
}

export default Post;