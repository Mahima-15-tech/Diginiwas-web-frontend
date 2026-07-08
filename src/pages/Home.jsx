// import React from 'react'

// import HeroSection from './home/HeroSection'
// import DigiNiwasPrpperty from './home/DigiNiwasProperty'
// import NiwasAIFinds from './home/NiwasAiFind'
// import DiginiwasWorks from './home/DigiNiwasWorks'

// import FutureEcosystem from './home/FutureEcosystem'
// import IphoneSection from './home/IphoneSection'
// import ClientSays from './home/ClientSays';
// import MapSection from './home/MapSection'

// const Home = () => {

//   // text-[#274255] text-[#33cc99]
//   return (
//     <div className='bg-[#274255]'>
      
//         <HeroSection />
//         <MapSection />

//         <IphoneSection />
        
//         <DiginiwasWorks />
      
     
//         <NiwasAIFinds />
      
        
//         <DigiNiwasPrpperty/>
//         <FutureEcosystem /> 
      
//       <ClientSays />

//     </div>
//   )
// }

// export default Home



import React from 'react'

import HeroSection from './home/HeroSection'
import DigiNiwasPrpperty from './home/DigiNiwasProperty'
import NiwasAIFinds from './home/NiwasAiFind'
import DiginiwasWorks from './home/DigiNiwasWorks'

import FutureEcosystem from './home/FutureEcosystem'
import IphoneSection from './home/IphoneSection'
import ClientSays from './home/ClientSays';
import MapSection from './home/MapSection'

const Home = () => {

  // text-[#274255] text-[#33cc99]
  return (
    <div className='bg-[#274255] overflow-hidden'>
      
        <HeroSection />
        {/* <MapSection /> */}

        <IphoneSection />
        
        <DiginiwasWorks />
      
     
        <NiwasAIFinds />
      
        
        <DigiNiwasPrpperty/>
        <FutureEcosystem /> 
      
      <ClientSays />

    </div>
  )
}

export default Home