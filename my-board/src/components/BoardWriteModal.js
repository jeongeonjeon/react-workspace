import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BoardWriteM from './BoardWriteM';

class BoardWriteModal extends Component {

    state = {
        modal: this.props.flag
    }

    componentWillReceiveProps() {
        this.toggle();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleDone = () => {
        console.log('handle done()')
        this.props.onClose();
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>새 글 등록</ModalHeader>
                    <ModalBody>
                        <BoardWriteM onDone = {this.handleDone} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default BoardWriteModal;