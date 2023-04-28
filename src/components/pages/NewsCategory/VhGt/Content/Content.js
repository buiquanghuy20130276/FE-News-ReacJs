import React from 'react';

import style from './Content.module.css'
import DanhMuc from "../../../../layouts/DanhMuc";
function Content() {
    return (
        <div className={style['wrapper']}>
            <DanhMuc/>
        </div>
    )
}

export default Content