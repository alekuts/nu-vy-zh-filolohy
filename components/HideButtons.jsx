'use client'

export default function HideButtons() {
  return (
    <style jsx global>{`
      .nextra-edit-page-button,
      .nextra-feedback-button {
        display: none !important;
      }
    `}</style>
  )
}

