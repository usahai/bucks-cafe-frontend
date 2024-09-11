/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as EmployeesIndexImport } from './routes/employees/index'
import { Route as EmployeesEditIdImport } from './routes/employees/edit/$id'
import { Route as CafesEditIdImport } from './routes/cafes/edit/$id'

// Create Virtual Routes

const CafesIndexLazyImport = createFileRoute('/cafes/')()
const EmployeesAddLazyImport = createFileRoute('/employees/add')()
const CafesAddLazyImport = createFileRoute('/cafes/add')()
const EmployeesEditIndexLazyImport = createFileRoute('/employees/edit/')()
const CafesEditIndexLazyImport = createFileRoute('/cafes/edit/')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CafesIndexLazyRoute = CafesIndexLazyImport.update({
  path: '/cafes/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cafes/index.lazy').then((d) => d.Route))

const EmployeesIndexRoute = EmployeesIndexImport.update({
  path: '/employees/',
  getParentRoute: () => rootRoute,
} as any)

const EmployeesAddLazyRoute = EmployeesAddLazyImport.update({
  path: '/employees/add',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/employees/add.lazy').then((d) => d.Route))

const CafesAddLazyRoute = CafesAddLazyImport.update({
  path: '/cafes/add',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cafes/add.lazy').then((d) => d.Route))

const EmployeesEditIndexLazyRoute = EmployeesEditIndexLazyImport.update({
  path: '/employees/edit/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/employees/edit/index.lazy').then((d) => d.Route),
)

const CafesEditIndexLazyRoute = CafesEditIndexLazyImport.update({
  path: '/cafes/edit/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/cafes/edit/index.lazy').then((d) => d.Route),
)

const EmployeesEditIdRoute = EmployeesEditIdImport.update({
  path: '/employees/edit/$id',
  getParentRoute: () => rootRoute,
} as any)

const CafesEditIdRoute = CafesEditIdImport.update({
  path: '/cafes/edit/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cafes/add': {
      id: '/cafes/add'
      path: '/cafes/add'
      fullPath: '/cafes/add'
      preLoaderRoute: typeof CafesAddLazyImport
      parentRoute: typeof rootRoute
    }
    '/employees/add': {
      id: '/employees/add'
      path: '/employees/add'
      fullPath: '/employees/add'
      preLoaderRoute: typeof EmployeesAddLazyImport
      parentRoute: typeof rootRoute
    }
    '/employees/': {
      id: '/employees/'
      path: '/employees'
      fullPath: '/employees'
      preLoaderRoute: typeof EmployeesIndexImport
      parentRoute: typeof rootRoute
    }
    '/cafes/': {
      id: '/cafes/'
      path: '/cafes'
      fullPath: '/cafes'
      preLoaderRoute: typeof CafesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/cafes/edit/$id': {
      id: '/cafes/edit/$id'
      path: '/cafes/edit/$id'
      fullPath: '/cafes/edit/$id'
      preLoaderRoute: typeof CafesEditIdImport
      parentRoute: typeof rootRoute
    }
    '/employees/edit/$id': {
      id: '/employees/edit/$id'
      path: '/employees/edit/$id'
      fullPath: '/employees/edit/$id'
      preLoaderRoute: typeof EmployeesEditIdImport
      parentRoute: typeof rootRoute
    }
    '/cafes/edit/': {
      id: '/cafes/edit/'
      path: '/cafes/edit'
      fullPath: '/cafes/edit'
      preLoaderRoute: typeof CafesEditIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/employees/edit/': {
      id: '/employees/edit/'
      path: '/employees/edit'
      fullPath: '/employees/edit'
      preLoaderRoute: typeof EmployeesEditIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cafes/add': typeof CafesAddLazyRoute
  '/employees/add': typeof EmployeesAddLazyRoute
  '/employees': typeof EmployeesIndexRoute
  '/cafes': typeof CafesIndexLazyRoute
  '/cafes/edit/$id': typeof CafesEditIdRoute
  '/employees/edit/$id': typeof EmployeesEditIdRoute
  '/cafes/edit': typeof CafesEditIndexLazyRoute
  '/employees/edit': typeof EmployeesEditIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cafes/add': typeof CafesAddLazyRoute
  '/employees/add': typeof EmployeesAddLazyRoute
  '/employees': typeof EmployeesIndexRoute
  '/cafes': typeof CafesIndexLazyRoute
  '/cafes/edit/$id': typeof CafesEditIdRoute
  '/employees/edit/$id': typeof EmployeesEditIdRoute
  '/cafes/edit': typeof CafesEditIndexLazyRoute
  '/employees/edit': typeof EmployeesEditIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cafes/add': typeof CafesAddLazyRoute
  '/employees/add': typeof EmployeesAddLazyRoute
  '/employees/': typeof EmployeesIndexRoute
  '/cafes/': typeof CafesIndexLazyRoute
  '/cafes/edit/$id': typeof CafesEditIdRoute
  '/employees/edit/$id': typeof EmployeesEditIdRoute
  '/cafes/edit/': typeof CafesEditIndexLazyRoute
  '/employees/edit/': typeof EmployeesEditIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cafes/add'
    | '/employees/add'
    | '/employees'
    | '/cafes'
    | '/cafes/edit/$id'
    | '/employees/edit/$id'
    | '/cafes/edit'
    | '/employees/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/cafes/add'
    | '/employees/add'
    | '/employees'
    | '/cafes'
    | '/cafes/edit/$id'
    | '/employees/edit/$id'
    | '/cafes/edit'
    | '/employees/edit'
  id:
    | '__root__'
    | '/'
    | '/cafes/add'
    | '/employees/add'
    | '/employees/'
    | '/cafes/'
    | '/cafes/edit/$id'
    | '/employees/edit/$id'
    | '/cafes/edit/'
    | '/employees/edit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CafesAddLazyRoute: typeof CafesAddLazyRoute
  EmployeesAddLazyRoute: typeof EmployeesAddLazyRoute
  EmployeesIndexRoute: typeof EmployeesIndexRoute
  CafesIndexLazyRoute: typeof CafesIndexLazyRoute
  CafesEditIdRoute: typeof CafesEditIdRoute
  EmployeesEditIdRoute: typeof EmployeesEditIdRoute
  CafesEditIndexLazyRoute: typeof CafesEditIndexLazyRoute
  EmployeesEditIndexLazyRoute: typeof EmployeesEditIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CafesAddLazyRoute: CafesAddLazyRoute,
  EmployeesAddLazyRoute: EmployeesAddLazyRoute,
  EmployeesIndexRoute: EmployeesIndexRoute,
  CafesIndexLazyRoute: CafesIndexLazyRoute,
  CafesEditIdRoute: CafesEditIdRoute,
  EmployeesEditIdRoute: EmployeesEditIdRoute,
  CafesEditIndexLazyRoute: CafesEditIndexLazyRoute,
  EmployeesEditIndexLazyRoute: EmployeesEditIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cafes/add",
        "/employees/add",
        "/employees/",
        "/cafes/",
        "/cafes/edit/$id",
        "/employees/edit/$id",
        "/cafes/edit/",
        "/employees/edit/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cafes/add": {
      "filePath": "cafes/add.lazy.tsx"
    },
    "/employees/add": {
      "filePath": "employees/add.lazy.tsx"
    },
    "/employees/": {
      "filePath": "employees/index.tsx"
    },
    "/cafes/": {
      "filePath": "cafes/index.lazy.tsx"
    },
    "/cafes/edit/$id": {
      "filePath": "cafes/edit/$id.tsx"
    },
    "/employees/edit/$id": {
      "filePath": "employees/edit/$id.tsx"
    },
    "/cafes/edit/": {
      "filePath": "cafes/edit/index.lazy.tsx"
    },
    "/employees/edit/": {
      "filePath": "employees/edit/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
