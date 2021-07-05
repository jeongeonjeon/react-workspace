import React, { Component } from 'react';
import BoardItem from './BoardItem';
import {Table} from 'reactstrap';
import * as boardService from '../services/BoardService';

class BoardList extends Component {

    state = {
        boardList : []
        /* 
        boardList : [
            {no : 1, title : '제목1', writer : '홍길동', content : '내용1', regDate: new Date().toLocaleDateString()},
            {no : 2, title : '제목2', writer : '홍길동', content : '내용2', regDate: new Date().toLocaleDateString()},
            {no : 3, title : '제목3', writer : '홍길동', content : '내용3', regDate: new Date().toLocaleDateString()},
            {no : 4, title : '제목4', writer : '홍길동', content : '내용4', regDate: new Date().toLocaleDateString()}
        ]
         */
    }
/* 
    constructor(props){
        super(props);
        BoardService.getBoardList();
    }
 */
    componentWillMount() {
        boardService.getBoardList().then(response => {
            console.log(response.data);
            this.setState({
                boardList : response.data
            })
        })
    }
    
    componentWillReceiveProps() {
        boardService.getBoardList().then(response => {
            console.log(response.data);
            this.setState({
                boardList : response.data
            })
        })
    }

    render() {
        const { boardList } = this.state;
        const boards = boardList.map(board => {
            return <BoardItem key={board.no} board={board}></BoardItem>
        });
        return (
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default BoardList;

