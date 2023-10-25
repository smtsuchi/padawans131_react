import React, { Component } from 'react'

export default class Article extends Component {

    render() {
        const a = this.props.articleInfo
        console.log(a)
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={a.urlToImage} className="card-img-top" alt={a.title} />
                <div className="card-body">
                    <h5 className="card-title">{a.title}</h5>
                    <p className="card-text">{a.description}</p>
                    <a href={a.url} className="btn btn-primary">Go to article</a>
                </div>
            </div>
        )
    }
}
