import * as React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ContractArea from './ContractArea';

interface ILegaleseDialogProps {
  muted?: boolean;
  title: string;
}

const LegaleseDialog: React.FC<ILegaleseDialogProps> = (props) => {
  const { title, muted, children } = props;

  const [show, setShow] = useState(false);

  const classes = muted ? 'text-muted' : '';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='link' onClick={handleShow} size='sm' className={`p-0 ${classes}`}>
        {title}
      </Button>

      <Modal show={show} size='lg' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContractArea>{children}</ContractArea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className='btn-accent-secondary' block>
            I understand
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LegaleseDialog;
