import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

class Landingpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level1 : [],
            name : ''
        }
    }

    componentDidMount = () => {
        Axios.get(`http://127.0.0.1:5000/level1`)
        .then(res => {
            console.log(res.data)
            this.setState({
                level1 : res.data
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        Axios.post(`http://127.0.0.1:5000/writelevel1` , {
            name : this.state.name
        })
        .then(res => {
            console.log(res)
            this.setState({
                name : ''
            })
        })
    }

    render() {
        return (
            <div className='mt-5'>
                <h3>Categories</h3>
                {this.state.level1.map(e => {
                    return(
                        <div key={e._id.$oid} className='mt-3'>
                            <div className='mt-3 mb-3'>
                                <Link to={`/level2/${e.name}`} className='glyphicon glyphicon-folder-close btn btn-warning'><i className="fa fa-folder fa-lg m-2" aria-hidden="true"></i>{e.name}</Link>
                            </div>
                        </div>
                    )
                })}
                <input name='name' value={this.state.name} onChange={this.handleChange} className='mt-3' /><br />
                <button className='btn btn-success mt-3' onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default Landingpage;