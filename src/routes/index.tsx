import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'
import Dashboard from './Dashboard'
import ManageAds from './ManageAds'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='manage' element={<ManageAds />} />
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
