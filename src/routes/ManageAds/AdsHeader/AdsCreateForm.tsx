import { useState } from 'react'

const AdsCreateForm = () => {
  const [isActive, setIsActive] = useState(false)
  const [startDate, setStartDate] = useState(Date.now())
  const [budget, setBudget] = useState(0)
  const [cost, setCost] = useState(0)
  const [convValue, setConvValue] = useState(0)
  const [title, setTitle] = useState('')

  const handleFormSubmit = () => {
    console.log('잘했습니다')
  }

  const handleActiveChange = () => setIsActive((prevState) => !prevState)
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='isActive'>진행중 여부</label>
      <input name='isActive' type='checkbox' checked={isActive} onChange={handleActiveChange} />
      <input type='date' value={startDate} onChange={handleDateChange} />
    </form>
  )
}

export default AdsCreateForm
