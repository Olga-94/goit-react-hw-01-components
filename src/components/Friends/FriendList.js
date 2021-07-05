import PropTypes from "prop-types";
import FriendsItem from "./FriendsItem";
import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map((friend) => (
          <li className={s.item} key={friend.id}>
            <FriendsItem
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
