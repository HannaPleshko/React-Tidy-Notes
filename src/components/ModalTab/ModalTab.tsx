import { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Modal, TextField } from '@mui/material';
import style from './ModalTab.module.scss';
import { writeJsonFile } from 'write-json-file';
import fs, { promises as fsPromises } from 'node:fs';
import path from 'node:path';

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

interface iModalTab {
  open: boolean;
  handleClose: () => void;
}

const ModalTab: React.FC<iModalTab> = ({ open, handleClose }) => {
  const [inp, setInp] = useState({});

  const writeTaskToJSON = async () => {
    // console.log(__dirname + 'src/storage/storage.json');
    console.log(inp);

    // await fsPromises.mkdir(path.dirname('../../storage/storage.json'), { recursive: true });

    // await writeJsonFile('../../storage/storage.json', JSON.stringify({ inp }));

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
            <Button onClick={writeTaskToJSON} variant="outlined">CREATE</Button>
          </div>

        </div>
      </Box>
    </Modal>

  );
}

export default ModalTab;
