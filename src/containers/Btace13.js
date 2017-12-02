import React from 'react';
import globalStyles from '../styles';
import {cyan600, pink600} from 'material-ui/styles/colors';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ProfileInfo from '../components/dashboard/ProfileInfo';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import Data from '../data';

const Btace13 = () => {
  const img = 'https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2015/september_2015/PPIU/pb_icon_final.jpg';
  const league = 'https://www.lol-smurfs.com/blog/wp-content/uploads/2017/01/goldv.png';
  return (
    <div>
      <div>
        <h3 style={globalStyles.navigation}>Btace13 / Stats</h3>
      </div>
      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-6">
          <ProfileInfo Icon={ShoppingCart}
                   color={pink600}
                   title="Btace13"
                       img={img}
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-6">
          <ProfileInfo Icon={ThumbUp}
                   color={cyan600}
                   title="Bronze 1"
                       img={league}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 ">
          <BrowserUsage champName={'Kindred'} data={Data.dashBoardPage.browserUsage}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 ">
          <BrowserUsage champName={'Trundle'} data={Data.dashBoardPage.browserUsage}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 ">
          <BrowserUsage champName={'Jayce'} data={Data.dashBoardPage.browserUsage}/>
        </div>
      </div>
    </div>
  );
};

export default Btace13;
