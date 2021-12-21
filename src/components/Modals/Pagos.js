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
        PagosModal: false
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
                color="primary"
                 type="button"
                onClick={() => this.toggleModal("PagosModal")}   
                    >
                    <i class="fas fa-file-alt"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.PagosModal}
                    toggle={() => this.toggleModal("PagosModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="PagosModalLabel">
                             Este Cliente tiene un movimiento mensual De:

                             1.200.000 
                        </h5>
{/*                         <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("PagosModal")}
                        >
                            <span aria-hidden={true}>X</span>
                        </button> */}
                        
                    </div>
                    <div className="modal-body"> Movimiento total del Cliente:
                    2.400.000
                    </div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("PagosModal")}
                        >
                            Cerrar
                        </Button>
                        
                    </div>
                </Modal>
            </>
        );
    }
}

export default Modals;
