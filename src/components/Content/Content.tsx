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
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import style from './Content.module.scss';
import TabRow from './TabRow';
import { useEffect, useState } from 'react';
import storage from '../../storage/storage.json';
import ModalTab from '../ModalTab/ModalTab';
import { addToLocaleStorage, readFromLocaleStorage } from '../../utils/localeStorage';

const Icon = styled(AddShoppingCartIcon)`
  color: #1667b8;
`;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f5faff',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:hover': {
    backgroundColor: '#1667b806',
  },
}));


function Content() {
  const [table, setTable] = useState<any>();
  const [dataTable, setdataTable] = useState<any>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getDataFromLocaleStorage = () => {
    debugger
    const data = readFromLocaleStorage()

    const keys = Object.keys(data[0])
    const vals = data.map((el: any) => Object.values(el))

    setdataTable({ keys, vals })
  }

  useEffect(() => {
    getDataFromLocaleStorage()
  }, [table])

  useEffect(() => {
    addToLocaleStorage(storage)
  }, [])

  return (
    <div className={style['wrapper']}>
      <div className={style['content-head']}>
        <h1>Notes</h1>

        <div className={style['img']}>
          <IconButton color="primary" onClick={handleOpen} aria-label="add to shopping cart">
            <Icon />
          </IconButton>
        </div>
      </div>


      <TableContainer component={Paper} sx={{ maxHeight: 350, minWidth: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {dataTable?.keys.length ? dataTable.keys.map((el: any) => <StyledTableCell key={Math.random()}>{el}</StyledTableCell>) : null}
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableHead>

          <TableBody>

            {dataTable?.vals.length ? dataTable?.vals?.map((row: any) => (
              <StyledTableRow key={Math.random()}>
                {row.map((el: any, index: any) => (
                  <TabRow key={Math.random()} index={index} el={el} row={row} />
                ))}
              </StyledTableRow>
            ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>

      {open ? <ModalTab setTable={setTable} open={open} handleClose={handleClose} /> : null}
    </div>
  );
}

export default Content;
