import CardList from './CardList'

const TMP_DATE = { start: '2022-02-06', end: '2022-02-07' }

const Dashboard = () => {
  return (
    <>
      <h1 className='title'>대시보드</h1>
      <h2 className='subtitle'>통합 광고 현황</h2>
      <div className='container'>
        <CardList date={TMP_DATE} />
      </div>
      <h2 className='subtitle'>매체 현황</h2>
      <div className='container'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, rerum dolorum maxime blanditiis sunt perferendis
        illum laborum a facere, consequuntur obcaecati, hic perspiciatis atque exercitationem! Ab hic quos adipisci
        molestias?
      </div>
    </>
  )
}

export default Dashboard
