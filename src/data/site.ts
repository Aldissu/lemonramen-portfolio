export const site = {
  handle: 'lemonramen',
  name: 'Aldissu',
  role: 'software developer',
  email: 'aldsdizon@gmail.com',
  github: 'https://github.com/Aldissu/',
  githubUser: 'Aldissu',
  avatar: '/avatar.jpg',
}

export type Accent = 'lemon' | 'pink' | 'mint' | 'sky' | 'lilac'

export const accentText: Record<Accent, string> = {
  lemon: 'text-lemon',
  pink: 'text-pink',
  mint: 'text-mint',
  sky: 'text-sky',
  lilac: 'text-lilac',
}

export const accentBg: Record<Accent, string> = {
  lemon: 'bg-lemon',
  pink: 'bg-pink',
  mint: 'bg-mint',
  sky: 'bg-sky',
  lilac: 'bg-lilac',
}

export const accentBorder: Record<Accent, string> = {
  lemon: 'border-lemon/60',
  pink: 'border-pink/60',
  mint: 'border-mint/60',
  sky: 'border-sky/60',
  lilac: 'border-lilac/60',
}
