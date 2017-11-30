import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';

let newColor = '#f39c12';
const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 56,
    color: newColor
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: newColor,
  }
});


export default themeDefault;
