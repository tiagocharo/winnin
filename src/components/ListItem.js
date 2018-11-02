import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export default class ListItem extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="list-item">
        <div className="container-image">
          <img src={data.thumbnail.includes('http') ? data.thumbnail : 'http://placehold.it/64x64'} alt="" />
        </div>
        <div className="container-description">
          <h3 className="title">
            <a href={data.url}>{data.title}</a>
          </h3>
          <p className="send">
              {`enviado ${moment.unix(data.created_utc).fromNow()} `}<b>por </b><span>{data.author}</span>
          </p>
          <p className="domain">
             <a href={data.domain}>{data.domain}</a>
          </p>
        </div>
      </div>
    );
  }
}
