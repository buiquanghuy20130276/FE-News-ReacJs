import React, { useContext, useState } from "react";
import css from "./TrangChu.module.scss";
import { useRssFeed } from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import { Link } from "react-router-dom";
import { handleString } from "../../../toolkit/handleString";
import SearchContext from "../../Header/SearchContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const tabs = DataSideBar;

function TrangChu() {
  const [type, setType] = useState("chuyen-cua-sao-1105");
  //nhận vào một thể loại lấy ra ds
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
  const listTitle = filteredFeed.slice(0,4)
  
  return (
    <div className={css["wrapper"]}>
      <div className={css["wrapperHome"]}>
        <div className={css["swipper-size"]}>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {filteredFeed.map((post, index) => (
        <SwiperSlide  key={index}>
          <div className={css['swiper-size']}>
          <Link
              style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >
                <div className={css["block-content"]}>
                  <h3 className={css["content-title"]}>{post.title}</h3>
                </div>
                <img className={css["image-item"]}
                  src={post.imageUrl}
                  alt={post.title}
                  />
            </Link>
          </div>
        </SwiperSlide>
            
          ))}
     
    </Swiper>
        </div>
    <div className={css["content-note"]}>
      <ul className={css["homehl-small"]}>
      <li className={css["item count-cmt loadedcmt"]}>
        <div className={css["wrap-title-news"]}>
        {listTitle.map((post, index) => (
            <Link
              style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >
              <h3 className={css["small-title"]}>
                {post.title}
              </h3>
              <div className={css["box-title"]}></div>
            </Link>
            ))}
        </div>
      </li>
      </ul>
    </div>
    
    
    <div className={css["adscode"]}>
      <div className={css["advertise"]}>
        <span>
          Quảng Cáo 
        </span>
      </div>
    </div>
    </div>
    <div className={css["arrow"]}></div>

    </div>
  );
}

export default TrangChu;
