import React from 'react';
import globalStyles from '../styles';
import '../styles.scss';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const DashboardPage = () => {
  const img = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_2.jpg';
  const styles = {
    margin: {
      marginBottom: '15px'
    },
    whiteText: {
      color: '#fff'
    }
  };
  return (
    <div>
      <h3 style={globalStyles.navigation}>Home / Welcome</h3>
      <div className="row">
        <div className="col-md-4" style={styles.margin}>
          <Card>
            <CardMedia>
              <img src={img} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton style={styles.whiteText} backgroundColor={'rgb(30, 136, 229)'} rippleColor={'rgb(243, 156, 18)'} label="Stats" />
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4" style={styles.margin}>
          <Card>
            <CardMedia>
              <img src={img} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton style={styles.whiteText} backgroundColor={'rgb(30, 136, 229)'} rippleColor={'rgb(243, 156, 18)'} label="Stats" />
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4" style={styles.margin}>
          <Card>
            <CardMedia>
              <img src={img} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton style={styles.whiteText} backgroundColor={'rgb(30, 136, 229)'} rippleColor={'rgb(243, 156, 18)'} label="Stats" />
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4" style={styles.margin}>
          <Card>
            <CardMedia>
              <img src={img} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton style={styles.whiteText} backgroundColor={'rgb(30, 136, 229)'} rippleColor={'rgb(243, 156, 18)'} label="Stats" />
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4" style={styles.margin}>
          <Card>
            <CardMedia>
              <img src={img} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton style={styles.whiteText} backgroundColor={'rgb(30, 136, 229)'} rippleColor={'rgb(243, 156, 18)'} label="Stats" />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
