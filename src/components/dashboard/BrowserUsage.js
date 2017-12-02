import React, { PropTypes } from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import GlobalStyles from '../../styles';

const BrowserUsage = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
      padding: 10,
      marginTop: 70
    },
    legend: {
      paddingTop: 20,
    },
    pieChartDiv: {
      height: 290,
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.paper}>
      <span style={GlobalStyles.title}>{props.champName}</span>

      <div style={GlobalStyles.clear}/>

      <div className="row">

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart >
                <Pie
                  innerRadius={80}
                  outerRadius={130}
                  data={props.data}
                  fill="#8884d8">
                  {
                    props.data.map((item) => <Cell key={item.name} fill={item.color}/>)
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

BrowserUsage.propTypes = {
  data: PropTypes.array,
  champName: PropTypes.string
};

export default BrowserUsage;
