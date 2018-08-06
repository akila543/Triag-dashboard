import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Reveal from 'react-reveal';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Carousel extends React.Component
{
  render()
  {
    return (
      <Zoom>
        <div className="carosel" style={{
          postion: "relative"
        }}>
          <AutoPlaySwipeableViews >
            <div >
              <img height="600px" width="100%" src="./images/img1.png"/>
            </div>
            <div>
              <img height="600px" width="100%" src="./images/i3.png"/>
            </div>
            <div>
              <img height="600px" width="100%" src="./images/i4.png"/>
            </div>
          </AutoPlaySwipeableViews>
        </div>
      </Zoom>
    );
  }
}

