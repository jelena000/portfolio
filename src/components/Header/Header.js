import React, { Component } from 'react'
import './header.css';
import instagram from '../../assets/instagram.svg'

export default class Header extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <header className="" style={{top: 0}}>
                <nav className="nav-wrapper  navbar-transition cool-navbar z-depth-0" style={{height : 100, backgroundColor: '#fff', transition: '0.3s'}}>
                    <div className="container" style={{maxWidth : '100%', width: '100% !important'}}>
                        <div className="nav-wrapper row " style={{justifyContent: 'center'}}>
                            <div className="col s12 centered-container " style={{ marginLeft : 0, marginTop : 0, height: 100}}>
                                 <a href="#" className="brand-logo header-font" >
                                    <span style={{fontSize: 30, fontWeight: 'bold', color:'black'}}>
                                        JeLena Radovanović
                                    </span>
                                </a>
                            </div>
                            <div className=" hide-on-med-and-down right-container" style={{height: '100%', marginRight : 10, position: 'absolute', right: 0}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div  style={{ cursor: 'pointer',border: '1px solid black', padding: 5, borderRadius: 112, width: 26, height: 26, marginRight: 5}}>
                                        <a href="https://www.facebook.com/jelena.radovanovic.7714" target="">
                                            <div className="facebook-image" style={{ width: 12, height: 17}}>
                                            </div>
                                        </a>
                                    </div>
                                    <div  style={{ cursor: 'pointer',border: '1px solid black',justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 112, width: 26, height: 26, marginRight: 5, display: 'flex'}}>
                                        <a href="https://www.instagram.com/je.lena__" target="">
                                            <img src={instagram} style={{width: 10}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
