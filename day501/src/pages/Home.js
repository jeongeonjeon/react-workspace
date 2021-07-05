import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                메인페이지입니다<br />
                <button onClick={()=> {
                    // window.location.href="/page1";
                    this.props.history.push("/page1");
                }}>page1으로 이동</button>
                <button onClick={()=> {
                    this.props.history.push("/page1/10");
                }}>page1/10으로 이동</button>
                <button onClick={()=> {
                    this.props.history.push("/page1?no=10&type=notice");
                }}>page1?no=10&type=notice으로 이동</button>
            </div>
        );
    }
}

export default Home;