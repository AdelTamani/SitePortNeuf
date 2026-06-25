import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

export function useSectionNavigation() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const goToSection = useCallback(
    (sectionId: string) => {
      if (isHome) {
        scrollToSection(sectionId)
      } else {
        navigate('/', { state: { scrollTo: sectionId } })
      }
    },
    [isHome, navigate],
  )

  return { goToSection, isHome }
}
