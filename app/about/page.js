import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
    <Script>
        {`alert("Welcome to about page");`}
    </Script>
        This is about 
    </div>
  )
}

export default page