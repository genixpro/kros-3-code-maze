import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class DecoyButtons extends React.Component
{
    decoyButton1Pressed()
    {
        if (this.props.option1)
        {
            console.log("decoy 1 with option1!");
        }
        else
        {
            console.log("decoy 1 without option1!");
        }
    }


    decoyButton2Pressed()
    {
        if (this.props.option2)
        {
            console.log("decoy 2 with option2!");
        }
        else
        {
            console.log("decoy 2 without option2!");
        }
    }


    decoyButton3Pressed()
    {
        if (this.props.option3)
        {
            console.log("decoy 3 with option3!");
        }
        else
        {
            console.log("decoy 3 without option3!");
        }
    }


    decoyButton4Pressed()
    {
        if (this.props.option1)
        {
            console.log("decoy 4 with option1!");
        }
        else
        {
            console.log("decoy 4 without option1!");
        }
    }


    decoyButton5Pressed()
    {
        if (this.props.option2)
        {
            console.log("decoy 5 with option2!");
        }
        else
        {
            console.log("decoy 5 without option2!");
        }
    }


    decoyButton6Pressed()
    {
        if (this.props.option3)
        {
            console.log("decoy 6 with option3!");
        }
        else
        {
            console.log("decoy 6 without option3!");
        }
    }


    decoyButton7Pressed()
    {
        if (this.props.option1 && this.props.option2)
        {
            console.log("decoy 7 with option1 and option2!");
        }
        else
        {
            console.log("decoy 7 without option1 and option2!");
        }
    }


    decoyButton8Pressed()
    {
        if (this.props.option1 && this.props.option2)
        {
            console.log("decoy 8 with option1 and option2!");
        }
        else
        {
            console.log("decoy 8 without option1 and option2!");
        }
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

function validateEmail(mail)
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return true;
    }
    return false;
}

function validateNumber(number)
{
    if (/^[0-9.]+$/.test(number))
    {
        return true;
    }
    return false;
}


class BasicForm1 extends React.Component
{
    state = {
        email: "",
        number: "",
        text: "",
        validEmail: true,
        validNumber: true,
        allValid: false
    }

    changeEmail(newValue)
    {
        this.setState({email: newValue})
        if (this.props.option3)
        {
            console.log("change email with option3!");
        }
        else
        {
            console.log("change email without option3!");
        }
    }

    changeNumber(newValue)
    {
        this.setState({number: newValue})
        if (this.props.option2)
        {
            console.log("change number with option2!");
        }
        else
        {
            console.log("change number without option2!");
        }
    }

    changeAnyText(newValue)
    {
        this.setState({text: newValue})
        if (this.props.option1)
        {
            console.log("change text with option1!");
        }
        else
        {
            console.log("change text without option1!");
        }
    }

    submitClicked()
    {
        if (validateEmail(this.state.email))
        {
            this.setState({validEmail: true});
        }
        else
        {
            this.setState({validEmail: false});
        }

        if (validateNumber(this.state.number))
        {
            this.setState({validNumber: true});
        }
        else
        {
            this.setState({validNumber: false});
        }

        if (validateEmail(this.state.email) && validateNumber(this.state.number) && this.state.text)
        {
            this.setState({allValid: true});
        }
        else
        {
            this.setState({allValid: false});
        }
    }

    goToFormSuccessPage()
    {
        this.props.onFormSuccess();
    }

    render()
    {
        return <div className={"form-wrapper"}>
            <span>Basic Form 1</span>
            <div>Email: <input type={"text"} value={this.state.email} onChange={(evt) => this.changeEmail(evt.target.value)}/></div>
            {
                !this.state.validEmail ? <span>Email is invalid</span> : null
            }
            <div><br/></div>
            <div>Number: <input type={"text"} value={this.state.number} onChange={(evt) => this.changeNumber(evt.target.value)}/></div>
            {
                !this.state.validNumber ? <span>Number is invalid</span> : null
            }
            <div><br/></div>
            <div>Any Text: <input type={"text"} value={this.state.text} onChange={(evt) => this.changeAnyText(evt.target.value)}/></div>
            <div><br/></div>
            <div>
                <Button className={"menu-button"} color="primary" onClick={() => this.submitClicked()}>Submit</Button>
                {
                    this.state.allValid ? <span>All fields are valid</span> : null
                }
            </div>
            <div><br/></div>
            {
                this.state.allValid ? <Button className={"menu-button"} color="primary" onClick={() => this.goToFormSuccessPage()}>Go To Form Success</Button> : null
            }
        </div>;
    }
}


