'use client'
import React from "react"
import Image from "next/image"

import Kisrea from '../image/Kisrea.png'

const Style = {
   Main: {
      backgroundColor: 'var(--main-color)',
      width: 'auto',
      height: 'calc(40 * var(--p10))'
   },
   Title_Text_First: {
      fontSize: 'calc( 4 * var(--p10))',
   },
   Title_Text_Second: {
      fontSize: 'calc( 2.3 * var(--p10))',
   },
   Begin_text_First: {
      fontSize: 'calc( 3.6 * var(--p10))',
   },
   Introduce_Title: {
      fontSize: 'calc(2.3 * var(--p10))',
      color: 'var(--gray)'
   },
   Introduce_Text: {
      fontSize: 'calc( 2.1 * var(--p10))',
      color: 'black',
      width: '50%'
   },
   imgauto: {
      width: '50%',
      height: '300px'
   },
}
const Text = () => {
   return (
      <section>
         <div style={Style.Main}>
            {/* <div style={Style.main }></div> */}
            <div className=" xl:pt-28">
               <p style={Style.Title_Text_First} className="text-center font-extrabold align-middle">让移动开发成为可能</p>
               <p style={Style.Title_Text_Second} className=" text-center">Kisrea注入新的动力，成就自己</p>
            </div>
         </div>

         <div className="container mx-auto pt-4">
            <h1 style={Style.Begin_text_First} className="font-bold pb-8">刚刚开始</h1>
            <div className="flex space-x-5">
               <div className="card-begin flex">
                  <div className="p-10">
                     <p style={Style.Introduce_Title} className=" font-semibold">或许是？</p>
                     {/* <p style={Style.Introduce_Text} className=" indent-zh">
                     Kisrea（氢域）团队成立于2017年4月1日，
                     是一个主张以高新技术为主要发展目的的团队，
                     我们主张团员之间和谐友爱、平等互惠、互帮互助。
                     我们是一个自上而下的管理方式的团队，
                     我们平等地对待团队中的任何一位成员。</p> */}
                     <p style={Style.Introduce_Text} className=" indent-zh">氢域团队成立于2017年，以高新技术为主发展目标。倡导友爱、互惠、互助，实行自上而下的平等管理，尊重每位团员。</p>
                  </div>
                  <div style={Style.imgauto} className=' absolute'>
                     <Image
                        src={Kisrea}
                        alt="Picture of the author"
                        fill={true}
                     />
                  </div>
               </div>
               {/* <div className="card p-10 relative">
                  <p style={{ fontSize: 'calc(3.3*var(--p10))', color: 'black' }}><span style={{ fontSize: '80px', color: 'black' }}>“</span>真正的科研应该是勇于质疑，拥抱改变的。</p>
                  <p className="absolute bottom-0 right-0 pr-14 pb-10 text-black text-2xl">@Zitons</p>
               </div> */}
            </div>

         </div>
      </section >
   )
}
export default Text;