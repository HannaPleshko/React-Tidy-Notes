import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import style from './Content.module.scss';
import { useEffect, useState } from 'react';
import ModalTab from '../ModalTab/ModalTab';
import storage from '../../storage/storage.json';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { iTask } from '../Interfaces/Interfaces';

function Content() {
  const [row, setRow] = useState<string[][]>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getDataFromLocaleStorage = () => {
    setRow(storage.map((el: iTask) => Object.values(el)));
  };

  useEffect(() => {
    getDataFromLocaleStorage();
  }, []);

  return (
    <div className={style['wrapper']}>
      <div className={style['content-head']}>
        <h1>Notes</h1>

        <div className={style['icon']}>
          <IconButton color="primary" onClick={handleOpen} aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>

      <TableContainer className={style['content-body']} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {['id', 'title', 'description'].map((el: string) => (
                <TableCell className={style['table-cell']} key={Math.random()}>
                  {el}
                </TableCell>
              ))}
              <TableCell style={{ width: 150, textAlign: 'end' }} className={style['table-cell']}>
                Navigation
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {row?.length
              ? row?.map((row: string[]) => (
                <TableRow className={style['table-row']} key={Math.random()}>
                  {row.map((el: string) => (
                    <TableCell key={Math.random()} component="th" scope="row">{el}</TableCell>
                  ))}
                  <TableCell align="right">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="create">
                      <CreateIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>

      {open ? <ModalTab open={open} handleClose={handleClose} /> : null}
    </div>
  );
}

export default Content;
