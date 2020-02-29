import React, {Component} from 'react';
import SearchBox from './SearchBox'
import makeAnimatedValidationSearchBox from './search-box-controller';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {SelectField, MenuItem} from 'material-ui'


// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();


// import {makeSpringUp, makeTranslateUp} from './move-up-animations';

// const TranslateUp = makeTranslateUp(SearchBox);
// const SpringUpSearchBox = makeSpringUp(SearchBox);
const ValidatedSearchBox = makeAnimatedValidationSearchBox(SearchBox);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedComponents: [<ValidatedSearchBox/>],
            selectIndex: 0
        };
    }

    render() {
        //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
        const style = {
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        return (
            <MuiThemeProvider>
                <div style={style}>
                    {this.state.animatedComponents[this.state.selectIndex]}
                    {/* <SelectField
                        // floatingLabelText="Animation"
                        value={this.state.selectIndex}
                        onChange={(event, index, value) => this.setState({selectIndex: value})}
                    >
                        {/* <MenuItem value={0} primaryText="Expand & Validation"/>
                        <MenuItem value={1} primaryText="Translate Up"/>
                        <MenuItem value={2} primaryText="Spring Up"/> */}
                    {/* </SelectField> */} 
                   {/* <br/>
                    Click the Search icon to animate.
                    <br/>
                    (AS I OBSERVED THIS SEARCH BAR HAS A D.A THAT TO animate WE NEED TO TOUCH SEARCH BAR INSTEAD OF TEXT FIELD) */}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
