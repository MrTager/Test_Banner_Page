import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useTranslation } from "react-i18next";
import './index.scss'


interface Iprops {
    size?: string
}
const Banner: React.FunctionComponent<Iprops> = function (Props) {
    const { t, i18n } = useTranslation();
    const [time, setTime] = useState(new Date())
    const [percentage, setPercentage] = useState(30)
    const [h, setH] = useState("23");
    const [m, setM] = useState("23");
    const [s, setS] = useState("23");

    const downTime = () => {
        let oDate = new Date();
        let oldTime = oDate.getTime();
        let newTime = time.getTime() + 24 * 60 * 60 * 1000;
        let second = Math.floor((newTime - oldTime) / 1000);
        let day = Math.floor(second / 86400);
        second = second % 86400;
        let hour = Math.floor(second / 3600);
        second %= 3600;
        let minute = Math.floor(second / 60);
        second %= 60;
        setH(tow(hour))
        setM(tow(minute))
        setS(tow(second))
    }
    const tow = (n: any) => {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }
    useLayoutEffect(() => {
        setInterval(() => {
            downTime();
        }, 1000)
    }, [1])

    return <div className='contianer'>
        <div className='box1'>
        </div>
        <div className='box2'>
            <p>{t("enjoyNowYour")}</p>    {/**多语言示例 */}
            <p>favorite brands with</p>
            <p style={{ fontSize: 40 }}>{percentage}% off</p>
        </div>
        <div className='box3'>
            <div className='time' style={{ color: 'white'}}><div style={{marginRight:10}}>{'Ends in '}</div>{h}h {m}m {s}s </div>
            <div className='detail'>
                <div className='d1'>
                    <p>{percentage}%</p>
                    <p>OFF</p>
                </div>
                <div className='d2'>
                    <p>Welcome Coupon</p>
                    <button style={{ backgroundColor: 'black', color: 'white', width: 200, height: 30 }}>I want it</button>
                    <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="zh">中文</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
}


export default Banner;