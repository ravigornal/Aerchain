import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Level2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level2 : [],
            name : ''
        }
    }

    componentDidMount = () => {
        let name = this.props.match.params.id
        Axios.get(`http://127.0.0.1:5000/level2/${name}`)
        .then(res => {
            console.log(res)
            this.setState({
                level2 : res.data
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
        let name = this.props.match.params.id
        Axios.post(`http://127.0.0.1:5000/writelevel2/${name}` , {
            brand_name : this.state.name
        })
        .then(res => {
            console.log(res)
            this.setState({
                name : ''
            })
        })
    }

    render() {
        return(
            <div>
                <p>Level 2</p>
                <h5>Children of : {this.props.match.params.id}</h5>
                {this.state.level2.map(e => {
                    return(
                        <div key={e._id.$oid} className='mt-5'>
                            
                            <div className='mt-3'>
                                <div className='mt-3 mb-3'>
                                    <Link to={`/level3/${e.brand_name}`} className='glyphicon glyphicon-folder-close btn btn-warning'><i className="fa fa-folder fa-lg m-2" aria-hidden="true"></i> {e.brand_name}</Link>
                                </div>
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

export default Level2