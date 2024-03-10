import Footer from '@/components/footer'
import Navbar from '@/components/nav-bar'
import React from 'react'


interface Props {
    children: React.ReactNode
}
function layout({
  children,
}: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <div className="">
      <Footer />
      </div>
    </div>
  )
}

export default layout
