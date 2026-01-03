import homeHtml from './content/index.html?raw';
import aiNativeHtml from './content/ai-native-system.html?raw';
import architectureHtml from './content/architecture.html?raw';
import contextEngineeringHtml from './content/context-engineering.html?raw';
import enterpriseSecurityHtml from './content/enterprise-security.html?raw';
import intelligentAnalyticsHtml from './content/intelligent-analytics.html?raw';
import intelligentDraftingHtml from './content/intelligent-drafting.html?raw';
import intelligentNegotiationHtml from './content/intelligent-negotiation.html?raw';
import intelligentPerformanceHtml from './content/intelligent-performance.html?raw';
import intelligentReviewHtml from './content/intelligent-review.html?raw';
import knowledgeManagementHtml from './content/knowledge-management.html?raw';
import salesCasesHtml from './content/sales-cases.html?raw';
import sotaModelsHtml from './content/sota-models.html?raw';
import toolsEcosystemHtml from './content/tools-ecosystem.html?raw';
import enHomeHtml from './content/en/index.html?raw';
import enAiNativeHtml from './content/en/ai-native-system.html?raw';
import enArchitectureHtml from './content/en/architecture.html?raw';
import enContextEngineeringHtml from './content/en/context-engineering.html?raw';
import enEnterpriseSecurityHtml from './content/en/enterprise-security.html?raw';
import enIntelligentAnalyticsHtml from './content/en/intelligent-analytics.html?raw';
import enIntelligentDraftingHtml from './content/en/intelligent-drafting.html?raw';
import enIntelligentNegotiationHtml from './content/en/intelligent-negotiation.html?raw';
import enIntelligentPerformanceHtml from './content/en/intelligent-performance.html?raw';
import enIntelligentReviewHtml from './content/en/intelligent-review.html?raw';
import enKnowledgeManagementHtml from './content/en/knowledge-management.html?raw';
import enSalesCasesHtml from './content/en/sales-cases.html?raw';
import enSotaModelsHtml from './content/en/sota-models.html?raw';
import enToolsEcosystemHtml from './content/en/tools-ecosystem.html?raw';

// 路由配置集中管理，便于新增页面时只改一处。
export const pageRoutes = [
  {
    path: '/',
    html: homeHtml
  },
  {
    path: '/ai-native-system',
    html: aiNativeHtml
  },
  {
    path: '/architecture',
    html: architectureHtml
  },
  {
    path: '/context-engineering',
    html: contextEngineeringHtml
  },
  {
    path: '/enterprise-security',
    html: enterpriseSecurityHtml
  },
  {
    path: '/intelligent-analytics',
    html: intelligentAnalyticsHtml
  },
  {
    path: '/intelligent-drafting',
    html: intelligentDraftingHtml
  },
  {
    path: '/intelligent-negotiation',
    html: intelligentNegotiationHtml
  },
  {
    path: '/intelligent-performance',
    html: intelligentPerformanceHtml
  },
  {
    path: '/intelligent-review',
    html: intelligentReviewHtml
  },
  {
    path: '/knowledge-management',
    html: knowledgeManagementHtml
  },
  {
    path: '/sales-cases',
    html: salesCasesHtml
  },
  {
    path: '/sota-models',
    html: sotaModelsHtml
  },
  {
    path: '/tools-ecosystem',
    html: toolsEcosystemHtml
  },
  {
    path: '/en',
    html: enHomeHtml
  },
  {
    path: '/en/ai-native-system',
    html: enAiNativeHtml
  },
  {
    path: '/en/architecture',
    html: enArchitectureHtml
  },
  {
    path: '/en/context-engineering',
    html: enContextEngineeringHtml
  },
  {
    path: '/en/enterprise-security',
    html: enEnterpriseSecurityHtml
  },
  {
    path: '/en/intelligent-analytics',
    html: enIntelligentAnalyticsHtml
  },
  {
    path: '/en/intelligent-drafting',
    html: enIntelligentDraftingHtml
  },
  {
    path: '/en/intelligent-negotiation',
    html: enIntelligentNegotiationHtml
  },
  {
    path: '/en/intelligent-performance',
    html: enIntelligentPerformanceHtml
  },
  {
    path: '/en/intelligent-review',
    html: enIntelligentReviewHtml
  },
  {
    path: '/en/knowledge-management',
    html: enKnowledgeManagementHtml
  },
  {
    path: '/en/sales-cases',
    html: enSalesCasesHtml
  },
  {
    path: '/en/sota-models',
    html: enSotaModelsHtml
  },
  {
    path: '/en/tools-ecosystem',
    html: enToolsEcosystemHtml
  }
];

// HTML 文件名与路由的映射，用于重写页面内部链接。
export const pageRouteMap = {
  'index.html': '/',
  'ai-native-system.html': '/ai-native-system',
  'architecture.html': '/architecture',
  'context-engineering.html': '/context-engineering',
  'enterprise-security.html': '/enterprise-security',
  'intelligent-analytics.html': '/intelligent-analytics',
  'intelligent-drafting.html': '/intelligent-drafting',
  'intelligent-negotiation.html': '/intelligent-negotiation',
  'intelligent-performance.html': '/intelligent-performance',
  'intelligent-review.html': '/intelligent-review',
  'knowledge-management.html': '/knowledge-management',
  'sales-cases.html': '/sales-cases',
  'sota-models.html': '/sota-models',
  'tools-ecosystem.html': '/tools-ecosystem',
  'en/index.html': '/en',
  'en/ai-native-system.html': '/en/ai-native-system',
  'en/architecture.html': '/en/architecture',
  'en/context-engineering.html': '/en/context-engineering',
  'en/enterprise-security.html': '/en/enterprise-security',
  'en/intelligent-analytics.html': '/en/intelligent-analytics',
  'en/intelligent-drafting.html': '/en/intelligent-drafting',
  'en/intelligent-negotiation.html': '/en/intelligent-negotiation',
  'en/intelligent-performance.html': '/en/intelligent-performance',
  'en/intelligent-review.html': '/en/intelligent-review',
  'en/knowledge-management.html': '/en/knowledge-management',
  'en/sales-cases.html': '/en/sales-cases',
  'en/sota-models.html': '/en/sota-models',
  'en/tools-ecosystem.html': '/en/tools-ecosystem'
};
