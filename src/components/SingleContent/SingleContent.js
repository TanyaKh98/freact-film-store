import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  data,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </span>
      <span className="subTitle">{date}</span>

      <ShoppingCartIcon
        className="cart-btn"
        // onClick={() => addProductToCart(data)}
      />
      <FavoriteIcon className="cart-btn1" />
    </ContentModal>
  );
};

export default SingleContent;
