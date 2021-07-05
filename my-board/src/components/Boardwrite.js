import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import * as BoardService from '../services/BoardService';

class Boardwrite extends Component {
    state = {
        title : '',
        writer : '',
        content : ''
    }

    handleEvent = (e) => {
        // console.log([e.target.name], e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    doSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        BoardService.getBoardWrite().then(response => {
            // console.log(response);
        });
    }

    render() {
        return (
            <div>
                <h2>게시판 등록폼</h2>
                <Form onSubmit={this.doSubmit}>
                    <FormGroup>
                        <Label for="title">제목</Label>
                        <Input type="title" name="title" id="title" onChange = {this.handleEvent}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="writer">작성자</Label>
                        <Input type="writer" name="writer" id="writer" onChange = {this.handleEvent} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">내용</Label>
                        <Input type="content" name="content" id="content" onChange = {this.handleEvent} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Boardwrite;