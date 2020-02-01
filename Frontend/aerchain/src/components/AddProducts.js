import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level3 : [],
            name : '',
            color : '',
            price : '',
            manufacturer : '',
            dimension : ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let name = this.props.match.params.id
        Axios.post(`http://127.0.0.1:5000/writelevel3/${name}` , {
            name : this.state.name,
            color : this.state.color,
            price : this.state.price,
            manufacturer : this.state.manufacturer,
            dimension : this.state.dimension,
            parent : name
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
                <input name='name' placeholder="Product Name" value={this.state.name} onChange={this.handleChange} className='mt-3' /><br />
                <input name='color' placeholder="Product colour" value={this.state.color} onChange={this.handleChange} className='mt-3' /><br />
                <input name='price' placeholder="Product Price" value={this.state.price} onChange={this.handleChange} className='mt-3' /><br />
                <input name='manufacturer' placeholder="Product Manufacturer" value={this.state.manufacturer} onChange={this.handleChange} className='mt-3' /><br />
                <input name='dimension' placeholder="Product Dimension" value={this.state.dimension} onChange={this.handleChange} className='mt-3' /><br />
                <button className='btn btn-success mt-3' onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default AddProducts