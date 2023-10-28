// import { FloatButton } from "antd"
import React from "react"

import Head from "./Block/head"
import Text from "./Block/text"
import FloatB from "./Block/floatbt"

// const FloatB: React.FC = () => <FloatButton onClick={() => console.log('click')} />;

export default function Home() {
   return (
      <main>
         <Head />
         <Text />
         <FloatB />
      </main>
   )
}
