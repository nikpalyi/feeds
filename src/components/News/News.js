import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state= {
            news: []
        }

    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=88b6436c3a974d07a400c9a2900adc02';
    }

    renderItems() {
        return this.props.items.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;