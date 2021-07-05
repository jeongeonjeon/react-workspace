import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as boardService from '../services/BoardService'

class BoardWriteM extends Component {

    state = {
        title: '',
        writer: '',
        content: ''
    }

    handleEvent = (e) => {
        // console.log([e.target.name], e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    doSubmit = (e) => {
        // console.log(this.state);
        e.preventDefault();
        boardService.getBoardWrite(this.state).then(response => {
            this.props.onDone();
        })
    }

    render() {
        return (
            <div>
                <hr />
                <h2>게시판 등록</h2>
                <hr />
                <Form onSubmit={this.doSubmit}>
                    <FormGroup>
                        <Label for="title">제목</Label>
                        <Input type="text" name="title" id="title" onChange={this.handleEvent} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="writer">작성자</Label>
                        <Input type="text" name="writer" id="writer" onChange={this.handleEvent} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">내용</Label>
                        <Input type="textarea" name="content" id="content" onChange={this.handleEvent} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default BoardWriteM;