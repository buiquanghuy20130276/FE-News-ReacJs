import React, {useState} from 'react';
import 'tippy.js/dist/tippy.css';

import style from './Footer.module.scss'
import FooterData from "./FooterData";
import HeaderData from "../Header/HeaderData";
import TinTucData from "../NewsCategory/TinTuc/data/SideBarData";
import TheGioiData from "../NewsCategory/TheGioi/data/SideBarData";
import NhaNongData from "../NewsCategory/NongNghiep/data/SideBarData";
import TheThaoData from "../NewsCategory/TheThao/data/SideBarData";
import PhapLuatData from "../NewsCategory/PhapLuat/data/SideBarData";
import KinhTeData from "../NewsCategory/KinhTe/data/SideBarData";
import VHGTData from "../NewsCategory/VhGt/data/SideBarData";
import ChuyenDongSoData from "../NewsCategory/ChuyenDongSo/data/SideBarData";
import CongNgheData from "../NewsCategory/CongNghe/data/SideBarData";
import DoiSongData from "../NewsCategory/DoiSong/data/SideBarData";
import GiaoDucData from "../NewsCategory/GiaoDuc/data/SideBarData";
import {useRssFeed} from "../../../../src/data/useRssFeed";
import {Link} from "react-router-dom";

export default function Footer() {
    const [type, setType] = useState('');
    const [active, setActive] = useState('');
    return (
        <div>
            <div className={style['wrapper']}>
            <div className={style['logo']}>
                <img src="https://static.mediacdn.vn/danviet/web_images/danviet-logo.png"
                     alt=""/>
                <ul className={style['list-item']}>{FooterData.map((data, index) => (
                    <Link to={data.path} className={data.path===active ? style['item-active']:style['item']}>
                        <li key={index}>
                            {data.name}
                        </li>
                    </Link>
                ))}
                </ul>
            </div> 
        </div>
    <div className={style['MenuBottom']}>
      <div>
        <div className={style['framBox']}>

        <div className={style['footer-part']}>
        <div className={style['size']}>
            <h5 className='text-uppercase titleMenu'>Tin Tức</h5>

            <ul className='list-unstyled mb-0'>
            {TinTucData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className={style['size']}>
            <h5 className='text-uppercase'>Thế Giới</h5>

            <ul className='list-unstyled mb-0'>
            {TheGioiData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

        <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Nhà Nông</h5>

            <ul className='list-unstyled'>
            {NhaNongData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

        <div className={style['size']}>
            <h5 className='text-uppercase'>Thể Thao</h5>

            <ul className='list-unstyled mb-0'>
            {TheThaoData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

        <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Pháp Luật</h5>

            <ul className='list-unstyled'>
            {PhapLuatData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>

          <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Kinh tế</h5>

            <ul className='list-unstyled'>
            {KinhTeData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>
        </div>
        <div className={style['footer-part']}>
        <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Văn hóa - Giải trí</h5>

            <ul className='list-unstyled'>
            {VHGTData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>
          <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Đời sống</h5>

            <ul className='list-unstyled'>
            {DoiSongData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>
          <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Chuyển Động Số</h5>

            <ul className='list-unstyled'>
            {ChuyenDongSoData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>
          <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Công Nghệ</h5>

            <ul className='list-unstyled'>
            {CongNgheData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>
          <div className={style['size']}>
            <h5 className='text-uppercase mb-0'>Giáo Dục</h5>

            <ul className='list-unstyled'>
            {GiaoDucData.map((dataHeader, index) => (
                    <Link to={dataHeader.path}  className={dataHeader.path===active ? style['item-active']:style['item']} 
                    onClick={()=>
                        {setActive(dataHeader.path),
                            setType(dataHeader.title)}
                    }>
                        <li key={index}>
                            {dataHeader.title}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className={style['info']}>
        <div className={style['info-left']}>
           <div>
           <span className={style['font-style']}>Trụ sở: </span>
           13 Đường Thụy Khuê, Quận Tây Hồ, Hà Nội
           </div>

           <div>
           <span className={style['font-style']}>Tòa soạn và trị sự: </span>
           Lô E2, Dương Đình Nghệ, Quận Cầu Giấy, Hà Nội
           </div>

           <div>
           <span className={style['font-style']}>Điện thoại: </span>
           (84-24) 38472263
           </div>

           <div>
           <span className={style['font-style']}>Email: </span>
           toasoan@danviet.vn
           </div>

           <div>
           <span className={style['font-style']}>Đường dây nóng: </span>
           0857.835.666
           </div>

           <div >
           <span className={style['font-style']}>Liên hệ quảng cáo: </span>
            <a href='https://danviet.vn/' title='liên hệ quảng cáo' style={{color: '#6c6e70'}}>0329298892</a>
           </div>
        </div>
        <div className={style['info-right']}>
            <div className={style['title-bold']}>
                <span>Báo điện tử của Trung ương Hội Nông dân Việt Nam</span>
            </div>
            <div className={style['arrow']}></div>

            <div>
            <span className={style['font-style']}>Tổng Biên tập: </span>
            LƯU QUANG ĐỊNH
            </div>

            <div>
            <span className={style['font-style']}>Phó Tổng Biên tập: </span>
            Phan Huy Hà (Thường trực), Lưu Phan, Nguyễn Văn Hoài
            </div>

            <div>
                <span>Giấy phép số 115/GP-BTTTT cấp ngày 01/3/2022</span>
            </div>
        </div>
    </div>
    </div>
    
    </div>
        
    );
}