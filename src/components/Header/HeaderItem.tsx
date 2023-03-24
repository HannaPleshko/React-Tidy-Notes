import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Btn = styled(Button)`
  color: #1667b8;
  width: 100px;

  &:hover {
    position: relative;
    top: 1px;
  }
`;

interface iHeaderItem {
  title: string;
}

const HeaderItem: React.FC<iHeaderItem> = ({ title }) => {
  return (
    <div>
      <Btn>{title}</Btn>
    </div>
  );
}

export default HeaderItem;
