"use client";

import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export default function CTAButton({ href, children, className = '' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </Link>
  )
} 