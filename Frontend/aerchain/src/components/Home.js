import React from 'react'
import Axios from 'axios';
// import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all : [],
            brands : []
        }
    }

    componentDidMount = () => {
        // let name = this.props.match.params.id
        Axios.get(`http://127.0.0.1:5000/all`)
        .then(res => {
            console.log(res)
            this.setState({
                all : res.data
            })
        })
        // .catch(console.log(error))

        Axios.get(``)
        
    }

    render() {
        if(this.state.all.includes("_id")){
            console.log(true)
        }
        return(
            <React.Fragment>
                <div className=" m-2 row">
                    <div className="col-1"></div>
                    <div className="col-10">
                    <select class="custom-select col-4 m-1" id="inlineFormCustomSelect" onChange={this.sortbyPopulation}>
                        <option selected>Filter By Category</option>
                        <option value="l2h">Low to High</option>
                    </select>
                    <select class="custom-select col-4 m-1" id="inlineFormCustomSelect" onChange={this.sortbyPopulation}>
                        <option selected>Filter By Brand</option>
                        <option value="l2h">Low to High</option>
                    </select>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="row">
                    {this.state.all.map((e,key) => {
                        return(
                            <div className="row" key={key}>
                                <div className=" col-4"></div>
                                <div  className='mt-5 col-5'>
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
            </React.Fragment>
        )
    }
}

export default Home