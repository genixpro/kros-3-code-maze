import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class DecoyButtons extends React.Component
{
    decoyButton1Pressed()
    {
        console.log("decoy 1!");
    }


    decoyButton2Pressed()
    {
        console.log("decoy 2!");
    }


    decoyButton3Pressed()
    {
        console.log("decoy 3!");
    }


    decoyButton4Pressed()
    {
        console.log("decoy 4!");
    }


    decoyButton5Pressed()
    {
        console.log("decoy 5!");
    }


    decoyButton6Pressed()
    {
        console.log("decoy 6!");
    }


    decoyButton7Pressed()
    {
        console.log("decoy 7!");
    }


    decoyButton8Pressed()
    {
        console.log("decoy 8!");
    }


    render() {
        return (
            <div className={"decoy_menu"}>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton1Pressed()}>Decoy 1</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton2Pressed()}>Decoy 2</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton3Pressed()}>Decoy 3</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton4Pressed()}>Decoy 4</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton5Pressed()}>Decoy 5</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton6Pressed()}>Decoy 6</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton7Pressed()}>Decoy 7</Button>
                <Button className={"decoy_button"} color="danger" onClick={() => this.decoyButton8Pressed()}>Decoy 8</Button>
            </div>
        );
    }
}




class BasicFunctionalButtons extends React.Component
{
    arbitraryFunction1()
    {
        console.log("function1!");
    }

    arbitraryFunction2()
    {
        console.log("function1!");
    }

    arbitraryFunction3()
    {
        console.log("function1!");
    }

    arbitraryFunction4()
    {
        console.log("function4!");
    }


    render()
    {
        return <div>
            <Button className={"menu-button"} color="primary" onClick={() => this.arbitraryFunction1()}>Func 1</Button>
            <Button className={"menu-button"} color="primary" onClick={() => this.arbitraryFunction2()}>Func 2</Button>
            <Button className={"menu-button"} color="primary" onClick={() => this.arbitraryFunction3()}>Func 3</Button>
            <Button className={"menu-button"} color="primary" onClick={() => this.arbitraryFunction4()}>Func 4</Button>
        </div>;
    }
}



class App extends React.Component {

    state = {
        page: 'home'
    }

    goToHomePage()
    {
        this.setState({page: 'home'});
    }

    goToMenuPage()
    {
        this.setState({page: 'menu'});
    }

    goToDeepMaze()
    {
        this.setState({page: 'deep_maze'});
    }

    goToDeep1()
    {
        this.setState({page: 'deep_1'});
    }

    goToDeep2()
    {
        this.setState({page: 'deep_2'});
    }

    goToDeep3()
    {
        this.setState({page: 'deep_3'});
    }

    goToDeep4()
    {
        this.setState({page: 'deep_4'});
    }


    deepFunction1()
    {
        console.log("deep1!");
    }

    deepFunction2()
    {
        console.log("deep2!");
    }

    deepFunction3()
    {
        console.log("deep3!");
    }

    deepFunction4()
    {
        console.log("deep4!");
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h3>KROS3 - The Code Maze</h3>
                    <p>This code maze is meant to act as a simple test case for Kwola.</p>
                </header>

                <div className={"page-wrapper"}>
                    {
                        this.state.page === 'home' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <Button color="primary" onClick={() => this.goToMenuPage()}>Basic Menu Page</Button>

                                <br/>
                                <br/>

                                <Button color="primary" onClick={() => this.goToDeepMaze()}>Deep Maze</Button>

                                <br/>
                                <br/>
                                <DecoyButtons />

                            </div> : null

                    }

                    {
                        this.state.page === 'menu' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <BasicFunctionalButtons />

                                <br/>
                                <br/>

                                <DecoyButtons />

                            </div> : null

                    }

                    {
                        this.state.page === 'deep_maze' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.goToDeep1()}>Deep 1</Button>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.goToDeep2()}>Deep 2</Button>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.goToDeep3()}>Deep 3</Button>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.goToDeep4()}>Deep 4</Button>
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons />

                            </div> : null

                    }

                    {
                        this.state.page === 'deep_1' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.deepFunction1()}>Deep 1</Button>
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons />

                            </div> : null

                    }

                    {
                        this.state.page === 'deep_2' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.deepFunction2()}>Deep 2</Button>
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons />

                            </div> : null

                    }

                    {
                        this.state.page === 'deep_3' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.deepFunction3()}>Deep 3</Button>
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons />

                            </div> : null

                    }

                    {
                        this.state.page === 'deep_4' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <Button className={"menu-button"} color="primary" onClick={() => this.deepFunction4()}>Deep 4</Button>
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons />

                            </div> : null

                    }
                </div>
            </div>
        );
    }
}

export default App;
