import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 7
    }

    static defaultProps = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
    }

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            articles: [],
            page: 1,
        }
        document.title = `${this.props.category } News` ;
    }

    async componentDidMount() {
        console.log("componentDidMount");
        //here this.props.setProgress(30) is jo hmane props pass kiye the app.js me usay hum yaha receive kr rhe hai as a props.
        this.props.setProgress(20)
        //here ${this.props.pageSize} is the props that we have passed in App.js so that we can know how many pages we want to render on the page at a time , we want to render 6 pages at a time------>

        //category=${this.props.category} here we have used this because we are passing as a props in app.js and here we are receing it here in the url------->
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=871e322abe9843a6a2a191afe1524544&page=${this.props.pageSize}`;
        let data = await fetch(url)
        this.props.setProgress(50)
        let parsed = await data.json()
        console.log(parsed);
        this.props.setProgress(70)
        this.setState({ articles: parsed.articles })
        this.props.setProgress(100)
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=871e322abe9843a6a2a191afe1524544&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsed = await data.json()
        console.log(parsed);
        this.setState({
            page: this.setState.page - 1,
            articles: parsed.articles
        })

    }

    handleNextClick = async () => {
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=871e322abe9843a6a2a191afe1524544&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsed = await data.json()
        console.log(parsed);
        this.setState({
            page: this.setState.page + 1,
            articles: parsed.articles
        })
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h2 style={{textAlign: "center",fontSize: "34px",marginTop:"50px", padding:"29px"}}>NewsApp : Today's Top Headlines on {this.props.category } </h2>
                    <div className="row my-3">
                        {this.state.articles.map((elem) => {
                            return <div className="col-md-4" key={elem.url}>
                                <NewsItems title={elem.title ? elem.title : ""} description={elem.description ? elem.description : ""} imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>

                <div className="container d-flex justify-content-between py-5">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} class="btn">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>

        )
    }
}

export default News
