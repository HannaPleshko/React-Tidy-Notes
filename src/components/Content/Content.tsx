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

interface iTable {
  keys?: (string | number)[];
  vals?: (string | number)[][];
}

function Content() {
  const [table, setTable] = useState<iTable>({ keys: [], vals: [] });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = () => {
    const keys = Object.keys(storage[0])
    const vals = storage.map(el => Object.values(el))
    setTable({ keys, vals })
  }

  useEffect(() => {
    getData()
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
              {table?.keys?.map((el) => <StyledTableCell key={Math.random()}>{el}</StyledTableCell>) ?? null}
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableHead>

          <TableBody>

            {table?.vals?.map((row : (string|number)[]) => (
              <StyledTableRow key={Math.random()}>
                {row.map((el: (string | number), index: number) => (
                  <TabRow key={Math.random()} index={index} el={el} row={row} />
                ))}
              </StyledTableRow>
            ))
              ?? null}
          </TableBody>
        </Table>
      </TableContainer>

      {open ? <ModalTab open={open} handleClose={handleClose} /> : null}
    </div>
  );
}

export default Content;
