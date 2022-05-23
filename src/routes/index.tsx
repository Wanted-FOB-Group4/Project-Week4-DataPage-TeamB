import { Route, Routes } from 'react-router-dom'

import Dashboard from './Dashboard'
import ManageAds from './ManageAds'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='manage' element={<ManageAds />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
