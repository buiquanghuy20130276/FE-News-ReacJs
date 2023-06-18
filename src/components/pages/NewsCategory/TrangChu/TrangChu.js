import React, { useContext, useRef, useState, useEffect } from "react";
import css from "./TrangChu.module.scss";
import { useRssFeed } from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import ItemListSmall from "../../../layouts/ItemNews/ItemListSmall";
import { Link } from "react-router-dom";
import { handleString } from "../../../toolkit/handleString";
import SearchContext from "../../Header/SearchContext";
import qc_tiger from "../TrangChu/img/qc_tiger.png";
import qc_myPham from "../TrangChu/img/lazada.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faCity} from "@fortawesome/free-solid-svg-icons";
import {faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";
import data from "../KinhTe/data/SideBarData";
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
  const [typeKT, setTypeKT] = useState("goc-nhin-chuyen-gia-1127");

  const [isVisible, setIsVisible] = useState(false);

  //nhận vào một thể loại lấy ra ds
  const feed = useRssFeed(typeVHGT);
  const feedTT = useRssFeed(typeTT);
  const feedTG = useRssFeed(typeTG);
  const feedNN = useRssFeed(typeNN);
  const feedTTh = useRssFeed(typeTTh);
  const feedPL = useRssFeed(typePL);
  const feedKT = useRssFeed(typeKT);

  const { searchTerm } = useContext(SearchContext);
  //=============================================================================================
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
//=============================================================================================
  const listTitle = filteredFeed.slice(0,4);
  const listTT = filteredFeedTT.slice(0,5);
  const listTG = filteredFeedTG.slice(0,5);
  const listNN = filteredFeedNN.slice(0,5);
  const listTTh = filteredFeedTTh.slice(0,5);
  const listPL = filteredFeedPL.slice(0,6);

  // de xuat báo kinh tế
  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    setTypeKT(selectedPath);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // set TimeSwiper
  const swiperRef = useRef(null);
  console.log(window.scrollY);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const timer = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
        swiper.on('reachEnd', () => {
          swiper.slideToLoop(0);
        });
      }
      
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={css["wrapper"]}>
      <div className={css["wrapperHome"]}>
        <div className={css["swipper-size"]}>
        <Swiper
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {listTitle.map((post, index) => (
        <SwiperSlide key={index}>
          <div className={css['swiper-size']}>
            <Link
              style={{ color: '#333' }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >
              <div className={css['block-content']}>
                <h3 className={css['content-title']}>{post.title}</h3>
              </div>
              <img
                className={css['image-item']}
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

  <div className={css["box"]}>
    <div className={css["container-two"]}>
      {/* part2 TinTuc */}
      <div className={css["part-2"]}>
        <div className={css["title-top"]}>Tin Tức</div>
          <ul className={css["home-boxlist"]}>
            {listTT.map((post, index) => (
              <Link
                style={{ color: "#333" }}
                key={index}
                to={`/detail/${handleString(post.link)}`}
              >             
              <li className={css["item-boxlist"]}>
                <img className={css["image-item-list"]}
                      src={post.imageUrl}
                      alt={post.title}
                />
                <div className={css["title-box"]}>
                  <div className={css["wrap-title-news"]}>
                    <h3 className={css["small-title-XL"]}>
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

      {/* The Gioi */}
      <div className={css["part-2"]}>
        <div className={css["title-top"]}>Thế Giới</div>
        <ul className={css["home-boxlist"]}>
          {listTG.map((post, index) => (
            <Link
              style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >             
              <li className={css["item-boxlist"]}>
                <img className={css["image-item-list"]}
                      src={post.imageUrl}
                      alt={post.title}
                />
                <div className={css["title-box"]}>
                  <div className={css["wrap-title-news"]}>
                    <h3 className={css["small-title-XL"]}>
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

      {/* Nông Nghiệp */}
      <div className={css["part-2"]}>
        <div className={css["title-top"]}>Nông Nghiệp</div>
          <ul className={css["home-boxlist"]}>
          {listNN.map((post, index) => (
            <Link
              style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >             
              <li className={css["item-boxlist"]}>
                <img className={css["image-item-list"]}
                      src={post.imageUrl}
                      alt={post.title}
                />
                <div className={css["title-box"]}>
                  <div className={css["wrap-title-news"]}>
                    <h3 className={css["small-title-XL"]}>
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

      {/* Thể Thao */}
      <div className={css["part-2"]}>
        <div className={css["title-top"]}>Thể Thao</div>
          <ul className={css["home-boxlist"]}>
            {listTTh.map((post, index) => (
            <Link
              style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >             
              <li className={css["item-boxlist"]}>
                <img className={css["image-item-list"]}
                      src={post.imageUrl}
                      alt={post.title}
                />
                <div className={css["title-box"]}>
                  <div className={css["wrap-title-news"]}>
                    <h3 className={css["small-title-XL"]}>
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
    
      {/* Pháp Luật */}
      <div className={css["part-2"]}>
        <div className={css["title-top"]}>Pháp Luật</div>
        <ul className={css["home-boxlist"]}>
          {listPL.map((post, index) => (
            <Link
              style={{ color: "#333" }}
              key={index}
              to={`/detail/${handleString(post.link)}`}
            >             
              <li className={css["item-boxlist"]}>
                <img className={css["image-item-list"]}
                      src={post.imageUrl}
                      alt={post.title}
                />
                <div className={css["title-box"]}>
                  <div className={css["wrap-title-news"]}>
                    <h3 className={css["small-title-XL"]}>
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

    <div className={css["adscode"]}>
      <div className={css["advertise"]}>
        <span>
          Quảng Cáo 
        </span>
      </div>
      {/* Quang cao */}
      <div className={css["widget"]}>
        <div className={css["title-top"]}>
          Săn Sell & Mua Sắm
        </div>
        <div className={css["item"]}>
          <div className={css["box-img"]}>
            <img className={css["image-item"]}
                  src={qc_myPham}
            />
          </div>
          <div className={css["box-title"]}>
            <a href="https://www.lazada.vn/shop/unilever-cham-soc-ve-dep">
              <div className={css["wrap-title-news"]}>
                <h3 className={css["count"]}>Unilever Chăm Sóc Vẻ Đẹp - Sale giảm sốc giữa tháng</h3>
                <div className={css["comment-wrap"]}>
                  <FontAwesomeIcon icon={faComments} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    {/* select */}
    <div className={css["bm_AR"]}>
      <div className={css["bm_IY"]}>
        <h3 className={css["bm_H"]}><FontAwesomeIcon icon={faCity}/> Kinh Tế</h3>
      </div>
      <select value={typeKT} onChange={handleSelectChange}>
        {
          data.map((opt, index)=>
          <option 
            key={index}
            value={opt.type}
           >
            {opt.title}
          </option>)
        }
      </select>
      <ItemListSmall data={feedKT}/>
    </div>
    </div>
    </div>
    {isVisible && (
      <button onClick={scrollToTop} 
        style={
         {
          position: 'fixed',
          right: 20,
          bottom: 20,
          background: '#008837',
          }
        }
      >
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </button>
    )}
    </div>
  );
}

export default TrangChu;
