import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export class News extends Component {
constructor(){
  super();
  this.state = {
      articles: [],
      loading: false,
      page: 1
  }
}
async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a288e18d3c1b4ee5844e59692e0c8a1e&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false
  });
}

handlePrevClick = async ()=>{
  console.log("previous");
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a288e18d3c1b4ee5844e59692e0c8a1e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles});

  this.setState({
    page: this.state.page - 1,
    loading: false
  })
}
handleNextClick = async ()=>{
  console.log(this.state.totalResults/this.props.pageSize);
if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
 
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a288e18d3c1b4ee5844e59692e0c8a1e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles});
  
  this.setState({
    page: this.state.page + 1,
    loading: false
  })
}else{

}
}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}


export default News
