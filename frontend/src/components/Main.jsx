import React from 'react'
import Services from '../pages/Services'
import Analytics from '../pages/Analytixs'
import Hero from '../pages/Hero'
const Main = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white"> {/* Add dark mode classes here */}
      <Hero/>
      <Analytics/>
      <Services/>
    </div>
  )
}

export default Main
