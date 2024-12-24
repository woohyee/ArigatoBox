'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      sessionStorage.setItem('isRefresh', 'true')
    }

    const checkRefresh = () => {
      const isRefresh = sessionStorage.getItem('isRefresh')
      if (isRefresh) {
        sessionStorage.removeItem('isRefresh')
        router.push('/')
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    checkRefresh()

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [router])

  return <>{children}</>
}