class BasicForm2 extends React.Component
{
    state = {
        email: "",
        number: "",
        text: "",
        validEmail: true,
        validNumber: true,
        allValid: false
    }

    changeEmail(newValue)
    {
        this.setState({email: newValue})
    }

    changeNumber(newValue)
    {
        this.setState({number: newValue})
    }

    changeAnyText(newValue)
    {
        this.setState({text: newValue})
    }

    submitClicked()
    {
        if (validateEmail(this.state.email))
        {
            this.setState({validEmail: true});
        }
        else
        {
            this.setState({validEmail: false});
            if (this.props.option1)
            {
                console.log("email invalid with option1!");
            }
            else
            {
                console.log("email invalid without option1!");
            }
        }

        if (validateNumber(this.state.number))
        {
            this.setState({validNumber: true});
        }
        else
        {
            this.setState({validNumber: false});
            if (this.props.option2)
            {
                console.log("number invalid with option2!");
            }
            else
            {
                console.log("number invalid without option2!");
            }
        }

        if (validateEmail(this.state.email) && validateNumber(this.state.number) && this.state.text)
        {
            this.setState({allValid: true});
        }
        else
        {
            this.setState({allValid: false});
            if (this.props.option3)
            {
                console.log("text invalid with option3!");
            }
            else
            {
                console.log("text invalid without option3!");
            }
        }
    }

    goToFormSuccessPage()
    {
        this.props.onFormSuccess();
    }

    render()
    {
        return <div className={"form-wrapper"}>
            <span>Basic Form 2</span>
            <div>Any Text: <input type={"text"} value={this.state.text} onChange={(evt) => this.changeAnyText(evt.target.value)}/></div>
            <div><br/></div>
            <div>Number: <input type={"text"} value={this.state.number} onChange={(evt) => this.changeNumber(evt.target.value)}/></div>
            {
                !this.state.validNumber ? <span>Number is invalid</span> : null
            }
            <div><br/></div>
            <div>Email: <input type={"text"} value={this.state.email} onChange={(evt) => this.changeEmail(evt.target.value)}/></div>
            {
                !this.state.validEmail ? <span>Email is invalid</span> : null
            }
            <div><br/></div>
            <div>
                <Button className={"menu-button"} color="primary" onClick={() => this.submitClicked()}>Submit</Button>
                {
                    this.state.allValid ? <span>All fields are valid</span> : null
                }
            </div>
            <div><br/></div>
            {
                this.state.allValid ? <Button className={"menu-button"} color="primary" onClick={() => this.goToFormSuccessPage()}>Go To Form Success</Button> : null
            }
        </div>;
    }
}


class BasicForm3 extends React.Component
{
    state = {
        testText1: "",
        testText2: "",
        testText3: "",
        testText4: "",
        validText1: true,
        validText2: true,
        validText3: true,
        validText4: true
    }

    changeText1(newValue)
    {
        this.setState({testText1: newValue})
    }

    changeText2(newValue)
    {
        this.setState({testText2: newValue})
    }

    changeText3(newValue)
    {
        this.setState({testText3: newValue})
    }

    changeText4(newValue)
    {
        this.setState({testText4: newValue})
    }

    submitClicked()
    {
        if (this.state.testText1 === "test1")
        {
            this.setState({validText1: true});
            if (this.props.option3)
            {
                console.log("text1 validated with option3!");
            }
            else
            {
                console.log("text1 validated without option3!");
            }
        }
        else
        {
            this.setState({validText1: false});
        }

        if (this.state.testText2 === "test2")
        {
            this.setState({validText2: true});
        }
        else
        {
            this.setState({validText2: false});
            if (this.props.option2)
            {
                console.log("text2 validated with option2!");
            }
            else
            {
                console.log("text2 validated without option2!");
            }
        }

        if (this.state.testText3 === "test3")
        {
            this.setState({validText3: true});
            if (this.props.option1)
            {
                console.log("text3 validated with option1!");
            }
            else
            {
                console.log("text3 validated without option1!");
            }
        }
        else
        {
            this.setState({validText3: false});
        }

        if (this.state.testText4 === "test4")
        {
            this.setState({validText4: true});
            if (this.props.option1)
            {
                console.log("text4 validated with option1!");
            }
            else
            {
                console.log("text4 validated without option1!");
            }
        }
        else
        {
            this.setState({validText4: false});
            if (this.props.option3)
            {
                console.log("text1 invalid with option3!");
            }
            else
            {
                console.log("text1 invalid without option3!");
            }
        }

        if (this.state.testText1 === "test1" && this.state.testText2 === "test2" && this.state.testText3 === "test3" && this.state.testText4 === "test4")
        {
            this.setState({allValid: true});
        }
        else
        {
            this.setState({allValid: false});
        }
    }

