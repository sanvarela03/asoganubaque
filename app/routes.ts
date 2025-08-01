import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('articulos', 'routes/articles.tsx'),
  route('productos', 'routes/products.tsx'),
  route('about', 'routes/about.tsx'),
] satisfies RouteConfig
