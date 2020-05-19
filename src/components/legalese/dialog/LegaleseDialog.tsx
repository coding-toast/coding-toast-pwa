import * as React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface LegaleseDialogProps {
  title: string
  muted?: boolean
}

const ContractArea: React.FC = (props) => (
  <div style={{ maxHeight: '70vh' }} className="overflow-auto">
    {props.children}
  </div>
)

const LegaleseDialog: React.FC<LegaleseDialogProps> = (props) => {
  const [show, setShow] = useState(false)

  const classes = props.muted ? 'text-muted' : ''

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="link" onClick={handleShow} className={`p-0 ${classes}`}>
        {props.title}
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContractArea>{props.children}</ContractArea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="btn-accent-secondary" block>
            I understand
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LegaleseDialog
