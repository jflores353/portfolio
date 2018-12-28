import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid classname="landing-grid-top">
                    <Cell col={12}></Cell>
                    <img src="../images/myAvatar.png" alt="avatar" className="avatar-img"/>
                </Grid>
                
                <Grid className="banner-text">
                    <Cell col={12}></Cell>
                    <h1>Full stack web developer</h1>
                    
                    <hr/>
                        <p>HTML5/CSS3 &nbsp; | &nbsp; JavaScript &nbsp; | &nbsp; React.js</p>
                        <br/>
                        <p>*** Click on my Projects Link to submit a question about my portfolio ***</p>
                </Grid>
            </div>
        );
    }
}

export default Landing;