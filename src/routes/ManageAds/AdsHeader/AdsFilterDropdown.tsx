import { ArrowDown } from 'assets/svgs'
import { useRecoilState } from 'recoil'

import { adsFilterIndexState } from 'states'

import styles from './adsFilterDropdown.module.scss'

const DROPDOWN_KEYWORDS = ['전체 광고', '진행중인 광고', '중단된 광고']

const AdsFilterDropdown = () => {
  const [adsFilterIndex, setAdsFilterIndex] = useRecoilState(adsFilterIndexState)

  return (
    <button type='button' className={styles.dropdownButton}>
      <span>{DROPDOWN_KEYWORDS[adsFilterIndex]}</span>
      <ArrowDown className={styles.dropdownIcon} />
    </button>
  )
}

export default AdsFilterDropdown
