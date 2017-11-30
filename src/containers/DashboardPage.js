import React from 'react';
import globalStyles from '../styles';
import '../styles.scss';
const DashboardPage = () => {
  const styles = {
    main: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',

    },
    mainTitleText: {
      fontSize: '4em',
      marginTop: '15%'
    }
  };
  return (
    <div>
      <h3 style={globalStyles.navigation}>Home / Welcome</h3>
      <div style={styles.main}>
        <h1 style={styles.mainTitleText}>Welcome</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
