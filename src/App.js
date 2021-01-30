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
            this.props.markPathAsDone("db01");
        }
        else
        {
            this.props.markPathAsDone("db02");
        }
    }


    decoyButton2Pressed()
    {
        if (this.props.option2)
        {
            this.props.markPathAsDone("db03");
        }
        else
        {
            this.props.markPathAsDone("db04");
        }
    }


    decoyButton3Pressed()
    {
        if (this.props.option3)
        {
            this.props.markPathAsDone("db05");
        }
        else
        {
            this.props.markPathAsDone("db06");
        }
    }


    decoyButton4Pressed()
    {
        if (this.props.option1)
        {
            this.props.markPathAsDone("db07");
        }
        else
        {
            this.props.markPathAsDone("db08");
        }
    }


    decoyButton5Pressed()
    {
        if (this.props.option2)
        {
            this.props.markPathAsDone("db09");
        }
        else
        {
            this.props.markPathAsDone("db10");
        }
    }


    decoyButton6Pressed()
    {
        if (this.props.option3)
        {
            this.props.markPathAsDone("db11");
        }
        else
        {
            this.props.markPathAsDone("db12");
        }
    }


    decoyButton7Pressed()
    {
        if (this.props.option1 && this.props.option2)
        {
            this.props.markPathAsDone("db13");
        }
        else
        {
            this.props.markPathAsDone("db14");
        }
    }


    decoyButton8Pressed()
    {
        if (this.props.option1 && this.props.option2)
        {
            this.props.markPathAsDone("db15");
        }
        else
        {
            this.props.markPathAsDone("db16");
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
        this.props.markPathAsDone("f01");
    }

    arbitraryFunction2()
    {
        this.props.markPathAsDone("f02");
    }

    arbitraryFunction3()
    {
        this.props.markPathAsDone("f03");
    }

    arbitraryFunction4()
    {
        this.props.markPathAsDone("f04");
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
            this.props.markPathAsDone("bf1-01");
        }
        else
        {
            this.props.markPathAsDone("bf1-02");
        }
    }

    changeNumber(newValue)
    {
        this.setState({number: newValue})
        if (this.props.option2)
        {
            this.props.markPathAsDone("bf1-03");
        }
        else
        {
            this.props.markPathAsDone("bf1-04");
        }
    }

    changeAnyText(newValue)
    {
        this.setState({text: newValue})
        if (this.props.option1)
        {
            this.props.markPathAsDone("bf1-05");
        }
        else
        {
            this.props.markPathAsDone("bf1-06");
        }
    }

    submitClicked()
    {
        if (validateEmail(this.state.email))
        {
            this.props.markPathAsDone("bf1-07");
            this.setState({validEmail: true});
        }
        else
        {
            this.props.markPathAsDone("bf1-08");
            this.setState({validEmail: false});
        }

        if (validateNumber(this.state.number))
        {
            this.props.markPathAsDone("bf1-09");
            this.setState({validNumber: true});
        }
        else
        {
            this.props.markPathAsDone("bf1-10");
            this.setState({validNumber: false});
        }

        if (validateEmail(this.state.email) && validateNumber(this.state.number) && this.state.text)
        {
            this.props.markPathAsDone("bf1-11");
            this.setState({allValid: true});
        }
        else
        {
            this.props.markPathAsDone("bf1-12");
            this.setState({allValid: false});
        }
    }

    goToFormSuccessPage()
    {
        this.props.markPathAsDone("bf1-13");
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
        this.props.markPathAsDone("bf2-01");
        this.setState({email: newValue})
    }

    changeNumber(newValue)
    {
        this.props.markPathAsDone("bf2-02");
        this.setState({number: newValue})
    }

    changeAnyText(newValue)
    {
        this.props.markPathAsDone("bf2-03");
        this.setState({text: newValue})
    }

    submitClicked()
    {
        if (validateEmail(this.state.email))
        {
            this.props.markPathAsDone("bf2-04");
            this.setState({validEmail: true});
        }
        else
        {
            this.setState({validEmail: false});
            if (this.props.option1)
            {
                this.props.markPathAsDone("bf2-05");
            }
            else
            {
                this.props.markPathAsDone("bf2-06");
            }
        }

        if (validateNumber(this.state.number))
        {
            this.props.markPathAsDone("bf2-07");
            this.setState({validNumber: true});
        }
        else
        {
            this.setState({validNumber: false});
            if (this.props.option2)
            {
                this.props.markPathAsDone("bf2-08");
            }
            else
            {
                this.props.markPathAsDone("bf2-09");
            }
        }

        if (validateEmail(this.state.email) && validateNumber(this.state.number) && this.state.text)
        {
            this.props.markPathAsDone("bf2-10");
            this.setState({allValid: true});
        }
        else
        {
            this.setState({allValid: false});
            if (this.props.option3)
            {
                this.props.markPathAsDone("bf2-11");
            }
            else
            {
                this.props.markPathAsDone("bf2-12");
            }
        }
    }

    goToFormSuccessPage()
    {
        this.props.markPathAsDone("bf2-13");
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
        this.props.markPathAsDone("bf3-01");
        this.setState({testText1: newValue})
    }

    changeText2(newValue)
    {
        this.props.markPathAsDone("bf3-02");
        this.setState({testText2: newValue})
    }

    changeText3(newValue)
    {
        this.props.markPathAsDone("bf3-03");
        this.setState({testText3: newValue})
    }

    changeText4(newValue)
    {
        this.props.markPathAsDone("bf3-04");
        this.setState({testText4: newValue})
    }

    submitClicked()
    {
        if (this.state.testText1 === "test1")
        {
            this.setState({validText1: true});
            if (this.props.option3)
            {
                this.props.markPathAsDone("bf3-05");
            }
            else
            {
                this.props.markPathAsDone("bf3-06");
            }
        }
        else
        {
            this.props.markPathAsDone("bf3-07");
            this.setState({validText1: false});
        }

        if (this.state.testText2 === "test2")
        {
            this.props.markPathAsDone("bf3-08");
            this.setState({validText2: true});
        }
        else
        {
            this.setState({validText2: false});
            if (this.props.option2)
            {
                this.props.markPathAsDone("bf3-09");
            }
            else
            {
                this.props.markPathAsDone("bf3-10");
            }
        }

        if (this.state.testText3 === "test3")
        {
            this.setState({validText3: true});
            if (this.props.option1)
            {
                this.props.markPathAsDone("bf3-11");
            }
            else
            {
                this.props.markPathAsDone("bf3-12");
            }
        }
        else
        {
            this.props.markPathAsDone("bf3-13");
            this.setState({validText3: false});
        }

        if (this.state.testText4 === "test4")
        {
            this.setState({validText4: true});
            if (this.props.option1)
            {
                this.props.markPathAsDone("bf3-14");
            }
            else
            {
                this.props.markPathAsDone("bf3-15");
            }
        }
        else
        {
            this.setState({validText4: false});
            if (this.props.option3)
            {
                this.props.markPathAsDone("bf3-16");
            }
            else
            {
                this.props.markPathAsDone("bf3-17");
            }
        }

        if (this.state.testText1 === "test1" && this.state.testText2 === "test2" && this.state.testText3 === "test3" && this.state.testText4 === "test4")
        {
            this.props.markPathAsDone("bf3-18");
            this.setState({allValid: true});
        }
        else
        {
            this.props.markPathAsDone("bf3-19");
            this.setState({allValid: false});
        }
    }

    goToFormSuccessPage()
    {
        this.props.markPathAsDone("bf3-20");
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
        this.props.markPathAsDone("bf4-01");
        this.setState({testText1: newValue})
    }

    changeText2(newValue)
    {
        this.props.markPathAsDone("bf4-02");
        this.setState({testText2: newValue})
    }

    changeText3(newValue)
    {
        this.props.markPathAsDone("bf4-03");
        this.setState({testText3: newValue})
    }

    changeText4(newValue)
    {
        this.props.markPathAsDone("bf4-04");
        this.setState({testText4: newValue})
    }

    submitClicked()
    {
        if (this.state.testText1 === "test1")
        {
            this.props.markPathAsDone("bf4-05");
            this.setState({validText1: true});
        }
        else
        {
            this.props.markPathAsDone("bf4-06");
            this.setState({validText1: false});
        }

        if (this.state.testText2 === "test2")
        {
            this.props.markPathAsDone("bf4-07");
            this.setState({validText2: true});
        }
        else
        {
            this.props.markPathAsDone("bf4-08");
            this.setState({validText2: false});
        }

        if (this.state.testText3 === "test3")
        {
            this.props.markPathAsDone("bf4-09");
            this.setState({validText3: true});
        }
        else
        {
            this.props.markPathAsDone("bf4-10");
            this.setState({validText3: false});
        }

        if (this.state.testText4 === "test4")
        {
            this.props.markPathAsDone("bf4-11");
            this.setState({validText4: true});
        }
        else
        {
            this.props.markPathAsDone("bf4-12");
            this.setState({validText4: false});
        }

        if (this.state.testText1 === "test1" && this.state.testText2 === "test2" && this.state.testText3 === "test3" && this.state.testText4 === "test4")
        {
            this.props.markPathAsDone("bf4-13");
            this.setState({allValid: true});
        }
        else
        {
            this.props.markPathAsDone("bf4-14");
            this.setState({allValid: false});
        }
    }

    goToFormSuccessPage()
    {
        this.props.markPathAsDone("bf4-15");
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
        this.props.markPathAsDone("co01");
        this.setState({step: 1});
    }

    step2SuccessClicked()
    {
        this.props.markPathAsDone("co02");
        this.setState({step: 2});
    }

    step3SuccessClicked()
    {
        this.props.markPathAsDone("co03");
        this.setState({step: 3});
    }

    step4SuccessClicked()
    {
        this.props.markPathAsDone("co04");
        this.props.onFlowSuccess();
    }

    render()
    {
        return <div className={"form-wrapper"}>
            {
                this.state.step === 0 ?
                    <BasicForm1
                        onFormSuccess={() => this.step1SuccessClicked()}
                        option1={this.props.option1} option2={this.props.option2} option3={this.props.option3}
                        markPathAsDone={(path) => this.props.markPathAsDone(path)}
                    /> : null
            }
            {
                this.state.step === 1 ?
                    <BasicForm2
                        onFormSuccess={() => this.step2SuccessClicked()}
                        option1={this.props.option1} option2={this.props.option2} option3={this.props.option3}
                        markPathAsDone={(path) => this.props.markPathAsDone(path)}
                    /> : null
            }
            {
                this.state.step === 2 ?
                    <BasicForm3
                        onFormSuccess={() => this.step3SuccessClicked()}
                        option1={this.props.option1} option2={this.props.option2} option3={this.props.option3}
                        markPathAsDone={(path) => this.props.markPathAsDone(path)}
                    /> : null
            }
            {
                this.state.step === 3 ?
                    <BasicForm4
                        onFormSuccess={() => this.step4SuccessClicked()}
                        option1={this.props.option1} option2={this.props.option2} option3={this.props.option3}
                        markPathAsDone={(path) => this.props.markPathAsDone(path)}
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
        option3: false,
        pathsDone: [],
        knownPaths: [],
        totalPaths: (16 + 4 + 13 + 13 + 20 + 15 + 4 + 19)
    }

    componentDidMount()
    {
        this.setKnownPaths();
    }

    setKnownPaths()
    {
        const paths = {
            "db": 16,
            "f": 4,
            "bf1-": 13,
            "bf2-": 13,
            "bf3-": 20,
            "bf4-": 15,
            "co": 4,
            "h": 19
        };

        const knownPaths = [];
        Object.keys(paths).forEach((prefix) =>
        {
            for (let c = 1; c <= paths[prefix]; c += 1)
            {
                let num = c.toString();
                while (num.length < 2) num = "0" + num;
                knownPaths.push(prefix + num);
            }
        });

        knownPaths.sort();

        this.setState({knownPaths});
    }

    markPathAsDone(path)
    {
        const paths = this.state.pathsDone;
        if (paths.indexOf(path) === -1)
        {
            paths.push(path);
        }
        paths.sort();
        this.setState({pathsDone: paths});
        window.kwolaCumulativeFitness = paths.length;
    }

    goToHomePage()
    {
        this.markPathAsDone("h01");
        this.setState({page: 'home'});
    }

    goToMenuPage()
    {
        this.markPathAsDone("h02");
        this.setState({page: 'menu'});
    }

    goToDeepMaze()
    {
        this.markPathAsDone("h03");
        this.setState({page: 'deep_maze'});
    }

    goToDeep1()
    {
        this.markPathAsDone("h04");
        this.setState({page: 'deep_1'});
    }

    goToDeep2()
    {
        this.markPathAsDone("h05");
        this.setState({page: 'deep_2'});
    }

    goToDeep3()
    {
        this.markPathAsDone("h06");
        this.setState({page: 'deep_3'});
    }

    goToDeep4()
    {
        this.markPathAsDone("h07");
        this.setState({page: 'deep_4'});
    }

    goToFormSuccess()
    {
        this.markPathAsDone("h08");
        this.setState({page: 'form_success'});
    }

    validateFormSuccess()
    {
        this.markPathAsDone("h09");
        this.setState({page: 'home'});
    }

    goToCheckoutFlow()
    {
        this.markPathAsDone("h10");
        this.setState({page: 'checkout'});
    }

    goToOptionsScreen()
    {
        this.markPathAsDone("h11");
        this.setState({page: 'options'});
    }

    checkoutFlowSuccess()
    {
        this.markPathAsDone("h12");
        this.setState({page: 'home'});
    }

    changeOption1(newValue)
    {
        this.markPathAsDone("h13");
        this.setState({option1: newValue})
    }

    changeOption2(newValue)
    {
        this.markPathAsDone("h14");
        this.setState({option2: newValue})
    }

    changeOption3(newValue)
    {
        this.markPathAsDone("h15");
        this.setState({option3: newValue})
    }


    deepFunction1()
    {
        this.markPathAsDone("h16");
    }

    deepFunction2()
    {
        this.markPathAsDone("h17");
    }

    deepFunction3()
    {
        this.markPathAsDone("h18");
    }

    deepFunction4()
    {
        this.markPathAsDone("h19");
    }


    render() {
        return (
            <div className="App">
                <span className={"paths-done-list"}>{this.state.pathsDone.length} / {this.state.totalPaths}:
                    {this.state.knownPaths.map((path) =>
                    {
                        if (this.state.pathsDone.indexOf(path) !== -1)
                        {
                            return <strong style={{"fontWeight": "boldest"}}>{path}, </strong>;
                        }
                        else
                        {
                            return <span style={{"marginRight": "1px", "fontStyle": "italic"}}>{path}, </span>;
                        }
                    })}</span>
                <br/>
                <header className="App-header">
                    <h3>KROS3 - The Code Maze</h3>
                    <p>This code maze is meant to act as a simple test case for Kwola.</p>
                </header>

                <div className={"page-wrapper"}>
                    {
                        this.state.page === 'home' ?
                            <div className={"page"}>

                                <div className={"home-buttons"}>
                                    <Button color="success" className={"home-button"} onClick={() => this.goToHomePage()}>Go to the home page</Button>
                                    <Button color="primary" className={"home-button"} onClick={() => this.goToMenuPage()}>Basic Menu Page</Button>
                                    <Button color="primary" className={"home-button"} onClick={() => this.goToDeepMaze()}>Deep Maze</Button>
                                    <Button color="primary" className={"home-button"} onClick={() => this.goToCheckoutFlow()}>Checkout Flow</Button>
                                    <Button color="primary" className={"home-button"} onClick={() => this.goToOptionsScreen()}>Options</Button>
                                </div>

                                <br/>
                                <br/>
                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

                            </div> : null

                    }

                    {
                        this.state.page === 'menu' ?
                            <div className={"page"}>

                                <Button color="success" onClick={() => this.goToHomePage()}>Go to the home page</Button>

                                <br/>
                                <br/>

                                <BasicFunctionalButtons markPathAsDone={(path) => this.markPathAsDone(path)} />

                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

                                <br/>
                                <br/>

                                <BasicForm1
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                    markPathAsDone={(path) => this.markPathAsDone(path)}
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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

                                <br/>
                                <br/>

                                <BasicForm1
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                    markPathAsDone={(path) => this.markPathAsDone(path)}
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
                                    markPathAsDone={(path) => this.markPathAsDone(path)}
                                />

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

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
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

                                <br/>
                                <br/>

                                <BasicForm3
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                    markPathAsDone={(path) => this.markPathAsDone(path)}
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
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <BasicForm4
                                    onFormSuccess={() => this.goToFormSuccess()}
                                    option1={this.state.option1} option2={this.state.option2} option3={this.state.option3}
                                    markPathAsDone={(path) => this.markPathAsDone(path)}
                                />

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

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

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

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
                                        markPathAsDone={(path) => this.markPathAsDone(path)}
                                    />
                                </div>

                                <br/>
                                <br/>

                                <DecoyButtons option1={this.state.option1} option2={this.state.option2} option3={this.state.option3} markPathAsDone={(path) => this.markPathAsDone(path)} />

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
