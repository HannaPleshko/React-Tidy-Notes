import { useState, ChangeEvent } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import style from './ModalTab.module.scss';

interface ModalTabProps {
  open: boolean;
  handleClose: () => void;
};

const ModalTab: React.FC<ModalTabProps> = ({ open, handleClose }) => {
  const [inp, setInp] = useState({});

  const generateTak = () => {
    debugger;

    //   const data = JSON.parse(localStorage.getItem('storage') ?? '')

    //   data.push({ id: data.length + 1, title: inp })

    //   localStorage.setItem('storage', JSON.stringify(data));

    //   setTable({})
    //   handleClose()
  };

  const saveInpValue = (e: ChangeEvent<HTMLInputElement>) => setInp({ ...inp, [e.target.name]: e.target.value })

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={style['wrapper']}>
        <h1>CREATE TASK</h1>

        <div className={style['input']}>
          <TextField name='title' onChange={saveInpValue} variant="standard" />
        </div>
        <div className={style['input']}>
          <TextField name='description' onChange={saveInpValue} variant="standard" />
        </div>

        <div>
          <Button onClick={generateTak} variant="outlined">
            CREATE
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalTab;
