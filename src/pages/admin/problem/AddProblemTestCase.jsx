import React, { useEffect, useRef, useState } from 'react';
import {
    Button, FormGroup, Input, Label, Modal
} from "reactstrap";

const AddProblemTestCase = ({caseAnchor, state}) => {
    const [isOpenModal, setOpenModal] = state
    const handleSave = () => {
        const inputElement = document.getElementById("testInput")
        const outputElement = document.getElementById("testOutput")
        const testCase = {
            input: inputElement.value,
            output: outputElement.value,
        }

        //edit
        if(isOpenModal.input) {
            caseAnchor(c => {
                const indexOf = c.indexOf(x => x.index === isOpenModal.index)
                c.splice(indexOf, 1, {...testCase, index: isOpenModal.index})
                return [...c]
            })
        } 
        //add
        else {
            caseAnchor(c => [...c, {...testCase, index: c.length}])
        }
    }

    return (
        <>
            <Button
                type='button'
                color='primary'
                onClick={() => setOpenModal(true)}
            >
                New
            </Button>
            <Modal
                className="modal-dialog-centered"
                isOpen={Boolean(isOpenModal)}
                toggle={() => setOpenModal(!isOpenModal)}
            >
                <div className="modal-header">
                    <h5 className="modal-title">
                        Add new test case
                    </h5>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setOpenModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <FormGroup row>
                        <Label>Input</Label>
                        <Input
                            id="testInput"
                            placeholder="input"
                            type="textarea"
                            defaultValue={isOpenModal?.input ?? ""}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label>Output</Label>
                        <Input
                            id="testOutput"
                            placeholder="output"
                            type="textarea"
                            defaultValue={isOpenModal?.output ?? ""}
                        />
                    </FormGroup>
                </div>
                <div className="modal-footer">
                    <Button
                        color="secondary"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setOpenModal(false)}
                    >
                        Kapat
                    </Button>
                    <Button color="primary" type="button" onClick={handleSave}>
                        Kaydet
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default React.memo(AddProblemTestCase)