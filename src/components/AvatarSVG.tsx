import React from 'react';

interface AvatarProps {
  name: string;
  variant?: 'male' | 'female';
  className?: string;
}

const AvatarSVG: React.FC<AvatarProps> = ({ name, variant = 'male', className = '' }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  const avatars: Record<string, React.ReactElement> = {
    'Sarah Chen': (
      <svg className={className} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sarahBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <radialGradient id="sarahSkin" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#fde1d3" />
            <stop offset="100%" stopColor="#f5c7a9" />
          </radialGradient>
          <linearGradient id="sarahHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2d2d2d" />
          </linearGradient>
          <filter id="sarahShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feFlood floodColor="#000000" floodOpacity="0.1"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle cx="60" cy="60" r="60" fill="url(#sarahBg)" />
        
        {/* Hair back */}
        <path d="M60 25 C35 25 25 40 25 55 L25 75 C25 85 30 90 35 92 L35 55 C35 40 45 30 60 30 C75 30 85 40 85 55 L85 92 C90 90 95 85 95 75 L95 55 C95 40 85 25 60 25 Z" 
              fill="url(#sarahHair)" filter="url(#sarahShadow)" />
        
        {/* Neck */}
        <rect x="50" y="70" width="20" height="25" rx="10" fill="url(#sarahSkin)" />
        
        {/* Face */}
        <ellipse cx="60" cy="50" rx="28" ry="32" fill="url(#sarahSkin)" filter="url(#sarahShadow)" />
        
        {/* Hair front */}
        <path d="M60 18 C40 18 32 28 32 38 C32 35 38 25 50 25 L45 35 C45 35 48 28 55 28 C58 28 60 30 60 30 C60 30 62 28 65 28 C72 28 75 35 75 35 L70 25 C82 25 88 35 88 38 C88 28 80 18 60 18 Z" 
              fill="url(#sarahHair)" />
        
        {/* Eyes */}
        <ellipse cx="48" cy="48" rx="3" ry="4" fill="#2d3748" />
        <ellipse cx="72" cy="48" rx="3" ry="4" fill="#2d3748" />
        <ellipse cx="48.5" cy="47" rx="1" ry="1.5" fill="#ffffff" opacity="0.8" />
        <ellipse cx="72.5" cy="47" rx="1" ry="1.5" fill="#ffffff" opacity="0.8" />
        
        {/* Eyebrows */}
        <path d="M42 42 Q48 40 54 42" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M66 42 Q72 40 78 42" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Nose */}
        <path d="M60 52 L58 58 Q60 59 62 58 L60 52" fill="#e8b5a0" opacity="0.5" />
        
        {/* Mouth */}
        <path d="M52 64 Q60 68 68 64" fill="none" stroke="#d4717f" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Blush */}
        <circle cx="42" cy="58" r="4" fill="#ff6b9d" opacity="0.2" />
        <circle cx="78" cy="58" r="4" fill="#ff6b9d" opacity="0.2" />
        
        {/* Clothing */}
        <path d="M30 95 C30 80 45 72 60 72 C75 72 90 80 90 95 L90 120 L30 120 Z" 
              fill="#1e293b" filter="url(#sarahShadow)" />
        <path d="M50 72 L50 85 L60 78 L70 85 L70 72" fill="#f8fafc" />
      </svg>
    ),
    'Marcus Rodriguez': (
      <svg className={className} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="marcusBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <radialGradient id="marcusSkin" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="100%" stopColor="#b8895a" />
          </radialGradient>
          <linearGradient id="marcusHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2d1810" />
            <stop offset="100%" stopColor="#1a0e08" />
          </linearGradient>
          <filter id="marcusShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feFlood floodColor="#000000" floodOpacity="0.15"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle cx="60" cy="60" r="60" fill="url(#marcusBg)" />
        
        {/* Neck */}
        <rect x="48" y="70" width="24" height="25" rx="12" fill="url(#marcusSkin)" />
        
        {/* Face */}
        <ellipse cx="60" cy="50" rx="30" ry="34" fill="url(#marcusSkin)" filter="url(#marcusShadow)" />
        
        {/* Hair */}
        <path d="M60 20 C38 20 30 32 30 42 L30 35 C30 25 40 18 60 18 C80 18 90 25 90 35 L90 42 C90 32 82 20 60 20 Z" 
              fill="url(#marcusHair)" />
        <path d="M35 38 C35 30 45 24 60 24 C75 24 85 30 85 38 L85 40 C85 35 75 32 60 32 C45 32 35 35 35 40 Z" 
              fill="url(#marcusHair)" />
        
        {/* Beard */}
        <path d="M38 55 C38 65 48 72 60 72 C72 72 82 65 82 55 L82 65 C82 70 72 74 60 74 C48 74 38 70 38 65 Z" 
              fill="url(#marcusHair)" opacity="0.3" />
        
        {/* Eyes */}
        <ellipse cx="47" cy="48" rx="3.5" ry="4.5" fill="#1a1a1a" />
        <ellipse cx="73" cy="48" rx="3.5" ry="4.5" fill="#1a1a1a" />
        <ellipse cx="47.5" cy="47" rx="1.2" ry="1.8" fill="#ffffff" opacity="0.8" />
        <ellipse cx="73.5" cy="47" rx="1.2" ry="1.8" fill="#ffffff" opacity="0.8" />
        
        {/* Eyebrows */}
        <path d="M40 43 Q47 41 54 43" fill="none" stroke="#2d1810" strokeWidth="2" strokeLinecap="round" />
        <path d="M66 43 Q73 41 80 43" fill="none" stroke="#2d1810" strokeWidth="2" strokeLinecap="round" />
        
        {/* Nose */}
        <path d="M60 50 L57 58 Q60 60 63 58 L60 50" fill="#b8895a" opacity="0.4" />
        
        {/* Mouth */}
        <path d="M50 65 Q60 69 70 65" fill="none" stroke="#8b5c3f" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Glasses */}
        <rect x="38" y="44" width="20" height="16" rx="8" fill="none" stroke="#1e293b" strokeWidth="2" />
        <rect x="62" y="44" width="20" height="16" rx="8" fill="none" stroke="#1e293b" strokeWidth="2" />
        <path d="M58 52 L62 52" stroke="#1e293b" strokeWidth="2" />
        <path d="M38 52 L35 48" stroke="#1e293b" strokeWidth="2" />
        <path d="M82 52 L85 48" stroke="#1e293b" strokeWidth="2" />
        
        {/* Clothing */}
        <path d="M25 95 C25 78 42 70 60 70 C78 70 95 78 95 95 L95 120 L25 120 Z" 
              fill="#1e40af" filter="url(#marcusShadow)" />
        <rect x="56" y="70" width="8" height="30" fill="#3b82f6" />
        <circle cx="60" cy="85" r="2" fill="#1e293b" />
        <circle cx="60" cy="92" r="2" fill="#1e293b" />
      </svg>
    ),
    'Emily Watson': (
      <svg className={className} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="emilyBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <radialGradient id="emilySkin" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#ffe0cc" />
            <stop offset="100%" stopColor="#fdc7a9" />
          </radialGradient>
          <linearGradient id="emilyHair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8a04c" />
            <stop offset="50%" stopColor="#d4863a" />
            <stop offset="100%" stopColor="#c77c34" />
          </linearGradient>
          <filter id="emilyShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feFlood floodColor="#000000" floodOpacity="0.12"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle cx="60" cy="60" r="60" fill="url(#emilyBg)" />
        
        {/* Hair back */}
        <path d="M60 15 C30 15 20 35 20 55 L20 80 C20 85 22 88 25 90 L25 60 C25 40 40 25 60 25 C80 25 95 40 95 60 L95 90 C98 88 100 85 100 80 L100 55 C100 35 90 15 60 15 Z" 
              fill="url(#emilyHair)" filter="url(#emilyShadow)" />
        
        {/* Neck */}
        <rect x="50" y="68" width="20" height="27" rx="10" fill="url(#emilySkin)" />
        
        {/* Face */}
        <ellipse cx="60" cy="48" rx="28" ry="31" fill="url(#emilySkin)" filter="url(#emilyShadow)" />
        
        {/* Hair front - wavy */}
        <path d="M35 35 C35 25 45 15 60 15 C75 15 85 25 85 35 C85 30 80 28 75 30 C73 25 68 23 65 25 C63 20 57 20 55 25 C52 23 47 25 45 30 C40 28 35 30 35 35 Z" 
              fill="url(#emilyHair)" />
        <path d="M30 45 Q35 50 30 55 T30 65" fill="none" stroke="#d4863a" strokeWidth="8" strokeLinecap="round" />
        <path d="M90 45 Q85 50 90 55 T90 65" fill="none" stroke="#d4863a" strokeWidth="8" strokeLinecap="round" />
        
        {/* Eyes */}
        <ellipse cx="48" cy="46" rx="3" ry="4" fill="#2d5016" />
        <ellipse cx="72" cy="46" rx="3" ry="4" fill="#2d5016" />
        <ellipse cx="48.5" cy="45" rx="1" ry="1.5" fill="#ffffff" opacity="0.8" />
        <ellipse cx="72.5" cy="45" rx="1" ry="1.5" fill="#ffffff" opacity="0.8" />
        
        {/* Eyelashes */}
        <path d="M45 42 L44 40 M48 42 L48 40 M51 42 L52 40" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M69 42 L68 40 M72 42 L72 40 M75 42 L76 40" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" />
        
        {/* Eyebrows */}
        <path d="M43 40 Q48 38 53 40" fill="none" stroke="#c77c34" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M67 40 Q72 38 77 40" fill="none" stroke="#c77c34" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Nose */}
        <path d="M60 48 L58 54 Q60 55 62 54 L60 48" fill="#f5b5a0" opacity="0.4" />
        
        {/* Mouth */}
        <path d="M52 61 Q60 65 68 61" fill="#ff6b7a" stroke="#e85464" strokeWidth="0.5" />
        
        {/* Freckles */}
        <circle cx="44" cy="52" r="0.8" fill="#daa373" opacity="0.4" />
        <circle cx="48" cy="54" r="0.8" fill="#daa373" opacity="0.4" />
        <circle cx="46" cy="56" r="0.8" fill="#daa373" opacity="0.4" />
        <circle cx="72" cy="54" r="0.8" fill="#daa373" opacity="0.4" />
        <circle cx="74" cy="56" r="0.8" fill="#daa373" opacity="0.4" />
        <circle cx="76" cy="52" r="0.8" fill="#daa373" opacity="0.4" />
        
        {/* Clothing */}
        <path d="M28 92 C28 78 44 70 60 70 C76 70 92 78 92 92 L92 120 L28 120 Z" 
              fill="#7c3aed" filter="url(#emilyShadow)" />
        <ellipse cx="60" cy="90" rx="15" ry="3" fill="#6d28d9" opacity="0.5" />
      </svg>
    )
  };

  const defaultAvatar = (
    <svg className={className} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="defaultBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="defaultShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feFlood floodColor="#000000" floodOpacity="0.1"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <circle cx="60" cy="60" r="60" fill="url(#defaultBg)" />
      
      {/* Silhouette */}
      <g filter="url(#defaultShadow)">
        <circle cx="60" cy="45" r="22" fill="#e5e7eb" />
        <path d="M60 62 C42 62 28 75 28 90 L28 120 L92 120 L92 90 C92 75 78 62 60 62 Z" fill="#e5e7eb" />
      </g>
      
      {/* Initials */}
      <text x="60" y="53" textAnchor="middle" fill="#6366f1" fontSize="26" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">{initials}</text>
    </svg>
  );

  return avatars[name] || defaultAvatar;
};

export default AvatarSVG;