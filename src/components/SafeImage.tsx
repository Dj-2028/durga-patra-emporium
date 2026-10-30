import { useState, useEffect } from 'react'

const FALLBACK_SRC = "/images/fallback-kitchenware.jpg"

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  fallbackSrc?: string
  contain?: boolean
  fallbackText?: string
}

export default function SafeImage({
  src,
  fallbackSrc = FALLBACK_SRC,
  contain,
  fallbackText,
  className = "",
  alt = "",
  style,
  ...rest
}: Props) {
  const [current, setCurrent] = useState(src)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setCurrent(src)
    setFailed(false)
    setLoaded(false)
  }, [src])

  const handleError = () => {
    if (fallbackText) {
      setFailed(true)
      return
    }
    if (current !== fallbackSrc) {
      setCurrent(fallbackSrc)
    } else {
      setFailed(true)
    }
  }

  if (failed) {
    if (fallbackText) {
      return (
        <div
          className={`flex items-center justify-center font-bold tracking-wider uppercase text-neutral-700 ${className}`}
          style={style}
          aria-label={alt || fallbackText}
        >
          {fallbackText}
        </div>
      )
    }
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#F7F6F2] border border-[#E8E6E2] text-[#242424] ${className}`}
        style={style}
        aria-label={alt || "Image unavailable"}
      >
        <div className="w-10 h-10 rounded-full bg-white border border-[#E8E6E2] flex items-center justify-center mb-2 text-[#B85C38]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="M21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="text-[11px] tracking-[0.12em] uppercase font-semibold text-neutral-500">Kitchenware</p>
      </div>
    )
  }

  return (
    <img
      src={current}
      alt={alt}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${
        contain ? 'object-contain' : 'object-cover'
      }`}
      style={style}
      onLoad={() => setLoaded(true)}
      onError={handleError}
      loading={rest.loading || "lazy"}
      decoding="async"
      {...rest}
    />
  )
}
