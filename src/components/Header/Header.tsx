import style from './Header.module.scss';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <div className={style['block-nav']}>
      <div className={style['img']}></div>
      {['Notes'].map((el, index) => (
        <HeaderItem key={index} title={el} />
      ))}
    </div>
  );
}
export default Header;
