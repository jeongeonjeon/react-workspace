import React from 'react';

const BoardItem = ({board}) => {
    return (
        <tr>
            <th scope="row">{board.no}</th>
            <td>{board.title}</td>
            <td>{board.writer}</td>
            <td>{board.regDate}</td>
        </tr>
    );
};

export default BoardItem;