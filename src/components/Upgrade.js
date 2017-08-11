import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import { Button } from 'react-bootstrap';

import './Style.css';

const style = {
    buttonStyle: {
        margin: 12
    }
}
export default class Upgrade extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Upgrade/Downgrade"                    
                        showMenuIconButton={false}
                    />
                </MuiThemeProvider>
                <div className="body">
                    <MuiThemeProvider>
                        <AppBar
                            title="Upgrade"                    
                            iconElementLeft={<Avatar></Avatar>}
                        />                                                
                    </MuiThemeProvider>   
                    <MuiThemeProvider>
                        <Paper style={{width:'100%', height:'100%'}} zDepth={2} rounded={false}>
                            <div className="content">
                                <div className='button'>                       
                                    <RaisedButton
                                        style={style.buttonStyle}
                                        backgroundColor="#ee6f00"
                                        label="Current package details"                                                               
                                    />
                                    <RaisedButton
                                        style={style.buttonStyle}
                                        primary={true}
                                        label="Choose upgrade/downgrad package"                                                               
                                    />
                                    <RaisedButton
                                        style={style.buttonStyle}
                                        primary={true}
                                        label="Total cost"                                                          
                                    />
                                </div>
                                <div className="list">
                                    <div className="element">
                                        <div className="label">Admins allowed</div>
                                        <div className="value">5</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Amount</div>
                                        <div className="value">$370</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Contracts/units available</div>
                                        <div className="value">70</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Support</div>
                                        <div className="value">Priority email + chat support</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Membership start date</div>
                                        <div className="value">2017-08-08</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Period</div>
                                        <div className="value">Monthly</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Status</div>
                                        <div className="value">Active</div>
                                    </div>
                                    <div className="element">
                                        <div className="label">Cancel Membership</div>
                                        <div className="list-button">
                                            <RaisedButton                                                                                    
                                                backgroundColor="#ee6f00"
                                                label="Cancel"                                                               
                                            />
                                        </div>                                        
                                    </div>                                                                                            
                                </div>                                                                  
                                <div className="page">
                                    <div className="previous"><RaisedButton label="Previous"/></div>
                                    <div className="next"><RaisedButton label="Next"/></div>
                                </div>                                           
                            </div>                                                                       
                        </Paper>
                    </MuiThemeProvider>                 
                </div>                
            </div>
        )
    }
}