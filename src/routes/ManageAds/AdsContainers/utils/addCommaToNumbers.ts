const addCommaToNumbers = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export default addCommaToNumbers
