import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor(){
  super();
  this.state = {
      articles: this.articles,
      articles: [],
      loading: false
  }
}
async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a288e18d3c1b4ee5844e59692e0c8a1e";
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles});
}

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        
      </div>
    )
  }
}


export default News
