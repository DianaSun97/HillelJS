import React, { Component } from "react";
import { HttpHerosContext } from "../providers/Context";

class Pagination extends Component {
    static contextType = HttpHerosContext;

    state = {
        pageNumbers: []
    }

    componentDidMount() {
        const { heroList } = this.context;
        const pageNumbers = [];

        for (let i = 1; i <= heroList?.info; i++) {
            pageNumbers.push(i);
        }
        //with numbers
        // for (let i = 1; i <= heroList?.info.pages && i <= 5; i++) {
        //     pageNumbers.push(i);
        // }

        this.setState({ pageNumbers });
    }

    handlerPrevPage = () => {
        const { prev } = this.context.heroList?.info;
        this.context.fetchHeros(prev);
    }

    handlerNextPage = () => {
        const { next } = this.context.heroList?.info;
        this.context.fetchHeros(next);
    }

    render() {
        console.log(this.context.heroList.info, this.context.currentPage);
        const { pageNumbers } = this.state;
        return (
            <div className="Pagination">
                <button onClick={this.handlerPrevPage} >Prev</button>
                <ul className="Pagination-list">
                    {pageNumbers.map((page) => (
                        <li
                            key={page}
                            onClick={() => this.context.getPageNumber(page)}>
                            {page}
                        </li>
                    ))}
                </ul>
                <button onClick={this.handlerNextPage} >Next</button>
            </div>
        )
    }
}

export default Pagination;
