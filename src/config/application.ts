function readHttpsUrl(name: string, value: string | undefined): string | null {
  const candidate = value?.trim()
  if (!candidate) return null

  let url: URL
  try {
    url = new URL(candidate)
  } catch {
    throw new Error(`${name} must be an absolute HTTPS URL.`)
  }

  if (url.protocol !== 'https:') {
    throw new Error(`${name} must use HTTPS.`)
  }

  return url.href
}

export const applicationConfig = {
  applicationUrl: readHttpsUrl('VITE_APPLICATION_URL', import.meta.env.VITE_APPLICATION_URL),
  loginUrl: readHttpsUrl('VITE_APPLICATION_LOGIN_URL', import.meta.env.VITE_APPLICATION_LOGIN_URL),
  registrationUrl: readHttpsUrl('VITE_APPLICATION_REGISTRATION_URL', import.meta.env.VITE_APPLICATION_REGISTRATION_URL),
  supportUrl: readHttpsUrl('VITE_SUPPORT_URL', import.meta.env.VITE_SUPPORT_URL),
} as const
