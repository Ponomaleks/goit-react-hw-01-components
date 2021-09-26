import s from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <span className={s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}
