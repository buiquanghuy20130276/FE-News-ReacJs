import style from './sidebar.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
const sidebarData=['Ngày mới','Chính trị','Xã hội','Phóng sự']
function SideBar(){
    return(
        <div className={style['wrapper']}>
            <ul className={style['list-item']}>{sidebarData.map((title,index)=>(
                <li className={style['item']} key={index}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                    <span>{title}</span>
                </li>
            ))}

            </ul>
        </div>
    )
}
export default SideBar