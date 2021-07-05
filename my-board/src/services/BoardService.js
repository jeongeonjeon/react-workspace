/* 
    axios를 이용하여 서버에서 게시판관련 CRUD통신을 위한 파일
 */
import axios from 'axios';

export const getBoardList = () => {
    console.log('boardSevice getBoardList() 호출...');
    return axios.get('http://localhost:8888/ajax/board');
}

export const getBoardWrite = (board) => {
    console.log('boardService getBoardWrite() 호출', board);
    return axios.post('http://localhost:8888/ajax/board', board);
}