import AnnouncementBar from '@/components/anoucementBar'
import { EmailInput } from '@/components/emailInput'
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
      <AnnouncementBar />
      <div className='mt-12'>
      <Navbar />
      {children}
      {/* <div className="text-center justify-center">
      <EmailInput />
      </div> */}
      <div className="">
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default layout
