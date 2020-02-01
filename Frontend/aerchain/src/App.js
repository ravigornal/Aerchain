import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Level2 from './components/Level2'
import Level3 from './components/Level3'
import AddProducts from './components/AddProducts'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
                <Router>
                    <Navbar />
                    <div className='container text-center'>
                        <Route path='/categories' exact component={Landingpage} />
                        <Route path='/level2/:id' render={(props) => <Level2 {...props}/>} />
                        <Route path='/level3/:id' render={(props) => <Level3 {...props}/>} />
                        <Route path='/addproduct/:id' render={(props) => <AddProducts {...props}/>} />
                    </div>

                </Router>
        )
    }
}

export default App