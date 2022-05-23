

const App = () => {
  return (
        <Routes> { /* 레이아웃 추가하기 */ }
          <Route path='/' element={<DashBoard />} />
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='manage' element={<ManageAds />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
  )
}

export default App
