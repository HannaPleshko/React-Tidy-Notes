import { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Modal, TextField } from '@mui/material';
import style from './ModalTab.module.scss';
import { addToLocaleStorage, readFromLocaleStorage } from '../../utils/localeStorage';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalTab: React.FC<any> = ({ setTable, open, handleClose }) => {
  const [inp, setInp] = useState({});

  const writeTaskToLocaleStorage = () => {
    debugger

    const data = JSON.parse(localStorage.getItem('storage') ?? '')

    data.push({ id: data.length + 1, title: inp })

    localStorage.setItem('storage', JSON.stringify(data));

    setTable({})
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <div className={style['wrapper']}>
          <h1>CREATE TASK</h1>
          <TextField
            onChange={(e) => setInp(e.target.value)}
            id="standard-basic"
            variant="standard"
          />
          <div>
            <Button onClick={writeTaskToLocaleStorage} variant="outlined">CREATE</Button>
          </div>

        </div>
      </Box>
    </Modal>

  );
}

export default ModalTab;
