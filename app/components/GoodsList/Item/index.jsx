import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Item extends React.PureComponent {
    render() {
        let { item } = this.props;
        return (
            <li>
                <Link to={`/detail/${item.title}`}>
                    <div class="left">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div class="right">
                        <div class="head">
                            <h4>{item.title}</h4>
                            <span>{item.created}</span>
                        </div>
                        <p class="desc">{item.desc}</p>
                        <p class="price">￥{item.price}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;
