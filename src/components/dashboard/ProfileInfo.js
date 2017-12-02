import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {grey800} from 'material-ui/styles/colors';

class ProfileInfo extends React.Component {

  render() {
    const {title, img} = this.props;

    const styles = {
      content: {
        height: 90,
        display: 'flex',
        alignItems: 'center'
      },
      text: {
        fontSize: 30,
        fontWeight: 800,
        color: grey800,
        paddingLeft: '20px'
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        background: 'url('+img+')',
        backgroundSize: 'contain'
      }
    };

    return (
      <Paper zDepth={4}>
        <span style={styles.iconSpan}/>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
        </div>
      </Paper>
      );
  }
}

ProfileInfo.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  img: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
};

export default ProfileInfo;
