import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
       <Script>
       {`alert("Welcome to contact page ");`}
       </Script>
        This is contact
    </div>
  )
}

export default page