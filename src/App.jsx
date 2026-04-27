import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectInstalacaoMultisplitPage from './pages/ProjectInstalacaoMultisplitPage'
import { MULTISPLIT_SLUG } from './data/content'

function TrabalhoDetailRoute() {
  const { slug } = useParams()
  if (slug === MULTISPLIT_SLUG) {
    return <ProjectInstalacaoMultisplitPage />
  }
  return <Navigate to="/" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/trabalhos/:slug" element={<TrabalhoDetailRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
