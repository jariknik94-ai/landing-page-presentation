import styles from './ProjectVisual.module.scss';

type ProjectVisualProps = {
  variant: 'assets' | 'architecture' | 'systems' | 'process';
};

export default function ProjectVisual({ variant }: ProjectVisualProps) {
  return (
    <div className={styles.visual} aria-hidden="true">
      <svg className={styles.diagram} viewBox="0 0 320 180" fill="none">
        {variant === 'assets' && (
          <>
            <circle cx="160" cy="90" r="48" />
            <circle cx="160" cy="90" r="31" />
            <path d="M160 12v30M160 138v30M82 90h30M208 90h30M105 35l21 21M194 124l21 21M215 35l-21 21M126 124l-21 21" />
            <rect x="145" y="75" width="30" height="30" rx="5" transform="rotate(45 160 90)" />
            <circle cx="82" cy="90" r="4" />
            <circle cx="238" cy="90" r="4" />
          </>
        )}
        {variant === 'architecture' && (
          <>
            <path d="m160 22 99 39-99 39-99-39 99-39Zm-99 66 99 39 99-39M61 115l99 39 99-39" />
            <path d="M160 48v27m-21-19 21 8 21-8M95 74v17m130-17v17M160 100v27" />
            <circle cx="160" cy="64" r="5" />
            <circle cx="95" cy="91" r="3" />
            <circle cx="225" cy="91" r="3" />
          </>
        )}
        {variant === 'systems' && (
          <>
            <rect x="35" y="59" width="65" height="52" rx="4" />
            <rect x="128" y="20" width="65" height="52" rx="4" />
            <rect x="128" y="108" width="65" height="52" rx="4" />
            <rect x="220" y="59" width="65" height="52" rx="4" />
            <path d="M100 85h28m65-39h15v39h12m-27 49h15V85M52 77h30M52 92h20m94-54h10m-29 12h29m-29 77h29m-29 12h18m91-62h12m-26 15h26" />
          </>
        )}
        {variant === 'process' && (
          <>
            <path d="M31 129h42l31-72 44 59 37-42 28 33 28-58h48" />
            <path d="M31 149h258M31 29v120" opacity=".35" />
            <circle cx="73" cy="129" r="6" />
            <circle cx="104" cy="57" r="6" />
            <circle cx="148" cy="116" r="6" />
            <circle cx="185" cy="74" r="6" />
            <circle cx="241" cy="49" r="6" />
            <path d="M104 57V29m81 45V40m56 9V25" opacity=".45" />
          </>
        )}
      </svg>
    </div>
  );
}
