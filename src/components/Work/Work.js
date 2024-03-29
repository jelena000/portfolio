import React, { Component } from 'react'
import word1 from '../../assets/word1.png';
import word2 from '../../assets/word2.png';
import word3 from '../../assets/word3.png';
import word4 from '../../assets/word4.png';
import memory1 from '../../assets/mem1.jpeg';
import memory2 from '../../assets/mem2.jpeg';
import kon1 from '../../assets/kon1.jpeg';
import kon2 from '../../assets/kon2.jpeg';
import bike1 from '../../assets/bike1.jpeg';
import bike2 from '../../assets/bike2.jpeg';
import bike3 from '../../assets/bike3.jpeg';
import bike4 from '../../assets/bike4.jpeg';
import erDiagram from '../../assets/erDiagram.png';
import planina1 from '../../assets/planina1.png';
import planina2 from '../../assets/planina2.png';
import planina3 from '../../assets/planina3.png';
import blogovi from '../../assets/blogovi.png';
import blogovi2 from '../../assets/blog2.png';

import codehelper5 from '../../assets/codehelper5.png';
import codehelper2 from '../../assets/codehelper6.png';
import codehelper3 from '../../assets/codehelper7.png';
import codehelper4 from '../../assets/codehelper8.png';

import hwr1 from '../../assets/hwr1.png';
import hwr2 from '../../assets/hwr2.png';
import hwr3 from '../../assets/hwr3.png';
import hwr4 from '../../assets/hwr4.png';
import git from '../../assets/git.svg';

export default class Work extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    generateMainContent(){
        let workId = this.props.match.params.id;
        let result = null;

        try {
            result = this['generateWork' + workId]();
        } catch (error) {
            return result;
        }

