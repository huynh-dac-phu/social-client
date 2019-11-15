import React from "react";
import MyButton from "../../util/MyButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../../redux/actions/dataAction";
//Icon
import LikeIcon from "@material-ui/icons/Favorite";
import LikeIconBorder from "@material-ui/icons/FavoriteBorder";

const LikeButton = props => {
  const {
    screamId,
    user: { authenticated, likes },
    likeScream,
    unlikeScream
  } = props;

  const likedScream = () => {
    if (likes && likes.find(like => like.screamId === screamId)) return true;
    return false;
  };

  const likeAction = () => {
    likeScream(screamId);
  };

  const unlikeAction = () => {
    unlikeScream(screamId);
  };

  const undoLike = (
    <MyButton title="Undo like" placement="bottom" onClick={unlikeAction}>
      <LikeIcon color="primary" />
    </MyButton>
  );

  const Like = (
    <MyButton title="Like" placement="bottom" onClick={likeAction}>
      <LikeIconBorder color="primary" />
    </MyButton>
  );

  return (
    <>
      {!authenticated ? (
        <Link to="/login">
          <MyButton title="Like" placement="bottom">
            <LikeIconBorder color="primary" />
          </MyButton>
        </Link>
      ) : likedScream() ? (
        undoLike
      ) : (
        Like
      )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { likeScream, unlikeScream };

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
