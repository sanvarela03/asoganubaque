import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Asogan Ubaque' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return <Welcome />
}
