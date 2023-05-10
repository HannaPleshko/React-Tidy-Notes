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
import TabRow from './TabRow';
import { useEffect, useState } from 'react';
import ModalTab from '../ModalTab/ModalTab';
import srorage from '../../storage/storage.json';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function Content() {
  const [dataTable, setdataTable] = useState<any>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getDataFromLocaleStorage = async () => {
    const keys = Object.keys(srorage[0]);
    const vals = srorage.map((el: any) => Object.values(el));
    setdataTable({ keys, vals });
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
              {dataTable?.keys?.length
                ? dataTable.keys.map((el: any) => (
                    <TableCell className={style['table-cell']} key={Math.random()}>
                      {el}
                    </TableCell>
                  ))
                : null}
              <TableCell style={{ width: 150, textAlign: 'end' }} className={style['table-cell']}>
                Navigation
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataTable?.vals?.length
              ? dataTable.vals?.map((row: any) => (
                  <TableRow className={style['table-row']} key={Math.random()}>
                    {row.map((el: any) => (
                      <TabRow key={Math.random()} el={el} />
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
