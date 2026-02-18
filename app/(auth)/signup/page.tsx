'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const COUNTRY_CODES = [
  { code: '+39', country: 'IT', flag: '🇮🇹' },
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+44', country: 'GB', flag: '🇬🇧' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+34', country: 'ES', flag: '🇪🇸' },
  { code: '+351', country: 'PT', flag: '🇵🇹' },
  { code: '+41', country: 'CH', flag: '🇨🇭' },
  { code: '+43', country: 'AT', flag: '🇦🇹' },
  { code: '+31', country: 'NL', flag: '🇳🇱' },
  { code: '+32', country: 'BE', flag: '🇧🇪' },
  { code: '+46', country: 'SE', flag: '🇸🇪' },
  { code: '+47', country: 'NO', flag: '🇳🇴' },
  { code: '+45', country: 'DK', flag: '🇩🇰' },
  { code: '+358', country: 'FI', flag: '🇫🇮' },
  { code: '+48', country: 'PL', flag: '🇵🇱' },
  { code: '+30', country: 'GR', flag: '🇬🇷' },
  { code: '+353', country: 'IE', flag: '🇮🇪' },
  { code: '+55', country: 'BR', flag: '🇧🇷' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+82', country: 'KR', flag: '🇰🇷' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+52', country: 'MX', flag: '🇲🇽' },
  { code: '+54', country: 'AR', flag: '🇦🇷' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
  { code: '+966', country: 'SA', flag: '🇸🇦' },
  { code: '+90', country: 'TR', flag: '🇹🇷' },
  { code: '+7', country: 'RU', flag: '🇷🇺' },
  { code: '+27', country: 'ZA', flag: '🇿🇦' },
  { code: '+234', country: 'NG', flag: '🇳🇬' },
  { code: '+20', country: 'EG', flag: '🇪🇬' },
  { code: '+212', country: 'MA', flag: '🇲🇦' },
  { code: '+216', country: 'TN', flag: '🇹🇳' },
]

type WhatsAppStep = 'phone' | 'otp'

export default function SignupPage() {
  const [countryCode, setCountryCode] = useState('+39')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [whatsAppStep, setWhatsAppStep] = useState<WhatsAppStep>('phone')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const fullPhone = countryCode + phoneNumber

      // Check if phone already exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('phone_number', fullPhone)
        .single()

      if (existingProfile) {
        setError('Questo numero è già registrato. Accedi invece.')
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/auth/whatsapp/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: fullPhone, isSignup: true }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Errore nell\'invio del codice')
        setIsLoading(false)
        return
      }

      setWhatsAppStep('otp')
    } catch {
      setError('Errore di connessione. Riprova.')
    }

    setIsLoading(false)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/whatsapp/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: countryCode + phoneNumber,
          otp,
          isSignup: true,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Codice non valido')
        setIsLoading(false)
        return
      }

      // Account created, redirect to app
      window.location.href = data.redirectTo || ' /dashboard'
    } catch {
      setError('Errore di connessione. Riprova.')
    }

    setIsLoading(false)
  }

  const resetWhatsApp = () => {
    setWhatsAppStep('phone')
    setOtp('')
    setError('')
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#ECECEC] px-5 py-[50px]">
      <div className="w-full max-w-[400px] bg-white border border-[#D0D0D0] p-5 box-border">
        {/* App Header with Logo */}
        <div className="flex justify-center mb-[30px] pb-[10px]">
          <img src="/LOGO.svg" alt="PeriodiQ" className="h-10" />
        </div>

        {/* Screen Title */}
        <div className="text-lg font-semibold text-left mb-[25px] pb-[5px] border-b border-[#EFEFEF]">
          Crea il tuo account
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-[#F8D7DA] border border-[#F5C6CB] text-[#721C24] px-[10px] py-[10px] mb-4 rounded-[5px] text-sm">
            {error}
            {error.includes('già registrato') && (
              <div className="mt-2">
                <a href="/login" className="text-[#004085] underline hover:text-[#002752]">
                  Vai al login
                </a>
              </div>
            )}
          </div>
        )}

        {/* WhatsApp Signup Form */}
        {whatsAppStep === 'phone' && (
          <form onSubmit={handleSendOtp}>
            <div className="mb-[25px]">
              <div className="text-base mb-[10px]">Inserisci il tuo numero</div>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-[100px] px-2 py-3 text-base border border-[#C0C0C0] bg-[#F5F5F5] rounded-[5px] text-[#666] focus:border-[#888] focus:outline-none cursor-pointer"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Numero di telefono"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-3 py-3 text-base border border-[#C0C0C0] bg-white rounded-[5px] focus:border-[#888] focus:outline-none focus:shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="text-xs text-[#888] mt-2">
                Riceverai un codice di verifica via SMS
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || phoneNumber.length < 9}
              className="w-full px-[15px] py-[15px] bg-gradient-to-b from-[#25D366] to-[#20bd5a] text-white border border-[#1da851] shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)] rounded-lg text-base font-medium cursor-pointer text-center transition-all hover:bg-gradient-to-b hover:from-[#2ae573] hover:to-[#25D366] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Invio in corso...' : 'Invia Codice'}
            </button>
          </form>
        )}

        {whatsAppStep === 'otp' && (
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-[25px]">
              <div className="text-base mb-[10px]">Inserisci il codice ricevuto</div>
              <input
                type="text"
                placeholder="000000"
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full px-3 py-3 text-2xl text-center tracking-[0.5em] border border-[#C0C0C0] bg-white rounded-[5px] focus:border-[#888] focus:outline-none focus:shadow-[0_0_5px_rgba(0,0,0,0.1)]"
              />
              <div className="text-xs text-[#888] mt-2 text-center">
                Codice inviato a {countryCode} {phoneNumber}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || otp.length !== 6}
              className="w-full px-[15px] py-[15px] bg-gradient-to-b from-[#25D366] to-[#20bd5a] text-white border border-[#1da851] shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)] rounded-lg text-base font-medium cursor-pointer text-center transition-all hover:bg-gradient-to-b hover:from-[#2ae573] hover:to-[#25D366] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifica in corso...' : 'Verifica Codice'}
            </button>

            <button
              type="button"
              onClick={resetWhatsApp}
              className="w-full mt-3 text-sm text-[#666] hover:text-[#333] underline"
            >
              Usa un altro numero
            </button>
          </form>
        )}

        {/* Login Link */}
        <div className="mt-5 pt-5 border-t border-[#EFEFEF] text-center text-sm text-[#666666]">
          Hai già un account?{' '}
          <a href="/login" className="text-[#004085] underline hover:text-[#002752] font-medium">
            Accedi
          </a>
        </div>
      </div>
    </div>
  )
}
