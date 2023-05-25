import React, { useContext, useState } from "react";
import style from "./TrangChu.module.scss";
import { useRssFeed } from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import { Link } from "react-router-dom";
import { handleString } from "../../../toolkit/handleString";
import SearchContext from "../../Header/SearchContext";
import './TrangChu.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = DataSideBar;

function TrangChu() {
  const [title, setTitle] = useState("Chuyện của sao");
  const [type, setType] = useState("chuyen-cua-sao-1105");
  const feed = useRssFeed(type);
  const { searchTerm } = useContext(SearchContext);
  const filteredFeed = feed.filter((post) => {
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });

  let settings = {
    dots: false,
    infiniti: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className={style["wrapper"]}>
      <div className={style["section-specialty"]}>
        <div className={style["specialty-content"]}>
          <Slider {...settings}>
            <div className={style['img-customize']}>
              <h3>1</h3>
            </div>
            <div className={style['img-customize']}>
              <h3>2</h3>
            </div>
            <div className={style['img-customize']}>
              <h3>3</h3>
            </div>
            <div className={style['img-customize']}>
              <h3>4</h3>
            </div>
            <div className={style['img-customize']}>
              <h3>5</h3>
            </div>
            <div className={style['img-customize']}>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
      <div className={style["box-new"]}>
        <ul className={style["content-list"]}>
          {filteredFeed.map((post, index) => (
            <Link
              style={{ color: "#737373" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >
              <li className={style["content-item"]}>
                <img
                  className={style["img-content-item"]}
                  src={post.imageUrl}
                  alt={post.title}
                />
                <div className={style["block-content-item"]}>
                  <h3 className={style["content-item-title"]}>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrangChu;
