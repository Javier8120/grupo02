import React from "react";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    DropdownItem,
    Col
} from "reactstrap";

class Modals extends React.Component {
    state = {
        DenegarcreditoModal: false
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <>
            <Button
                color="warning"
                 type="button"
                onClick={() => this.toggleModal("DenegarcreditoModal")}   
                    >
                <i class="fas fa-times"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.DenegarcreditoModal}
                    toggle={() => this.toggleModal("DenegarcreditoModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="DenegarcreditoModalLabel">
                             Denegar Credito 
                        </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("DenegarcreditoModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body"> Denegar este Credito?</div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("DenegarcreditoModal")}
                        >
                            No
                        </Button>
                        <Button color="primary" type="button">
                            Denegar
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Modals;
