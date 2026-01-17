import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'de7'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '353'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '762'),
            routes: [
              {
                path: '/changelog',
                component: ComponentCreator('/changelog', '9c7'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', '4fd'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/analytics',
                component: ComponentCreator('/features/analytics', 'e73'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/appearance',
                component: ComponentCreator('/features/appearance', '346'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/chats',
                component: ComponentCreator('/features/chats', '2d2'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/knowledge-base',
                component: ComponentCreator('/features/knowledge-base', '800'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/order-requests',
                component: ComponentCreator('/features/order-requests', '1a4'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/plans-billing',
                component: ComponentCreator('/features/plans-billing', 'b6b'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/popups-proactive',
                component: ComponentCreator('/features/popups-proactive', '572'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/quick-actions',
                component: ComponentCreator('/features/quick-actions', '69c'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/settings-assistant',
                component: ComponentCreator('/features/settings-assistant', '5dd'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/features/widget',
                component: ComponentCreator('/features/widget', '8d6'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/getting-started/first-steps',
                component: ComponentCreator('/getting-started/first-steps', '277'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/getting-started/installation',
                component: ComponentCreator('/getting-started/installation', '4c3'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/getting-started/intro',
                component: ComponentCreator('/getting-started/intro', 'd0d'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/integrations/shopify',
                component: ComponentCreator('/integrations/shopify', '335'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/integrations/whatsapp',
                component: ComponentCreator('/integrations/whatsapp', 'ce5'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/troubleshooting/common-issues',
                component: ComponentCreator('/troubleshooting/common-issues', 'ccc'),
                exact: true,
                sidebar: "merchantSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'cde'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
