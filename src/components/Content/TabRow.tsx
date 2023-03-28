import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, IconButton } from '@mui/material/';
import CreateIcon from '@mui/icons-material/Create';

const TabRow: React.FC<any> = ({ el, row, index }) => {
  return (
    <>
      <TableCell component="th" scope="row">
        {el}
      </TableCell>

      {index === row.length - 1 ? (
        <TableCell align="right" component="th" scope="row">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="create">
            <CreateIcon />
          </IconButton>
        </TableCell>
      ) : null}
    </>
  );
}

export default TabRow;
