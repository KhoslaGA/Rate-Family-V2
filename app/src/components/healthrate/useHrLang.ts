'use client'

/**
 * HealthRate language store. The original spoke shared (lang, setLang) via an
 * HRShell render-prop; in the App Router the chrome lives in the layout and the
 * body in the page, so we sync through localStorage + a window event instead.
 * Body copy stays English in phase one — only chrome strings + notices localize.
 */
import { useEffect, useState } from 'react'

export type HrLang = 'en' | 'fr' | 'pa' | 'hi' | 'ur'
const KEY = 'hr_lang'
const EVENT = 'hr-langchange'

export function setHrLang(v: HrLang) {
  try {
    localStorage.setItem(KEY, v)
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: v }))
}

/** Subscribe to the active language. Starts 'en' on the server + first paint. */
export function useHrLang(): HrLang {
  const [lang, setLang] = useState<HrLang>('en')
  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY) as HrLang | null
      if (stored) setLang(stored)
    } catch {
      /* ignore */
    }
    const onChange = (e: Event) => {
      const v = (e as CustomEvent).detail as HrLang
      if (v) setLang(v)
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY && e.newValue) setLang(e.newValue as HrLang)
    }
    window.addEventListener(EVENT, onChange)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(EVENT, onChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])
  return lang
}
