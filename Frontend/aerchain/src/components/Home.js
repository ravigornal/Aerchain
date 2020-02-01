import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level3 : [],
        }
    }

    componentDidMount = () => {
        let name = this.props.match.params.id
        Axios.get(`http://127.0.0.1:5000/level3/${name}`)
        .then(res => {
            console.log(res)
            this.setState({
                level3 : res.data
            })
        })
    }

    render() {
        var id = this.props.match.params.id
        return(
            <div className="mb-5">
                <Link to={`/addProduct/${id}`}><button className='btn btn-success mt-3' >Add Products</button></Link>
                <div className="row">
                {this.state.level3.map(e => {
                    return(
                        <div className="row">
                            <div className=" col-4"></div>
                            <div key={e._id.$oid} className='mt-5 col-5'>
                                <div class="card" style={{width: "18rem",backgroundColor:" #eff5f5"}}>
                                    <div class="card-body">
                                        <h4 class="card-title">{e.name}</h4>
                                        <h6 class="card-subtitle mb-2 text-muted">By : {e.manufacturer}</h6>
                                        <h5>Price : ₹{e.price}</h5>
                                        <hr></hr>
                                        <div style={{textAlign:"left"}}>
                                            <h5><b>Properties</b></h5>
                                            <p class="card-text mb-1"> <b>Color :</b> {e.color}</p>
                                            <p class="card-text"><b>Dimension :</b> {e.dimension}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Home