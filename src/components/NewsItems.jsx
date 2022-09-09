import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        //We are using JS Object destructuring to receive the props that we have passed from News.js and here we are receing it as a props..
        let { title, description, imageUrl ,newsUrl, author, date } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://st1.bgr.in/wp-content/uploads/2022/08/iPhone-13-2-1.jpg":imageUrl} className="card-img-top" />
                    <div className="card-body">
                        {/* {title} ye prop hamne News.js se bheja tha  jo API me se title me se liya tha */}
                        <h5 className="card-title">{title}...<span class="badge text-bg-danger">New</span></h5>
                        {/* same with the description  */}
                        <p className="card-text">{description}...</p>
                        {/* Author or date b hamne waisi hi kari hai  */}
                        <p className="card-text"><small id='text' className="text-muted">By {!author?"Unknown":author} on {new Date(date).toDateString() } </small></p>
                        {/* ye url b hamne API me se liya hai jisse hum doosre urls pr ja ske */}
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems
