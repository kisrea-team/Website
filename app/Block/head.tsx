'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Button } from 'antd'

import Kisrea from '../image/Kisrea.png'
const style = {
   header: {
      backgroundColor: 'var(--main-color)',
      width: 'auto',
      height: 64,
   },
   imgauto: {
      width: '7%',
      height: '64px'
   },
   textsize: {
      fontSize: '15px'
   }
}

const Head = () => {
   // useEffect(() => { })
   return (
      <section style={style.header} className='header'>
         <div className='flex items-center'>
            <div style={style.imgauto} className=' relative'>
               <Image
                  src={Kisrea}
                  alt="Picture of the author"
                  fill={true}
               />
            </div>
            <div className='grow'></div>
            <span className=' pr-10'>
               <Button style={style.textsize} size='large' type='text' className='buttonsize'>团队简介</Button>
               <Button style={style.textsize} size='large' type='text' className='buttonsize'>主要成员</Button>
               <Button style={style.textsize} size='large' type='text' className='buttonsize'>团队项目</Button>
               <Button style={style.textsize} size='large' type='text' className='buttonsize'>加入我们</Button>
            </span>
         </div>
      </section>
   )
}
export default Head;