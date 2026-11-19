import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/custom.css'

import Breadcrumb from './components/Breadcrumb.vue'
import DocFooterMeta from './components/DocFooterMeta.vue'
import SiteFooter from './components/SiteFooter.vue'
import RegistrationButton from './components/RegistrationButton.vue'
import BrandCTA from './components/BrandCTA.vue'
import BrandPricingTable from './components/BrandPricingTable.vue'
import BrandRecommendation from './components/BrandRecommendation.vue'
import BrandComparison from './components/BrandComparison.vue'
import RelatedBrand from './components/RelatedBrand.vue'
import BrandDatabase from './components/BrandDatabase.vue'
import NetworkPerformanceReport from './components/NetworkPerformanceReport.vue'
import StreamingAvailabilityMatrix from './components/StreamingAvailabilityMatrix.vue'
import NetworkTopology from './components/NetworkTopology.vue'
import BrandInfrastructureSnapshot from './components/BrandInfrastructureSnapshot.vue'
import StepGuide from './components/StepGuide.vue'
import FaqSection from './components/FaqSection.vue'
import ClientDownloadCard from './components/ClientDownloadCard.vue'
import TopicClusterHub from './components/TopicClusterHub.vue'
import HomeKnowledgeBase from './components/HomeKnowledgeBase.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Breadcrumb', Breadcrumb)
    app.component('DocFooterMeta', DocFooterMeta)
    app.component('SiteFooter', SiteFooter)
    app.component('RegistrationButton', RegistrationButton)
    app.component('BrandCTA', BrandCTA)
    app.component('BrandPricingTable', BrandPricingTable)
    app.component('BrandRecommendation', BrandRecommendation)
    app.component('BrandComparison', BrandComparison)
    app.component('RelatedBrand', RelatedBrand)
    app.component('BrandDatabase', BrandDatabase)
    app.component('NetworkPerformanceReport', NetworkPerformanceReport)
    app.component('StreamingAvailabilityMatrix', StreamingAvailabilityMatrix)
    app.component('NetworkTopology', NetworkTopology)
    app.component('BrandInfrastructureSnapshot', BrandInfrastructureSnapshot)
    app.component('StepGuide', StepGuide)
    app.component('FaqSection', FaqSection)
    app.component('ClientDownloadCard', ClientDownloadCard)
    app.component('TopicClusterHub', TopicClusterHub)
    app.component('HomeKnowledgeBase', HomeKnowledgeBase)
  }
} satisfies Theme
