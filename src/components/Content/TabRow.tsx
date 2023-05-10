import { TableCell } from '@mui/material/';

const TabRow: React.FC<any> = ({ el }) => {
  return (
    <TableCell component="th" scope="row">
      {el}
    </TableCell>
  );
};

export default TabRow;