    goToFormSuccessPage()
    {
        this.props.onFormSuccess();
    }

    render()
    {
        return <div className={"form-wrapper"}>
            <span>Basic Form 3</span>
            <div><br/></div>
            <div>Test Text 1: <input type={"text"} value={this.state.testText1} onChange={(evt) => this.changeText1(evt.target.value)}/></div>
            {
                !this.state.validText1 ? <span>Please enter "test1" into this box.</span> : null
            }
            <div><br/></div>
            <div>Test Text 2: <input type={"text"} value={this.state.testText2} onChange={(evt) => this.changeText2(evt.target.value)}/></div>
            {
                !this.state.validText2 ? <span>Please enter "test2" into this box.</span> : null
            }
            <div><br/></div>
            <div>Test Text 3: <input type={"text"} value={this.state.testText3} onChange={(evt) => this.changeText3(evt.target.value)}/></div>
            {
                !this.state.validText3 ? <span>Please enter "test3" into this box.</span> : null
            }
            <div><br/></div>
            <div>Test Text 4: <input type={"text"} value={this.state.testText4} onChange={(evt) => this.changeText4(evt.target.value)}/></div>
            {
                !this.state.validText4 ? <span>Please enter "test4" into this box.</span> : null
            }
            <div><br/></div>
            <div>
                <Button className={"menu-button"} color="primary" onClick={() => this.submitClicked()}>Submit</Button>
                {
                    this.state.allValid ? <span>All field inputs are valid.</span> : null
                }
            </div>
            <div><br/></div>
            {
                this.state.allValid ? <Button className={"menu-button"} color="primary" onClick={() => this.goToFormSuccessPage()}>Go To Form Success</Button> : null
            }
        </div>;
    }
}


class BasicForm4 extends React.Component
{
    state = {
        testText1: "",
        testText2: "",
        testText3: "",
        testText4: "",
        validText1: true,
        validText2: true,
        validText3: true,
        validText4: true
    }

    changeText1(newValue)
    {
        this.setState({testText1: newValue})
    }

    changeText2(newValue)
    {
        this.setState({testText2: newValue})
    }

    changeText3(newValue)
    {
        this.setState({testText3: newValue})
    }

    changeText4(newValue)
    {
        this.setState({testText4: newValue})
    }

    submitClicked()
    {
        if (this.state.testText1 === "test1")
        {
            this.setState({validText1: true});
        }
        else
        {
            this.setState({validText1: false});
        }

        if (this.state.testText2 === "test2")
        {
            this.setState({validText2: true});
        }
        else
        {
            this.setState({validText2: false});
        }

        if (this.state.testText3 === "test3")
        {
            this.setState({validText3: true});
        }
        else
        {
            this.setState({validText3: false});
        }

        if (this.state.testText4 === "test4")
        {
            this.setState({validText4: true});
        }
        else
        {
            this.setState({validText4: false});
        }

        if (this.state.testText1 === "test1" && this.state.testText2 === "test2" && this.state.testText3 === "test3" && this.state.testText4 === "test4")
        {
            this.setState({allValid: true});
        }
        else
        {
            this.setState({allValid: false});
        }
    }

    goToFormSuccessPage()
    {
        this.props.onFormSuccess();
    }

    render()
    {
        return <div className={"form-wrapper"}>
            <span>Basic Form 4</span>
            <div><br/></div>
            <div>Test Text 4: <input type={"text"} value={this.state.testText4} onChange={(evt) => this.changeText4(evt.target.value)}/></div>
            {
                !this.state.validText4 ? <span>Please enter "test4" into this box.</span> : null
            }
            <div><br/></div>
            <div>Test Text 3: <input type={"text"} value={this.state.testText3} onChange={(evt) => this.changeText3(evt.target.value)}/></div>
            {
                !this.state.validText3 ? <span>Please enter "test3" into this box.</span> : null
            }
            <div><br/></div>
            <div>Test Text 2: <input type={"text"} value={this.state.testText2} onChange={(evt) => this.changeText2(evt.target.value)}/></div>
            {
                !this.state.validText2 ? <span>Please enter "test2" into this box.</span> : null
            }
            <div><br/></div>
            <div>Test Text 1: <input type={"text"} value={this.state.testText1} onChange={(evt) => this.changeText1(evt.target.value)}/></div>
            {
                !this.state.validText1 ? <span>Please enter "test1" into this box.</span> : null
            }
            <div><br/></div>
            <div>
                <Button className={"menu-button"} color="primary" onClick={() => this.submitClicked()}>Submit</Button>
                {
                    this.state.allValid ? <span>All field inputs are valid.</span> : null
                }
            </div>
            <div><br/></div>
            {
                this.state.allValid ? <Button className={"menu-button"} color="primary" onClick={() => this.goToFormSuccessPage()}>Go To Form Success</Button> : null
            }
        </div>;
    }
}



