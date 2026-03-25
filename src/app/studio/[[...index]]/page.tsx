'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', margin: 0, padding: 0 }}>
      <NextStudio config={config} />
    </div>
  )
}
