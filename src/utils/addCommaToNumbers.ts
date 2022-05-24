export const addCommaToNumbers = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