class CheckoutFlow extends React.Component
{
    state = {
        step: 0
    }

    step1SuccessClicked()
    {
        this.setState({step: 1});
    }

    step2SuccessClicked()
    {
        this.setState({step: 2});
    }

    step3SuccessClicked()
    {
        this.setState({step: 3});
    }

    step4SuccessClicked()
    {
        this.props.onFlowSuccess();
    }

    render()
    {
        return <div className={"form-wrapper"}>
            {
                this.state.step === 0 ?
                    <BasicForm1
                        onFormSuccess={() => this.step1SuccessClicked()}
                    /> : null
            }
            {
                this.state.step === 1 ?
                    <BasicForm2
                        onFormSuccess={() => this.step2SuccessClicked()}
                    /> : null
            }
            {
                this.state.step === 2 ?
                    <BasicForm3
                        onFormSuccess={() => this.step3SuccessClicked()}
                    /> : null
            }
            {
                this.state.step === 3 ?
                    <BasicForm4
                        onFormSuccess={() => this.step4SuccessClicked()}
                    /> : null
            }


        </div>;
    }
}


class App extends React.Component {

    state = {
        page: 'home',
        option1: false,
        option2: false,
        option3: false
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

    goToFormSuccess()
    {
        this.setState({page: 'form_success'});
    }

    validateFormSuccess()
    {
        this.setState({page: 'home'});
    }

    goToCheckoutFlow()
    {
        this.setState({page: 'checkout'});
    }

    goToOptionsScreen()
    {
        this.setState({page: 'options'});
    }

    checkoutFlowSuccess()
    {
        this.setState({page: 'home'});
    }

    changeOption1(newValue)
    {
        this.setState({option1: newValue})
    }

    changeOption2(newValue)
    {
        this.setState({option2: newValue})
    }

    changeOption3(newValue)
    {
        this.setState({option3: newValue})
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

                                <Button color="primary" onClick={() => this.goToCheckoutFlow()}>Checkout Flow</Button>

                                <br/>
                                <br/>

                                <Button color="primary" onClick={() => this.goToOptionsScreen()}>Options</Button>

                                <br/>
                                <br/>
                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

                                <br/>
                                <br/>

                                <BasicForm1
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                />

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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

                                <br/>
                                <br/>

                                <BasicForm1
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                />

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

                                <BasicForm2
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                />

                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

                                <br/>
                                <br/>

                                <BasicForm3
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                />

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

                                <BasicForm4
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                />

                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

                            </div> : null

                    }

                    {
                        this.state.page === 'form_success' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <span>Your on the form success page!</span>

                                    <Button className={"menu-button"} color="primary" onClick={() => this.validateFormSuccess()}>Validate your form success</Button>
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

                            </div> : null

                    }

                    {
                        this.state.page === 'checkout' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <span>You're inside the checkout flow</span>

                                    <CheckoutFlow
                                        onFlowSuccess={() => this.checkoutFlowSuccess()}
                                    />
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} />

                            </div> : null
                    }

                    {
                        this.state.page === 'options' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <div>
                                    <span>You're inside the options screen!</span>

                                    <div>Option 1: <input type={"checkbox"} checked={this.state.option1} onChange={(evt) => this.changeOption1(!this.state.option1)}/></div>
                                    <div><br/></div>
                                    <div>Option 2: <input type={"checkbox"} checked={this.state.option2} onChange={(evt) => this.changeOption2(!this.state.option2)}/></div>
                                    <div><br/></div>
                                    <div>Option 3: <input type={"checkbox"} checked={this.state.option3} onChange={(evt) => this.changeOption3(!this.state.option3)}/></div>
                                    <div><br/></div>

                                </div>

                            </div> : null
                    }
                </div>
            </div>
        );
    }
}

export default App;
