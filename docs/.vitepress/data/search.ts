import type { DefaultTheme } from 'vitepress'
import { SITE_CONFIG } from './site'

/**
 * 搜索方案配置：
 * 1. 正式环境优先支持 Algolia DocSearch（仅在配置了 ALGOLIA_APP_ID / ALGOLIA_API_KEY / ALGOLIA_INDEX_NAME 环境变量时启用）
 * 2. 未配置有效 Algolia 凭证时，自动启用 VitePress 原生 Local Search，保障上线首日中文全文搜索立即可用
 * 3. 严禁写入任何伪造的 Algolia Key 或 Admin Key
 */
export function buildSearchConfig(): DefaultTheme.Config['search'] {
  if (SITE_CONFIG.algolia.enabled) {
    return {
      provider: 'algolia',
      options: {
        appId: SITE_CONFIG.algolia.appId,
        apiKey: SITE_CONFIG.algolia.apiKey,
        indexName: SITE_CONFIG.algolia.indexName,
        placeholder: '搜索机场品牌、Clash 教程、报错代码或节点测速…',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '最近搜索',
              noRecentSearchesText: '暂无最近搜索',
              saveRecentSearchButtonTitle: '保存至最近搜索',
              removeRecentSearchButtonTitle: '从最近搜索移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏移除'
            },
            errorScreen: {
              titleText: '无法获取搜索结果',
              helpText: '请检查网络连接或搜索服务状态。'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索技术支持：'
            },
            noResultsScreen: {
              noResultsText: '未找到相关内容：',
              suggestedQueryText: '你可以尝试检索以下关键词：',
              reportMissingResultsText: '觉得缺少相关教程？',
              reportMissingResultsLinkText: '前往首页查看知识目录'
            }
          }
        }
      }
    }
  }

  return {
    provider: 'local',
    options: {
      detailedView: true,
      locales: {
        root: {
          translations: {
            button: {
              buttonText: '搜索知识库',
              buttonAriaLabel: '搜索知识库'
            },
            modal: {
              displayDetails: '显示章节详情',
              resetButtonTitle: '清除搜索',
              backButtonTitle: '关闭搜索',
              noResultsText: '没有找到相关教程或品牌：',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭'
              }
            }
          }
        }
      }
    }
  }
}
