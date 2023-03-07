import React from 'react'

const NewsItem = (props)=>{
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className={`card border border-${props.mode==='light'?'dark':'dark'}`}>
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={imageUrl ? imageUrl : "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_news_logo.png?20210712160907"} className="card-img-top" alt="..." />
          <div className={`card-body bg-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
            <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>{title}</h5>
            <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>{description}</p>
            <p className="card-text" ><small className={`text-${props.mode==='light'?'muted':'white'}`}>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
