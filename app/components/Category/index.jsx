import './style';
import React from 'react';
import ReactSwipe from 'react-swipe';

class Category extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    render() {
        const settings = {
            auto: 2500,
            callback: index => {                
                this.setState({ index: index }); // 更新当前轮播图的index
            }
        };
        return (
            <div class="home-category">
                <ReactSwipe className="carousel" swipeOptions={settings}>
                    <div class="items">
                        <img src="https://www.hetungugu.com/data/afficheimg/20200619naqgwd.jpg" alt="banner1"/>
                    </div>
                    <div class="items">
                        <img src="https://www.hetungugu.com/data/afficheimg/20200205nmvksw.jpg" alt="banner2" />
                    </div>
                </ReactSwipe>
                <div className="index">
                    <li class={this.state.index === 0 ? 'active' : ''}></li>
                    <li class={this.state.index === 1 ? 'active' : ''}></li>
                </div>
            </div>
        );
    }
}

export default Category;
