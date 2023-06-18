import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let isSearch = false;
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    if (props.search !== '') {
      isSearch = true;
      url = `https://newsapi.org/v2/everything?q=${props.search}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    }

    // const queryUrl = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;/
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsBuddie`;
    updateNews();
    // eslint-disable-next-line
  }, [props.country, props.search])

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
  let countryCode = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
  let countryName = ['United Arab Emirates', 'Argentina', 'Austria', 'Australia', 'Belgium', 'Bulgaria', 'Brazil', 'Canada', 'Switzerland', 'China', 'Colombia', 'Cuba', 'Czechia', 'Germany', 'Egypt', 'France', 'United Kingdom', 'Greece', 'Hong Kong', 'Hungary', 'Indonesia', 'Ireland', 'Israel', 'India', 'Italy', 'Japan', 'Korea', 'Lithuania', 'Latvia', 'Morocco', 'Mexico', 'Malaysia', 'Nigeria', 'Netherlands', 'Norway', 'New Zealand', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Russia', 'Saudi Arabia', 'Swedan', 'Singapore', 'Slovenia', 'Slovakia', 'Thailand', 'Turkiye', 'Taiwan', 'Ukraine', 'United States', 'Venezuela', 'South Africa'];


  return (
    <>
      <h1 className={`text-center text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ marginTop: '70px' }}>{props.category !== 'general' ? capitalize(props.category) : "NewsBuddie"} - Top Headlines {!isSearch && `From ${countryName[countryCode.indexOf(props.country)]}`}</h1>
      {loading && <Spinner mode={props.mode} />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData} //fetches new data
        hasMore={articles.length !== totalResults}
        loader={<Spinner mode={props.mode} />}
        endMessage={
          <p className={`text-primary d-${loading ? 'none' : 'block'}`} style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">

          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  search: '',
  country: 'in',
  pageSize: '15',
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
