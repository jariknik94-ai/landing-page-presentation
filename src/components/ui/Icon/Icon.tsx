import styles from './Icon.module.scss';

type IconName =
  | 'architecture'
  | 'analysis'
  | 'integration'
  | 'enterprise'
  | 'security'
  | 'arrow-up'
  | 'arrow-down';

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'architecture' && (
        <>
          <path d="m4 11 12-7 12 7-12 7-12-7Z" />
          <path d="m4 16 12 7 12-7M4 21l12 7 12-7" />
        </>
      )}
      {name === 'analysis' && (
        <>
          <rect x="5" y="4" width="18" height="23" rx="2" />
          <path d="M10 10h8M10 15h8M10 20h5" />
          <circle cx="23" cy="23" r="4" />
          <path d="m26 26 3 3" />
        </>
      )}
      {name === 'integration' && (
        <>
          <rect x="2.5" y="12" width="8" height="8" rx="1" />
          <rect x="21.5" y="4" width="8" height="8" rx="1" />
          <rect x="21.5" y="20" width="8" height="8" rx="1" />
          <path d="M10.5 16h5m0 0V8h6m-6 8v8h6" />
        </>
      )}
      {name === 'enterprise' && (
        <>
          <path d="m16 3 12 6v14l-12 6-12-6V9l12-6Z" />
          <path d="m4 9 12 6 12-6M16 15v14M10 6l12 6v5" />
        </>
      )}
      {name === 'security' && (
        <>
          <path d="M16 3 27 7v7c0 7-4.5 12-11 15C9.5 26 5 21 5 14V7l11-4Z" />
          <path d="m11 16 3.5 3.5L22 12" />
        </>
      )}
      {name === 'arrow-up' && (
        <>
          <path d="M16 26V6M9 13l7-7 7 7" />
        </>
      )}
      {name === 'arrow-down' && (
        <>
          <path d="M16 6v20M9 19l7 7 7-7" />
        </>
      )}
    </svg>
  );
}
