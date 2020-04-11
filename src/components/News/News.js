import React, { Component } from 'react';

import NewSingle from './NewSingle';
import Error from './Error';



class News extends Component {
    constructor(props) {
        super(props);
        this.state= {
            news: [],
            error: false
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=88b6436c3a974d07a400c9a2900adc02`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
        }
    

        renderItems() {
            if(!this.state.error) {
                return this.state.news.map((item) => (
                    <NewSingle key={item.url} item={item} />
                ));
            } else {
                return <Error />;
            }
            
        }

    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
    }
}

export default News;