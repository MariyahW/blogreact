import React from 'react'

export default function Article(props) {
 const blogPosts =props.articles?.map(article=>{
    return(
        <article>
    <time datetime={article.date}>{article.date}</time>
    <h2>{article.title}</h2>

    <img alt="..." src= {article.image}></img>

    <p>{article.text}</p>

    
</article>
    )
 })
 
 
    return (
    <div>{blogPosts}</div>
  )
}
