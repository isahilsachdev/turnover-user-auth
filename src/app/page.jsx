'use client'
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Page() {
  const router = useRouter()
  // as we dont have a landing page, we redirect users to signup page
  useEffect(() => {router.push('/signup')},[])

  return null;
}