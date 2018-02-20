import React from 'react';
import { map } from 'lodash';
import moment from 'moment';
import { Comment, Label, Divider } from 'semantic-ui-react';

const ItemExampleDivided = ({ data }) => (
  <Comment.Group size='large'>
    {map(data, ({ dt, temp, weather, pressure, humidity, speed, clouds }) => {
      return (
        <Comment key={dt} >
          <Comment.Avatar as='a' src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
          <Comment.Avatar as='a' src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} style={{float:"right"}} />
          <Comment.Content>
            <Comment.Author>
              {moment.unix(dt).format("dddd, D MMM")}
            </Comment.Author>
            <Comment.Text>
              {` Wind: ${speed} m/s, Clouds: ${clouds}%`}
            </Comment.Text>            
              <Label color='orange'>{temp.max}&deg;C</Label>
              <Label>{temp.min}&deg;C</Label>
              {`   ${weather[0].description}`}       
          </Comment.Content>
          
          <Divider />
        </Comment>
      )
    })}
  </Comment.Group>
)

export default ItemExampleDivided