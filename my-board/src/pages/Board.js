import React, { Component } from 'react';
import BoardList from '../components/BoardList';
import {Button} from 'reactstrap';
import BoardWriteModal from '../components/BoardWriteModal';
 
class Board extends Component {

    state = {
        modal : true
    }

    gotoWrite = () => {
        this.props.history.push('/board/post')
    }

    gotoWriteModal = () => {
        this.setState({
            modal : true
        });
    }

    handleClose = () => {
        this.setState({
            modal :false
        })
    }

    render() {
        console.log(this.state.modal);
        return (
            <div>
                <h2>게시판 목록</h2>     
                <Button outlline color="success" className="mx-auto d-block" onClick={this.gotoWrite}>새글등록</Button>       
                <Button outlline color="success" className="mx-auto d-block" onClick={this.gotoWriteModal}>modal로 추가</Button>                   
                <BoardList />
                <BoardWriteModal flag={this.state.modal} onClose = {this.handleClose}/>
            </div>
        );
    }
}

export default Board;