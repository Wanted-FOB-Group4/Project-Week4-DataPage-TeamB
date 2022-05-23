// wanted_FE_ad-list-data-set.json
import axios from 'axios'

export const getAdListData = () => axios.get('/wanted_FE_ad-list-data-set.json').then((response) => response.data)
