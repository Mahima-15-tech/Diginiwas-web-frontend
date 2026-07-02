import React from 'react'
import HeroSection from "./AgentCorner/HeroSection";
import AgentCRMWorkflow from "./AgentCorner/AgentCRM";
import PricingPlans from "./AgentCorner/PricingPlans";
import ValueProposition from "./AgentCorner/ValueProposition";
import JourneySection from "./AgentCorner/JourneySection";
import NetworkSection from "./AgentCorner/NetworkSection";
import WhyAgentsLove from './AgentCorner/WhyAgentsLove';

const AgentCorner = () => {

  return (
    <div>
        <HeroSection />

      <ValueProposition />

      <WhyAgentsLove />
      
      <JourneySection />

      <AgentCRMWorkflow />

      <NetworkSection />

      <PricingPlans />
    </div>
  )
}

export default AgentCorner