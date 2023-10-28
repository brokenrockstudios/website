import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b02'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8d8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '66d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b8c'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'be6'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'dad'),
    exact: true
  },
  {
    path: '/p1-dev-update-1',
    component: ComponentCreator('/p1-dev-update-1', 'c9a'),
    exact: true
  },
  {
    path: '/README',
    component: ComponentCreator('/README', '8c8'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '6cf'),
    exact: true
  },
  {
    path: '/tags/dev',
    component: ComponentCreator('/tags/dev', '9c5'),
    exact: true
  },
  {
    path: '/tags/frog',
    component: ComponentCreator('/tags/frog', '22c'),
    exact: true
  },
  {
    path: '/tags/game',
    component: ComponentCreator('/tags/game', '84d'),
    exact: true
  },
  {
    path: '/learning',
    component: ComponentCreator('/learning', 'ec0'),
    routes: [
      {
        path: '/learning',
        component: ComponentCreator('/learning', '017'),
        routes: [
          {
            path: '/learning',
            component: ComponentCreator('/learning', 'feb'),
            routes: [
              {
                path: '/learning/blender/overview',
                component: ComponentCreator('/learning/blender/overview', 'd4d'),
                exact: true,
                sidebar: "learningSidebar"
              },
              {
                path: '/learning/unreal/overview',
                component: ComponentCreator('/learning/unreal/overview', '411'),
                exact: true,
                sidebar: "learningSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/products',
    component: ComponentCreator('/products', '481'),
    routes: [
      {
        path: '/products',
        component: ComponentCreator('/products', 'c41'),
        routes: [
          {
            path: '/products',
            component: ComponentCreator('/products', '592'),
            routes: [
              {
                path: '/products/category/games',
                component: ComponentCreator('/products/category/games', '8cf'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/category/p1',
                component: ComponentCreator('/products/category/p1', '9c2'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/category/plugins',
                component: ComponentCreator('/products/category/plugins', '409'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/games/P1/concept',
                component: ComponentCreator('/products/games/P1/concept', 'f09'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/games/P1/music',
                component: ComponentCreator('/products/games/P1/music', 'f83'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/games/P1/screenshots',
                component: ComponentCreator('/products/games/P1/screenshots', '6e1'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/games/P1/videos',
                component: ComponentCreator('/products/games/P1/videos', '563'),
                exact: true,
                sidebar: "productSidebar"
              },
              {
                path: '/products/plugins/p2botk',
                component: ComponentCreator('/products/plugins/p2botk', '9f1'),
                exact: true,
                sidebar: "productSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '128'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
