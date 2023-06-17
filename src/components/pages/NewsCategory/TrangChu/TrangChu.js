import React, { useContext, useState } from "react";
import css from "./TrangChu.module.scss";
import { useRssFeed } from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import { Link } from "react-router-dom";
import { handleString } from "../../../toolkit/handleString";
import SearchContext from "../../Header/SearchContext";
import qc_tiger from "../TrangChu/img/qc_tiger.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const tabs = DataSideBar;

function TrangChu() {
  const [typeVHGT, setType] = useState("chuyen-cua-sao-1105");
  const [typeTT, setTypeTT] = useState("xa-hoi-1003");
  const [typeTG, setTypeTG] = useState("diem-nong-1061");
  const [typeNN, setTypeNN] = useState("thi-truong-nong-san-1123");
  const [typeTTh, setTypeTTh] = useState("bong-da-1036");
  const [typePL, setTypePL] = useState("an-ninh-trat-tu-1068");
  //nhận vào một thể loại lấy ra ds
  const feed = useRssFeed(typeVHGT);
  const feedTT = useRssFeed(typeTT);
  const feedTG = useRssFeed(typeTG);
  const feedNN = useRssFeed(typeNN);
  const feedTTh = useRssFeed(typeTTh);
  const feedPL = useRssFeed(typePL);

  const { searchTerm } = useContext(SearchContext);

  //VHGT
  const filteredFeed = feed.filter((post) => {
    
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });


  //Tin Tuc
  const filteredFeedTT = feedTT.filter((post) => {
    
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });

  //The Gioi
  const filteredFeedTG = feedTG.filter((post) => {
    
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });

  //Nong Nghiep
  const filteredFeedNN = feedNN.filter((post) => {
    
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });

  //The Thao
  const filteredFeedTTh = feedTTh.filter((post) => {
    
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });

  //Phap Luat
  const filteredFeedPL = feedPL.filter((post) => {
    
    const postTitle = post.title.toLowerCase();
    const postDescription = post.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      postTitle.includes(searchTermLowerCase) ||
      postDescription.includes(searchTermLowerCase)
    );
  });

  const listTitle = filteredFeed.slice(0,4);
  const listTT = filteredFeedTT.slice(0,5);
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
      {/* Quang cao */}
      <div className={css["widget"]}>
      <div className={css["title-top"]}>
         Thực phẩm & Đồ uống
      </div>
      <div className={css["item"]}>
        <div className={css["box-img"]}>
          <img className={css["image-item"]}
                  src={qc_tiger}
          />
        </div>
        <div className={css["box-title"]}>
          <a href="https://www.facebook.com/TuborgVietnam">
          <div className={css["wrap-title-news"]}>
            <h3 className={css["count"]}>Nghiêng Chiều Nào Vui Chiều Đó </h3>
              <div className={css["comment-wrap"]}>
                <FontAwesomeIcon icon={faComments} />
              </div>
          </div>
          </a>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className={css["arrow"]}></div>

    {/* part2 TinTuc */}
    <div className="part-2">
      <div className={css["title-top"]}>Tin Tức</div>
      <ul>
      {listTT.map((post, index) => (
        <Link
        style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
        >             
            <li className={css["item-boxlist"]}>
              <img className={css["image-item"]}
                      src={post.imageUrl}
                      alt={post.title}
              />
              <div className={css["title-box"]}>
                <div className={css["wrap-title-news"]}>
                  <h3 className={css["small-title"]}>
                    {post.title}
                  </h3>
                  <p>{post.description}</p>
                  <p className={css["pub-date"]}>{post.pubDate}</p>
                </div>
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
