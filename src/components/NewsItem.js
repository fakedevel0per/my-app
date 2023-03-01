import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CE13/production/_128755725_brendonmccullumandbenstokes.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