        return result;
    }

    generateWork1(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>Bike Rental</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"https://github.com/jelena000/course-site.git"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}> https://github.com/jelena000/course-site.git</a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={bike1} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={bike2} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={bike3} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={bike4} style={{height: 255, width: 555}} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                          The final project for the ReactJS course. A website that provides the possibility of renting bicycles. The user can register or log in, select the desired number of items, add them to the cart, and the possibility to contact the admin.
                        </h4>
                    </div>
                </div>
                <div className="row"  style={{ justifyContent: 'center', position: 'relative',marginTop: 50, maxWidth: 900}}>
                    <div className="col s12 m12" style={{ paddingTop: 100,}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left', paddingBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag react-tag'} > REACT</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag scss-tag'} >SCSS </span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag js-tag'} > JS</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag bootstrap-tag'} > BOOTSTRAP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    generateWork2(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>My Digital Diary</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"https://github.com/jelena000/domaci01_zad3.git"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}> https://github.com/jelena000/domaci01_zad3.git</a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={blogovi} style={{height: 255, width: 555,}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={blogovi2} style={{height: 255, width: 555}} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                            Blogs are one of the projects from courses in which I have mastered the React Router and Local Storage. Blogs are listed like cards, there is also the possibility to search by name or word that appears in the text of the blog. It is also possible to add a new blog.                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag react-tag'} > REACT</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag materialize-tag'} > MATERIALIZE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    generateWork3(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>Memory Game</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"https://github.com/jelena000/domaci01_zad2.git"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}> https://github.com/jelena000/domaci01_zad2.git</a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={memory1} style={{height: 255, width: 555,}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={memory2} style={{height: 255, width: 555}} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                            Memory game is one of the projects done within the course. If the user matches the images in less than 5 attempts, they will win.
                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag react-tag'} > REACT</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    generateWork4(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>Converter</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"https://github.com/jelena000/domaci01_zad1.git"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}> https://github.com/jelena000/domaci01_zad1.git</a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={kon1} style={{height: 255, width: 555,}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={kon2} style={{height: 255, width: 555}} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                           The currency converter is one of the tasks from ReactJS course. Provides the ability to convert 4 currencies
                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag react-tag'} > REACT</span>
                                    <span className="text-font" style={{fontSize: 15, color: '#000000', }}></span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    generateWork5(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>My Garden</h2>
                </div>
                <div className="row">
                    <div className="screenshots container row ">
                        <div className="col s12 m6" >
                            <img src={word1} style={{height: 255, width: 555,}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={word2} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={word3} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={word4} style={{height: 255, width: 555}} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                            First project in Wordpress with animations and responsive design.
                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag wordpress-tag'} > WORDPRESS</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    generateWork6(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>Mountains</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"#"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}></a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={planina1} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={planina2} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={planina3} style={{height: 255, width: 555}}/>
                        </div>
                        <div className="col s12 m6">
                            <img src={erDiagram} style={{height: 255, width: 555}}/>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                             Website intended for lovers of nature, hiking tours, and excursions. The website allows users to restore or log in, view available hiking tours, and leave comments. The administrator can issue new cards with hiking tours or delete existing ones he can also delete users.
                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag php-tag'} > PHP</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag mysql-tag'} > MYSQL</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag html-tag'} > HTML</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag js-tag'} > JS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    generateWork7(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>CodeNotes</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"https://github.com/jelena000/codenotes.git"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}>https://github.com/jelena000/codenotes.git</a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={codehelper5} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={codehelper2} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={codehelper3} style={{height: 255, width: 555}}/>
                        </div>
                        <div className="col s12 m6">
                            <img src={codehelper4} style={{height: 255, width: 555}}/>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                        CodeNotes is the web app in the making with an idea to allow developers to save their code snippets or files and make a note about them.
                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                <div className="card-tag-row">
                                    <span className={'card-tag html-tag'} > REACT</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag css-tag'} > CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    generateWork8(){
        return (
            <div className="text-font">
                <div className="row" style={{paddingBottom: 20}}>
                    <h2>Hardware store</h2>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={git}></img>
                        <a href={"https://github.com/jelena000/hardware-store.git"} target="_blank" style={{color:'black', fontSize:15, marginLeft:10}}> https://github.com/jelena000/hardware-store.git</a>
                    </div>  
                </div>
                <div className="row">
                    <div className="screenshots container row">
                        <div className="col s12 m6">
                            <img src={hwr1} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={hwr2} style={{height: 255, width: 555}} />
                        </div>
                        <div className="col s12 m6">
                            <img src={hwr3} style={{height: 255, width: 555}}/>
                        </div>
                        <div className="col s12 m6">
                            <img src={hwr4} style={{height: 255, width: 555}}/>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: 50}}>
                    <div className="about-work container" >
                        <h4>
                        A Hardware store is a web app where users can sell or buy hardware. After successful account creation, the user can see all products. The user can visit the specific product page and then he can like or comment. There is also a chat where the user can get in touch with the seller or answer messages from clients.

                        </h4>
                    </div>
                </div>
                <div className=""  style={{ display:'flex',justifyContent: 'center', position: 'relative',marginTop: 50, marginBottom: 100}}>
                    <div className="" style={{ paddingTop: 100, width: 455}}>
                        <div style={{ height: 50, backgroundColor: '#521547ad',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                            <span className="text-font" style={{color: '#fff'}}>Languages</span>
                        </div>
                        <div style={{ minHeight: 200, border: '1px solid #fff', backgroundColor: '#ccc4ee'}}>
                            <div className='tags-container' style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                                
                                <div className="card-tag-row">
                                    <span className={'card-tag php-tag'} > HTML</span>
                                </div>
                                <div className="card-tag-row">
                                    <span className={'card-tag mysql-tag'} > CSS </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    render() {
        const content = this.generateMainContent();
        return (
            <div className="home-root">
                <div className="home-main" style={{ paddingTop: 60,backgroundColor: '#f2f2f2',}}>
                    <div className="main-content" style={{ paddingTop: 100}}>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}
