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
            <div className="">
               <div className="card-begin flex">
                  <div className="p-10 w-60">
                     <p style={Style.Introduce_Title} className=" font-semibold">或许是？</p>
                     {/* <p style={Style.Introduce_Text} className=" indent-zh">
                     Kisrea（氢域）团队成立于2017年4月1日，
                     是一个主张以高新技术为主要发展目的的团队，
                     我们主张团员之间和谐友爱、平等互惠、互帮互助。
                     我们是一个自上而下的管理方式的团队，
                     我们平等地对待团队中的任何一位成员。</p> */}
                     <p style={Style.Introduce_Text} className=" indent-zh">氢域团队创建于2017年，以高新技术为主发展目标。倡导友爱、互惠、互助，实行自上而下的平等管理，尊重每位成员。</p>
                  </div>
                  <svg className="w-40" xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="600" height="400" viewBox="0 0 602.2888689927404 619.6361408351877">
                     <g xmlns="http://www.w3.org/2000/svg" transform="matrix(0.862032949924469,-0.5068521499633789,0.5085294246673584,0.8610445857048035,-108.25709235503763,29.58119705349901)"><path d="M89.91,399.532651629945L89.91,424.322651629945L309.32,424.322651629945L309.32,399.532651629945L89.91,399.532651629945ZM98.05,327.24965162994505C80.29,359.94265162994503,49.58,391.392651629945,18.87,411.74265162994504C25.9,416.922651629945,38.48,427.652651629945,43.66,433.572651629945C61.42,420.25265162994503,80.29,402.49265162994504,96.94,382.512651629945L334.11,382.512651629945L334.11,356.98265162994505L116.55,356.98265162994505C120.99,350.66965162994506,125.06,343.974651629945,128.76,337.28565162994505L98.05,327.24965162994505ZM41.07,443.93265162994504L41.07,470.202651629945L265.66,470.202651629945C266.77,585.642651629945,276.39,670.742651629945,321.53,670.742651629945C344.84,670.742651629945,355.2,658.532651629945,359.27,610.8026516299451C351.13,607.8426516299451,340.4,601.5526516299451,333.37,594.892651629945C332.26,625.972651629945,329.67,638.922651629945,324.12,638.922651629945C303.77,639.2926516299451,296,558.262651629945,298.22,443.93265162994504L41.07,443.93265162994504ZM64.01,581.5726516299451L64.01,607.472651629945L137.27,607.472651629945L137.27,638.5526516299451L33.3,638.5526516299451L33.3,665.5626516299451L270.47,665.5626516299451L270.47,638.5526516299451L169.09,638.5526516299451L169.09,607.472651629945L239.76,607.472651629945L239.76,581.5726516299451L64.01,581.5726516299451ZM62.53,487.962651629945L62.53,512.752651629945L179.82,512.752651629945C143.56,535.3226516299451,85.1,548.272651629945,30.34,553.0826516299451C35.52,559.742651629945,42.18,571.212651629945,45.51,578.982651629945C84.36,574.172651629945,124.69,565.662651629945,159.47,552.3426516299451C190.92,559.742651629945,228.66,571.5826516299451,249.75,581.202651629945L268.99,559.002651629945C250.86,551.972651629945,222,542.722651629945,194.62,535.692651629945C212.01,525.702651629945,226.81,513.862651629945,237.91,499.43265162994504L216.82,486.48265162994505L210.53,487.962651629945L62.53,487.962651629945Z" fill="#EFEFEF" fill-opacity="1" /></g>
                  </svg>
               </div>

               <div className="card p-10 pt-10 relative">
                  <p style={{ fontSize: 'calc(3.3*var(--p10))', color: 'black' }}><span style={{ fontSize: '80px', color: 'black' }}>“</span>真正的科研应该是勇于质疑，拥抱改变的。</p>
                  <p className="absolute bottom-0 right-0 pr-14 pb-10 text-black text-2xl">@Zitons</p>
               </div>
            </div>

         </div>
      </section >
   )
}
export default Text;