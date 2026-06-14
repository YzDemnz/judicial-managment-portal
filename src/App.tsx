import {
  type CSSProperties,
  type FormEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import type { EmailOtpType, Session } from '@supabase/supabase-js'
import {
  AlertCircle,
  Apple,
  ArrowLeft,
  Ban,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CircleUserRound,
  CreditCard,
  Download,
  ExternalLink,
  FileText,
  FolderKanban,
  HeartHandshake,
  Loader2,
  LockKeyhole,
  LogIn,
  LogOut,
  MailCheck,
  Menu,
  MessageSquareText,
  Scale,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  UserCheck,
  UserPlus,
  Users,
  X,
} from 'lucide-react'
import companyLogo from './assets/company-logo.svg'
import { supabase } from './lib/supabase'
import './App.css'

function getBasePath() {
  const base = import.meta.env.BASE_URL || '/'
  return base.endsWith('/') ? base : `${base}/`
}

function assetPath(path: string) {
  return `${getBasePath()}${path.replace(/^\/+/, '')}`
}

function pagePath(path = '/') {
  const base = getBasePath()
  const cleanBase = base === '/' ? '' : base.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return cleanPath === '/' ? `${cleanBase || '/'}` : `${cleanBase}${cleanPath}`
}

const AUTH_CONFIRM_PATH = '/auth/confirm'
const AUTH_CONFIRM_QUERY = 'auth=confirm'
const AUTH_CONFIRM_QUERY_KEY = 'auth'
const AUTH_CONFIRM_QUERY_VALUE = 'confirm'
const AUTH_CALLBACK_SIGNAL_KEYS = [
  'token_hash',
  'code',
  'access_token',
  'refresh_token',
  'error',
  'error_code',
  'error_description',
  'expires_at',
  'expires_in',
  'provider_token',
  'provider_refresh_token',
]
const AUTH_CALLBACK_TYPES = new Set(['signup', 'email', 'magiclink', 'recovery', 'invite', 'email_change', 'reauthentication'])

function appendAuthCallbackParams(targetParams: URLSearchParams, rawParams: string) {
  const cleanParams = rawParams.replace(/^[?#]/, '')

  if (!cleanParams || !cleanParams.includes('=')) return

  const sourceParams = new URLSearchParams(cleanParams)
  sourceParams.forEach((value, key) => {
    if (!targetParams.has(key)) {
      targetParams.set(key, value)
    }
  })
}

function getAuthCallbackParams() {
  const url = new URL(window.location.href)
  const authParams = new URLSearchParams(url.search)
  const hash = url.hash.replace(/^#/, '')

  if (hash) {
    const queryIndex = hash.indexOf('?')
    appendAuthCallbackParams(authParams, queryIndex >= 0 ? hash.slice(queryIndex + 1) : hash)
  }

  return authParams
}

function isAuthConfirmationUrl() {
  const url = new URL(window.location.href)
  const authParams = getAuthCallbackParams()
  const authType = authParams.get('type')?.toLowerCase()

  if (authParams.get(AUTH_CONFIRM_QUERY_KEY) === AUTH_CONFIRM_QUERY_VALUE) return true
  if (url.pathname.endsWith(AUTH_CONFIRM_PATH)) return true
  if (window.location.hash.includes(AUTH_CONFIRM_PATH)) return true

  return AUTH_CALLBACK_SIGNAL_KEYS.some((key) => authParams.has(key)) || Boolean(authType && AUTH_CALLBACK_TYPES.has(authType))
}

function currentAppPath() {
  if (isAuthConfirmationUrl()) return AUTH_CONFIRM_PATH

  const base = getBasePath()
  const cleanBase = base === '/' ? '' : base.replace(/\/$/, '')
  const pathname = window.location.pathname

  if (cleanBase && pathname.startsWith(cleanBase)) {
    return pathname.slice(cleanBase.length) || '/'
  }

  return pathname
}

const WINDOWS_DOWNLOAD_URL =
  'https://github.com/YzDemnz/judicial-managment-portal/releases/latest/download/Judicial-Managment-Setup.exe'
const MAC_DOWNLOAD_URL = assetPath('/downloads/Judicial-Managment-mac-universal.dmg')
const WINDOWS_FILE_NAME = 'Judicial-Managment-Setup.exe'
const MAC_FILE_NAME = 'Judicial Managment mac universal.dmg'
const TERMS_DOC_URL = assetPath('/docs/Judicial-Managment-Terminos-y-Condiciones.docx')
const DESKTOP_APP_URL = 'judicial-managment://auth/callback?source=web'
const OWNER_ADMIN_EMAIL = 'marod_legal@outlook.com'
const GOOGLE_AUTH_ENABLED = false
const MERCADO_PAGO_PAYMENT_URL = 'https://www.mercadopago.com.mx/subscriptions/checkout?preapproval_plan_id=8cb4ab0ac7d343e4a97a31451831f58a'
const MOBILE_ANDROID_APK_URL = 'https://github.com/YzDemnz/judicial-managment-mobile/releases/latest/download/Judicial-Managment-Mobile-Android.apk'
const MOBILE_ANDROID_RELEASE_URL = 'https://github.com/YzDemnz/judicial-managment-mobile/releases/tag/mobile-android-beta'

const installSteps = [
  {
    title: 'Crea tu cuenta',
    copy: 'Entra al portal, escribe tu correo real y una contrasena segura en Crear cuenta.',
  },
  {
    title: 'Confirma tu correo',
    copy: 'Abre el correo de verificacion y espera a que el portal confirme la cuenta.',
  },
  {
    title: 'Descarga e instala',
    copy: 'Descarga la version para Windows, ejecuta el instalador e inicia sesion con la misma cuenta.',
  },
]

const workTutorials = [
  {
    icon: BriefcaseBusiness,
    title: '1. Crea o abre un despacho',
    copy: 'El despacho separa los asuntos, integrantes y permisos de cada equipo. Al entrar eliges el espacio en el que vas a trabajar.',
  },
  {
    icon: Users,
    title: '2. Registra a las personas',
    copy: 'Agrega clientes y colaboradores para que cada expediente tenga responsables claros y datos de contacto disponibles.',
  },
  {
    icon: FolderKanban,
    title: '3. Organiza los expedientes',
    copy: 'Selecciona materia y juzgado, registra las partes y conserva documentos, movimientos y cambios de estado en un solo lugar.',
  },
  {
    icon: CalendarDays,
    title: '4. Controla fechas importantes',
    copy: 'Al registrar una audiencia o vencimiento, la fecha aparece en el calendario para facilitar el seguimiento diario.',
  },
  {
    icon: MessageSquareText,
    title: '5. Coordina al equipo',
    copy: 'El chat del despacho, los reportes y los permisos permiten colaborar sin perder el contexto de cada asunto.',
  },
  {
    icon: FileText,
    title: '6. Redacta y conserva documentos',
    copy: 'Escriba permite preparar documentos jurídicos y mantenerlos vinculados con el expediente correspondiente.',
  },
]

const securityGuidance = [
  {
    icon: MailCheck,
    title: 'Correo verificado',
    purpose: 'Confirma que la cuenta pertenece a una dirección real y permite recuperar el acceso.',
    action: 'Usa un correo que revises con frecuencia y completa la confirmación cuando recibas el mensaje.',
  },
  {
    icon: ShieldCheck,
    title: 'Verificación en dos pasos',
    purpose: 'Añade una barrera adicional si alguien obtiene tu contraseña.',
    action: 'Actívala desde tu perfil y conserva tus códigos de recuperación en un lugar privado.',
  },
  {
    icon: Users,
    title: 'Permisos por despacho',
    purpose: 'Evita que todos los colaboradores puedan modificar o administrar la misma información.',
    action: 'Entrega solo el nivel de acceso necesario y revisa los permisos cuando cambie el equipo.',
  },
  {
    icon: LockKeyhole,
    title: 'Respaldo y recuperación',
    purpose: 'Reduce el riesgo de perder continuidad cuando un archivo se elimina o un equipo deja de funcionar.',
    action: 'Mantén tus datos actualizados y verifica periódicamente los documentos importantes del despacho.',
  },
]

const projectMessages = [
  {
    icon: BookOpenCheck,
    title: 'Creado desde cero',
    copy: 'Judicial Managment nació como una idea sencilla y fue creciendo módulo por módulo, escuchando necesidades reales del trabajo jurídico.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Pensado para el trabajo diario',
    copy: 'Esperamos que ayude a mantener cada asunto más claro, reducir tareas repetitivas y dar tranquilidad al equipo del despacho.',
  },
  {
    icon: HeartHandshake,
    title: 'Una versión completa',
    copy: 'La aplicación actual puede utilizarse como producto completo. La suscripción es una forma voluntaria de apoyar nuevas funciones, mantenimiento y mejoras.',
  },
]

const localAISetupSteps = [
  {
    title: 'Instala Ollama',
    copy: 'Descarga Ollama para Windows y dejalo abierto. Es el motor local que permite ejecutar modelos en tu equipo.',
  },
  {
    title: 'Elige tu nivel',
    copy: 'Usa Gama Baja, Gama Media o Gama Gamer segun la memoria y tarjeta grafica de la computadora.',
  },
  {
    title: 'Descarga el modelo',
    copy: 'Abre PowerShell y ejecuta el comando del nivel elegido. La descarga puede tardar varios minutos.',
  },
  {
    title: 'Activa Juris IA',
    copy: 'Abre Judicial Managment 2.0, acepta activar los modelos IA y entra al modulo Juris desde el inicio.',
  },
]

const localAIModelTiers = [
  {
    label: 'Equipo de Gama Baja',
    model: 'qwen2.5:1.5b',
    command: 'ollama pull qwen2.5:1.5b',
    requirements: '8 GB RAM o mas',
    copy: 'Ideal para guias cortas, orientacion dentro de la app y tareas simples.',
  },
  {
    label: 'Gama Media',
    model: 'qwen2.5:3b-instruct',
    command: 'ollama pull qwen2.5:3b-instruct',
    requirements: '16 GB RAM o mas',
    copy: 'Recomendado para redactar, resumir y organizar trabajo juridico diario.',
    recommended: true,
  },
  {
    label: 'Gama Gamer',
    model: 'qwen3:4b',
    command: 'ollama pull qwen3:4b',
    requirements: '32 GB RAM y GPU con 6 GB VRAM recomendados',
    copy: 'Mejor para respuestas mas largas, revision de textos y analisis mas pesados.',
  },
]

type AuthMode = 'login' | 'signup'
type ConfirmStatus = 'verifying' | 'success' | 'error'
type AppRole = 'owner' | 'admin' | 'user'
type AccountStatus = 'active' | 'disabled' | 'banned'
type SubscriptionStatus = 'trial' | 'active' | 'past_due' | 'canceled' | 'manual'

interface AppProfile {
  id: string
  email: string | null
  role: AppRole
  account_status?: AccountStatus
  subscription_status?: SubscriptionStatus
  trial_started_at?: string | null
  trial_ends_at?: string | null
  ban_until?: string | null
  ban_reason?: string | null
  disabled_reason?: string | null
  last_seen_at?: string | null
  usage_seconds?: number | null
  created_at?: string
  updated_at?: string
}

type SupportReportStatus = 'new' | 'in_review' | 'waiting_user' | 'resolved' | 'closed'
type SupportReportPriority = 'low' | 'normal' | 'high' | 'urgent'

interface SupportReport {
  id: string
  user_id: string
  despacho_id?: string | null
  category: string
  priority: SupportReportPriority
  title: string
  description: string
  steps_to_reproduce: string
  expected_behavior: string
  contains_sensitive_data: boolean
  app_version?: string | null
  platform?: string | null
  status: SupportReportStatus
  admin_notes?: string | null
  admin_reply?: string | null
  reviewed_at?: string | null
  resolved_at?: string | null
  created_at: string
  updated_at: string
}

const supportReportStatusLabels: Record<SupportReportStatus, string> = {
  new: 'Nuevo',
  in_review: 'En revision',
  waiting_user: 'Esperando usuario',
  resolved: 'Resuelto',
  closed: 'Cerrado',
}

const supportReportPriorityLabels: Record<SupportReportPriority, string> = {
  low: 'Baja',
  normal: 'Normal',
  high: 'Alta',
  urgent: 'Urgente',
}

const supportReportCategoryLabels: Record<string, string> = {
  error: 'Error',
  sugerencia: 'Sugerencia',
  cuenta: 'Cuenta y acceso',
  seguridad: 'Seguridad',
  privacidad: 'Privacidad / ARCO',
  datos: 'Datos y respaldos',
  actualizacion: 'Actualizacion',
  otro: 'Soporte general',
}

interface DespachoSummary {
  id: string
  nombre: string
  owner_user_id: string | null
  deleted_at?: string | null
  created_at: string
}

interface DespachoMemberSummary {
  id: string
  despacho_id: string
  user_id: string
  role: string
}

interface ModerationFlag {
  id: string
  despacho_id: string
  message_id: string
  user_id: string
  matched_category: string
  matched_terms: string[] | null
  excerpt: string
  status: 'pending' | 'reviewed' | 'dismissed' | 'banned'
  reviewed_by?: string | null
  reviewed_at?: string | null
  admin_notes?: string | null
  created_at: string
}

interface ChatMessagePreview {
  id: string
  despacho_id: string
  sender_user_id: string
  body: string
  created_at: string
}

const getConfirmRedirectUrl = () => `${window.location.origin}${pagePath('/')}?${AUTH_CONFIRM_QUERY}`
const isOwnerAdminAccount = (session: Session | null, profile: AppProfile | null) =>
  session?.user?.email?.toLowerCase() === OWNER_ADMIN_EMAIL && profile?.role === 'owner'

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [sessionLoading, setSessionLoading] = useState(true)
  const [appProfile, setAppProfile] = useState<AppProfile | null>(null)
  const [profileLoading, setProfileLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let mounted = true

    supabase.auth.getSession().then(({ data }) => {
      if (mounted) {
        setProfileLoading(Boolean(data.session))
        if (!data.session) {
          setAppProfile(null)
        }
        setSession(data.session)
        setSessionLoading(false)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      if (nextSession) {
        setProfileLoading(true)
      } else {
        setAppProfile(null)
        setProfileLoading(false)
      }
      setSessionLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const userId = session?.user?.id

    if (!userId) return

    let mounted = true

    const loadProfile = async () => {
      setProfileLoading(true)
      const { data, error } = await supabase
        .from('app_profiles')
        .select('id,email,role,account_status,subscription_status,trial_started_at,trial_ends_at,ban_until,ban_reason,disabled_reason,last_seen_at,usage_seconds,created_at,updated_at')
        .eq('id', userId)
        .maybeSingle()

      let nextProfile = data as AppProfile | null
      if (!nextProfile || error) {
        const syncResult = await supabase.rpc('ensure_own_app_profile')
        nextProfile = (syncResult.data as AppProfile | null) ?? nextProfile
      }

      if (mounted) {
        setAppProfile(nextProfile)
        setProfileLoading(false)
      }
    }

    loadProfile().catch(() => {
        if (mounted) {
          setAppProfile(null)
          setProfileLoading(false)
        }
    })

    return () => {
      mounted = false
    }
  }, [session?.user?.id])

  const currentPath = currentAppPath()

  if (currentPath === AUTH_CONFIRM_PATH) {
    return <AuthConfirmPage session={session} sessionLoading={sessionLoading} />
  }

  const handleTopbarSignOut = async () => {
    setMobileMenuOpen(false)
    await supabase.auth.signOut()
  }
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const canAccessAdmin = isOwnerAdminAccount(session, appProfile)
  const navClass = (path: string) => {
    if (path === '/') return currentPath === '/' ? 'active' : undefined
    return currentPath === path || currentPath.startsWith(`${path}/`) ? 'active' : undefined
  }
  const isPublicInformationPath = [
    '/trabajo',
    '/seguridad',
    '/como-instalar',
    '/movil',
    '/descargas',
    '/acceso',
    '/ia-local',
  ].some((path) => currentPath === path || currentPath.startsWith(`${path}/`))

  return (
    <main className="site-shell">
      <header className={`topbar ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Principal">
        <a className="brand-lockup" href={pagePath('/')} aria-label="Judicial Managment" onClick={closeMobileMenu}>
          <img src={companyLogo} alt="" className="brand-mark" />
          <span>
            <strong>Judicial Managment</strong>
            <small>MR Legal</small>
          </span>
        </a>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Menu</span>
        </button>

        <nav id="site-navigation" className={`topnav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Secciones">
          <a className={navClass('/')} href={pagePath('/')} onClick={closeMobileMenu}>Inicio</a>
          <a className={navClass('/trabajo')} href={pagePath('/trabajo')} onClick={closeMobileMenu}>Trabajo</a>
          <a className={navClass('/seguridad')} href={pagePath('/seguridad')} onClick={closeMobileMenu}>Seguridad</a>
          <a className={navClass('/como-instalar')} href={pagePath('/como-instalar')} onClick={closeMobileMenu}>Como instalar</a>
          <a className={navClass('/movil')} href={pagePath('/movil')} onClick={closeMobileMenu}>Movil</a>
          <a className={navClass('/descargas')} href={pagePath('/descargas')} onClick={closeMobileMenu}>Descargas</a>
          <a className={navClass('/acceso')} href={pagePath('/acceso')} onClick={closeMobileMenu}>Acceso</a>
        </nav>

        <div className="nav-actions">
          {sessionLoading ? (
            <div className="nav-session-loading" aria-live="polite">
              <Loader2 className="spin" size={17} />
              <span>Sesion...</span>
            </div>
          ) : session?.user?.email ? (
            <AccountMenu
              email={session.user.email}
              profile={appProfile}
              profileLoading={profileLoading}
              canAccessAdmin={canAccessAdmin}
              onSignOut={handleTopbarSignOut}
            />
          ) : (
            <a className="nav-login" href={pagePath('/acceso')}>
              <LogIn size={17} />
              <span>Iniciar sesion</span>
            </a>
          )}
          <a
            className="nav-download"
            href={WINDOWS_DOWNLOAD_URL}
            download={WINDOWS_FILE_NAME}
            aria-label="Descargar Judicial Managment para Windows"
            onClick={closeMobileMenu}
          >
            <Download size={18} />
            <span>Windows</span>
          </a>
        </div>
      </header>

      {currentPath === '/configuracion' ? (
        <AccountSettingsPage session={session} sessionLoading={sessionLoading} profile={appProfile} />
      ) : currentPath === '/admin' ? (
        <AdminPage
          session={session}
          sessionLoading={sessionLoading}
          profileLoading={profileLoading}
          canAccessAdmin={canAccessAdmin}
        />
      ) : isPublicInformationPath ? (
        <PublicInformationPage
          path={currentPath}
          session={session}
          sessionLoading={sessionLoading}
        />
      ) : (
        <LandingPage session={session} />
      )}
    </main>
  )
}

interface LandingPageProps {
  session: Session | null
}

function LandingPage({ session }: LandingPageProps) {
  return (
    <>
      <section id="inicio" className="product-hero">
        <div className="product-hero-grid">
          <div className="product-hero-copy">
            <p className="product-kicker">
              <Scale size={17} />
              Software juridico de escritorio
            </p>
            <h1>
              <span>Judicial</span>
              <strong>Managment</strong>
            </h1>
            <p className="product-lead">
              Controla expedientes, clientes, movimientos, calendario, documentos y
              colaboracion interna desde una aplicacion profesional para despachos.
            </p>

            <div id="descargas" className="product-downloads" aria-label="Descargas">
              <a className="product-download primary" href={WINDOWS_DOWNLOAD_URL} download={WINDOWS_FILE_NAME}>
                <Download size={20} />
                <span>
                  Descargar para Windows
                  <small>Instalador x64 para beta cerrada</small>
                </span>
              </a>
              <a
                className="product-download secondary"
                href={MAC_DOWNLOAD_URL}
                download={MAC_FILE_NAME}
                aria-disabled="true"
                onClick={(event) => event.preventDefault()}
              >
                <Apple size={20} />
                <span>
                  Descargar para Mac
                  <small>Proximamente</small>
                </span>
              </a>
              <a className="product-download mobile" href={MOBILE_ANDROID_APK_URL}>
                <Smartphone size={20} />
                <span>
                  Descargar app movil
                  <small>APK Android beta</small>
                </span>
              </a>
            </div>

            {session?.user?.email ? (
              <div className="hero-account-card">
                <div className="hero-account-badge">
                  <CheckCircle2 size={15} />
                  Cuenta verificada
                </div>
                <strong>{session.user.email}</strong>
                <p>Usa esta misma cuenta dentro de la aplicacion de escritorio.</p>
                <div>
                  <a href={WINDOWS_DOWNLOAD_URL} download={WINDOWS_FILE_NAME}>
                    <Download size={16} />
                    Descargar
                  </a>
                  <a href={DESKTOP_APP_URL}>
                    <ExternalLink size={16} />
                    Abrir app
                  </a>
                  <a href={MERCADO_PAGO_PAYMENT_URL} target="_blank" rel="noreferrer">
                    <CreditCard size={16} />
                    Suscripcion
                  </a>
                </div>
              </div>
            ) : (
              <a className="hero-access-link" href={pagePath('/acceso')}>
                <UserCheck size={20} />
                <span>
                  <strong>Crea tu cuenta para la beta privada</strong>
                  <small>Confirma tu correo y usa la misma sesion en Windows o Android.</small>
                </span>
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <div className="product-preview" aria-label="Captura actual de Judicial Managment">
            <div className="product-preview-header">
              <div>
                <img src={companyLogo} alt="" />
                <span>
                  <strong>Judicial Managment</strong>
                  <small>Aplicacion de escritorio 2.2</small>
                </span>
              </div>
              <span className="live-product-badge">
                <CheckCircle2 size={14} />
                Captura actual
              </span>
            </div>
            <div className="product-preview-image">
              <img
                src={assetPath('/app-dashboard-current.png')}
                alt="Panel de Control actual de Judicial Managment en modo oscuro"
              />
            </div>
            <div className="product-preview-footer">
              <span>
                <ShieldCheck size={16} />
                Correo verificado, 2FA y respaldos
              </span>
              <a href={pagePath('/trabajo')}>
                Ver funciones
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="quick-module-grid" aria-label="Modulos principales">
          {[
            { icon: FileText, title: 'Expedientes', copy: 'Materias, juzgados y etapas procesales.', href: '/trabajo/expedientes' },
            { icon: BriefcaseBusiness, title: 'Despachos', copy: 'Roles, permisos y colaboradores.', href: '/trabajo/despachos' },
            { icon: ShieldCheck, title: 'Seguridad', copy: '2FA, permisos y respaldos.', href: '/seguridad' },
            { icon: CalendarDays, title: 'Calendario', copy: 'Audiencias y recordatorios.', href: '/trabajo/calendario' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <a href={pagePath(item.href)} key={item.title}>
                <span className="quick-module-icon"><Icon size={21} /></span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.copy}</small>
                  <em>Ver mas <ExternalLink size={13} /></em>
                </span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="project-story" aria-labelledby="project-story-title">
        <div className="project-story-heading">
          <p className="eyebrow"><BookOpenCheck size={17} /> Nuestra historia</p>
          <h2 id="project-story-title">Una herramienta construida paso a paso para despachos reales.</h2>
          <p>
            El proyecto continúa creciendo con una idea sencilla: que la tecnología jurídica
            sea clara, útil y accesible sin convertir el trabajo diario en algo más complicado.
          </p>
        </div>
        <div className="project-story-grid">
          {projectMessages.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="support-project" aria-labelledby="support-project-title">
        <div>
          <p className="eyebrow"><HeartHandshake size={17} /> Apoya el proyecto</p>
          <h2 id="support-project-title">La aplicación es completa; tu apoyo nos permite seguir mejorándola.</h2>
          <p>
            Suscribirte ayuda a mantener actualizaciones, soporte y nuevas herramientas.
            El uso actual de la aplicación no depende de realizar un donativo.
          </p>
        </div>
        <a href={MERCADO_PAGO_PAYMENT_URL} target="_blank" rel="noreferrer">
          <CreditCard size={19} />
          Apoyar con suscripción
          <ExternalLink size={15} />
        </a>
      </section>

      <DonationPreview />

      <EnterpriseFooter />
    </>
  )
}

interface PublicInformationPageProps {
  path: string
  session: Session | null
  sessionLoading: boolean
}

function PublicInformationPage({ path, session, sessionLoading }: PublicInformationPageProps) {
  const workFocus = path.split('/')[2] ?? ''
  const workHeadings: Record<string, { title: string; copy: string }> = {
    expedientes: {
      title: 'Expedientes claros desde el registro hasta el archivo.',
      copy: 'Conoce el recorrido básico para registrar un asunto, mantenerlo actualizado y consultar su historia sin perder información.',
    },
    despachos: {
      title: 'Un espacio separado para cada equipo de trabajo.',
      copy: 'Organiza colaboradores y permisos para que cada persona vea o modifique únicamente lo que necesita.',
    },
    calendario: {
      title: 'Fechas importantes visibles para todo el despacho.',
      copy: 'Registra audiencias y vencimientos desde los movimientos para convertir el calendario en una guía diaria.',
    },
  }
  const workHeading = workHeadings[workFocus] ?? {
    title: 'Una forma sencilla de trabajar dentro de Judicial Managment.',
    copy: 'Estos recorridos breves muestran cómo se conectan los módulos principales durante el trabajo diario del despacho.',
  }

  let content: ReactNode

  if (path.startsWith('/trabajo')) {
    content = (
      <>
        <InformationHero
          icon={BriefcaseBusiness}
          eyebrow="Trabajo del despacho"
          title={workHeading.title}
          copy={workHeading.copy}
        />
        <section className="info-band" aria-labelledby="work-tutorial-title">
          <div className="info-section-heading">
            <p className="eyebrow"><BookOpenCheck size={17} /> Mini tutorial</p>
            <h2 id="work-tutorial-title">Del primer acceso al seguimiento cotidiano.</h2>
            <p>Cada paso está pensado para que el equipo encuentre rápidamente qué hacer después.</p>
          </div>
          <div className="tutorial-grid">
            {workTutorials.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title}>
                  <Icon size={23} />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              )
            })}
          </div>
        </section>
        <section className="info-band alternate">
          <div className="info-section-heading">
            <p className="eyebrow"><FolderKanban size={17} /> Recorridos específicos</p>
            <h2>Abre únicamente el tema que necesitas.</h2>
          </div>
          <div className="info-route-grid">
            <a href={pagePath('/trabajo/expedientes')}><FileText size={21} /><span><strong>Expedientes</strong><small>Registro, movimientos, documentos y archivo.</small></span></a>
            <a href={pagePath('/trabajo/despachos')}><BriefcaseBusiness size={21} /><span><strong>Despachos</strong><small>Integrantes, roles y permisos de acceso.</small></span></a>
            <a href={pagePath('/trabajo/calendario')}><CalendarDays size={21} /><span><strong>Calendario</strong><small>Audiencias, vencimientos y recordatorios.</small></span></a>
          </div>
        </section>
      </>
    )
  } else if (path === '/seguridad') {
    content = (
      <>
        <InformationHero
          icon={ShieldCheck}
          eyebrow="Seguridad"
          title="Protecciones que ayudan a conservar el control de tu información."
          copy="Aquí explicamos por qué existe cada medida, qué debes hacer como usuario y qué riesgo ayuda a reducir."
        />
        <section className="info-band" aria-labelledby="security-purpose-title">
          <div className="info-section-heading">
            <p className="eyebrow"><ShieldCheck size={17} /> Tu participación importa</p>
            <h2 id="security-purpose-title">La seguridad funciona mejor cuando todos cuidan su acceso.</h2>
          </div>
          <div className="security-purpose-grid">
            {securityGuidance.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <strong>¿Para qué sirve?</strong>
                  <p>{item.purpose}</p>
                  <strong>¿Qué debes hacer?</strong>
                  <p>{item.action}</p>
                </article>
              )
            })}
          </div>
        </section>
        <section className="security-reminder">
          <ShieldAlert size={28} />
          <div>
            <h2>Tu contraseña nunca debe compartirse.</h2>
            <p>Cada colaborador debe utilizar su propia cuenta. Así los permisos pueden retirarse sin afectar al resto del despacho.</p>
          </div>
        </section>
      </>
    )
  } else if (path === '/como-instalar') {
    content = (
      <>
        <InformationHero
          icon={Download}
          eyebrow="Cómo instalar"
          title="Prepara tu cuenta y entra a la aplicación en pocos pasos."
          copy="El portal guía la creación de cuenta, la confirmación del correo y la descarga oficial para Windows."
        />
        <section className="info-band">
          <div className="install-steps">
            {installSteps.map((step, index) => (
              <article className="install-step" key={step.title}>
                <strong>{index + 1}</strong>
                <span><h3>{step.title}</h3><p>{step.copy}</p></span>
              </article>
            ))}
          </div>
          <div className="defender-note">
            <ShieldAlert size={23} />
            <span>
              <strong>Acerca del aviso de Windows</strong>
              <p>
                La distribución cerrada todavía no cuenta con certificado comercial de firma digital.
                Windows puede advertir que no reconoce al editor. Descarga siempre desde este portal oficial.
              </p>
            </span>
          </div>
        </section>
      </>
    )
  } else if (path === '/movil') {
    content = (
      <>
        <InformationHero
          icon={Smartphone}
          eyebrow="Aplicación móvil"
          title="Consulta y registra trabajo desde Android."
          copy="La versión móvil comparte la cuenta y los despachos de la aplicación de escritorio, con una interfaz ajustada a pantallas pequeñas."
        />
        <section className="info-band">
          <div className="mobile-download-grid">
            <article><IonAndroidIcon /><h3>Android</h3><p>APK beta para pruebas controladas.</p><a href={MOBILE_ANDROID_APK_URL}>Descargar aplicación</a></article>
            <article><Apple size={28} /><h3>iPhone</h3><p>La edición para iOS requiere distribución y firma de Apple.</p><span>En preparación</span></article>
            <article><ExternalLink size={28} /><h3>Notas de versión</h3><p>Consulta el paquete publicado y su fecha de actualización.</p><a href={MOBILE_ANDROID_RELEASE_URL} target="_blank" rel="noreferrer">Ver versión</a></article>
          </div>
        </section>
      </>
    )
  } else if (path === '/descargas') {
    content = (
      <>
        <InformationHero
          icon={Download}
          eyebrow="Descargas oficiales"
          title="Elige la versión adecuada para tu equipo."
          copy="Todos los instaladores disponibles se concentran aquí para evitar confusiones con versiones antiguas."
        />
        <section className="info-band">
          <div className="download-catalog">
            <article><Download size={25} /><h3>Windows</h3><p>Aplicación de escritorio completa para equipos x64.</p><a href={WINDOWS_DOWNLOAD_URL} download={WINDOWS_FILE_NAME}>Descargar instalador</a></article>
            <article className="unavailable"><Apple size={25} /><h3>Mac</h3><p>La versión universal está en preparación.</p><span>Próximamente</span></article>
            <article><Smartphone size={25} /><h3>Android</h3><p>Aplicación móvil beta conectada a tu cuenta.</p><a href={MOBILE_ANDROID_APK_URL}>Descargar APK</a></article>
            <article><Sparkles size={25} /><h3>Juris IA local</h3><p>Consulta los requisitos y modelos opcionales para tu computadora.</p><a href={pagePath('/ia-local')}>Ver guía de IA</a></article>
          </div>
        </section>
      </>
    )
  } else if (path === '/ia-local') {
    content = (
      <>
        <InformationHero
          icon={Sparkles}
          eyebrow="Juris IA local"
          title="Modelos opcionales que trabajan desde tu computadora."
          copy="Esta función se activa únicamente cuando el usuario decide instalar un motor y un modelo compatible con su equipo."
        />
        <section className="info-band">
          <div className="ai-flashcards" aria-label="Pasos para instalar Juris IA local">
            {localAISetupSteps.map((step, index) => (
              <article className="ai-flashcard" key={step.title} style={{ '--card-index': index } as CSSProperties}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="ai-download-panel">
            <div className="ai-download-copy">
              <h3>Motor local</h3>
              <p>Instala Ollama y elige un modelo de acuerdo con la capacidad de tu computadora.</p>
              <a className="product-download secondary ai-engine-link" href="https://ollama.com/download/windows" target="_blank" rel="noreferrer">
                <Download size={20} /><span>Descargar Ollama<small>Motor local para IA</small></span>
              </a>
            </div>
            <div className="ai-tier-grid">
              {localAIModelTiers.map((tier) => (
                <article className={tier.recommended ? 'ai-tier recommended' : 'ai-tier'} key={tier.model}>
                  {tier.recommended && <span className="tier-badge">Recomendado</span>}
                  <h3>{tier.label}</h3><small>{tier.requirements}</small><p>{tier.copy}</p><code>{tier.command}</code>
                </article>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  } else {
    content = (
      <>
        <InformationHero
          icon={CircleUserRound}
          eyebrow="Cuenta y acceso"
          title="Una cuenta para todas las versiones."
          copy="Crea tu cuenta con un correo real, confírmalo y utiliza las mismas credenciales en Windows y Android."
        />
        <section className="access-page-band">
          <div>
            <h2>Tu despacho comienza con una cuenta verificada.</h2>
            <p>La confirmación permite recuperar el acceso y mantener separadas las cuentas de cada colaborador.</p>
          </div>
          <AuthPanel session={session} sessionLoading={sessionLoading} />
        </section>
      </>
    )
  }

  return (
    <div className="public-information-page">
      <a className="info-back-link" href={pagePath('/')}>
        <ArrowLeft size={17} />
        Volver al inicio
      </a>
      {content}
      <EnterpriseFooter />
    </div>
  )
}

interface InformationHeroProps {
  icon: typeof BriefcaseBusiness
  eyebrow: string
  title: string
  copy: string
}

function InformationHero({ icon: Icon, eyebrow, title, copy }: InformationHeroProps) {
  return (
    <section className="information-hero">
      <div>
        <p className="eyebrow"><Icon size={17} /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      <img src={companyLogo} alt="" />
    </section>
  )
}

function DonationPreview() {
  const [amount, setAmount] = useState(50)

  const updateAmount = (value: number) => {
    setAmount(Math.max(1, Number.isFinite(value) ? Math.round(value) : 1))
  }

  return (
    <section className="donation-preview" aria-labelledby="donation-title">
      <div className="donation-copy">
        <p className="eyebrow"><WalletCards size={17} /> Donativos</p>
        <h2 id="donation-title">Cada peso puede convertirse en una mejora.</h2>
        <p>
          Este apartado es una vista previa. Más adelante permitirá enviar un apoyo voluntario
          desde $1 MXN, sin modificar el acceso actual a la aplicación.
        </p>
      </div>
      <div className="donation-control" aria-label="Vista previa de donativo">
        <label htmlFor="donation-amount">Cantidad voluntaria</label>
        <div className="donation-input">
          <span>$</span>
          <input
            id="donation-amount"
            type="number"
            min="1"
            step="1"
            value={amount}
            onChange={(event) => updateAmount(Number(event.target.value))}
          />
          <small>MXN</small>
        </div>
        <div className="donation-presets">
          {[1, 20, 50, 100].map((value) => (
            <button className={amount === value ? 'selected' : ''} type="button" key={value} onClick={() => updateAmount(value)}>
              ${value}
            </button>
          ))}
        </div>
        <button className="donation-disabled" type="button" disabled>
          <HeartHandshake size={18} />
          Donativos próximamente
        </button>
      </div>
    </section>
  )
}

interface AccountMenuProps {
  email: string
  profile: AppProfile | null
  profileLoading: boolean
  canAccessAdmin: boolean
  onSignOut: () => Promise<void>
}

function AccountMenu({ email, profile, profileLoading, canAccessAdmin, onSignOut }: AccountMenuProps) {
  const normalizedEmail = email.toLowerCase()
  const shortEmail = normalizedEmail.length > 28 ? `${normalizedEmail.slice(0, 25)}...` : normalizedEmail
  const roleLabel = canAccessAdmin ? 'Administrador' : profile?.role === 'admin' ? 'Administrador' : 'Cuenta activa'

  return (
    <details className="account-menu">
      <summary className="account-trigger" aria-label={`Cuenta activa ${normalizedEmail}`}>
        <CircleUserRound size={18} />
        <span>{shortEmail}</span>
        <ChevronDown size={15} />
      </summary>

      <div className="account-dropdown">
        <small>{profileLoading ? 'Verificando rol' : roleLabel}</small>
        <strong>{normalizedEmail}</strong>
        {canAccessAdmin && (
          <a href={pagePath('/admin')}>
            <ShieldCheck size={16} />
            Admin
          </a>
        )}
          <a href={pagePath('/configuracion')}>
          <Settings size={16} />
          Configuracion
        </a>
        <button type="button" onClick={onSignOut}>
          <LogOut size={16} />
          Cerrar sesion
        </button>
      </div>
    </details>
  )
}

function AuthRequiredPanel() {
  return (
    <section className="portal-page">
      <div className="portal-card centered">
        <LockKeyhole size={34} />
        <h1>Inicia sesion</h1>
        <p>Necesitas una cuenta activa para entrar a esta seccion del portal.</p>
            <a className="portal-primary-link" href={pagePath('/acceso')}>
          Ir al acceso
        </a>
      </div>
    </section>
  )
}

interface AccountSettingsPageProps {
  session: Session | null
  sessionLoading: boolean
  profile: AppProfile | null
}

function AccountSettingsPage({ session, sessionLoading, profile }: AccountSettingsPageProps) {
  const metadata = (session?.user?.user_metadata ?? {}) as Record<string, string | undefined>
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [reportCategory, setReportCategory] = useState('otro')
  const [reportTitle, setReportTitle] = useState('')
  const [reportBody, setReportBody] = useState('')
  const [busyAction, setBusyAction] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  if (sessionLoading) {
    return (
      <section className="portal-page">
        <div className="portal-card centered">
          <Loader2 className="spin" size={34} />
          <h1>Revisando sesion</h1>
          <p>Estamos validando tu acceso seguro.</p>
        </div>
      </section>
    )
  }

  if (!session?.user) return <AuthRequiredPanel />

  const clearFeedback = () => {
    setError('')
    setMessage('')
  }

  const handleProfileSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearFeedback()
    setBusyAction('profile')
    const formData = new FormData(event.currentTarget)
    const nextDisplayName = String(formData.get('display_name') ?? '').trim()
    const nextJobTitle = String(formData.get('job_title') ?? '').trim()
    const nextPhone = String(formData.get('phone') ?? '').trim()
    const nextProfileColor = String(formData.get('profile_color') ?? '#365b86')

    const { error: updateError } = await supabase.auth.updateUser({
      data: {
        ...metadata,
        display_name: nextDisplayName,
        job_title: nextJobTitle,
        phone: nextPhone,
        profile_color: nextProfileColor,
      },
    })

    setBusyAction('')
    if (updateError) {
      setError(updateError.message)
      return
    }
    setMessage('Perfil actualizado correctamente.')
  }

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearFeedback()

    if (!newEmail.trim()) {
      setError('Escribe el nuevo correo.')
      return
    }

    setBusyAction('email')
    const { error: emailError } = await supabase.auth.updateUser(
      { email: newEmail.trim() },
      { emailRedirectTo: getConfirmRedirectUrl() },
    )

    setBusyAction('')
    if (emailError) {
      setError(emailError.message)
      return
    }
    setNewEmail('')
    setMessage('Supabase envio un correo de confirmacion para completar el cambio.')
  }

  const handlePasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearFeedback()

    if (newPassword.length < 8) {
      setError('La nueva contrasena debe tener minimo 8 caracteres.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Las contrasenas no coinciden.')
      return
    }

    setBusyAction('password')
    const { error: passwordError } = await supabase.auth.updateUser({ password: newPassword })

    setBusyAction('')
    if (passwordError) {
      setError(passwordError.message)
      return
    }
    setNewPassword('')
    setConfirmPassword('')
    setMessage('Contrasena actualizada.')
  }

  const handleReportSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearFeedback()

    if (reportTitle.trim().length < 4 || reportBody.trim().length < 10) {
      setError('Agrega un poco mas de detalle al reporte.')
      return
    }

    setBusyAction('report')
    const { error: reportError } = await supabase.rpc('create_support_report', {
      report_category: reportCategory,
      report_priority: 'normal',
      report_title: reportTitle.trim(),
      report_description: reportBody.trim(),
      report_steps: '',
      report_expected: '',
      report_despacho_id: null,
      report_contains_sensitive_data: false,
      report_app_version: 'portal-web',
      report_platform: navigator.platform,
    })

    setBusyAction('')
    if (reportError) {
      setError(reportError.message)
      return
    }
    setReportTitle('')
    setReportBody('')
    setMessage('Reporte enviado. Ya puede revisarse y responderse desde administracion.')
  }

  return (
    <section className="portal-page">
      <div className="portal-heading">
        <p className="eyebrow">
          <Settings size={18} />
          Configuracion
        </p>
        <h1>Cuenta y perfil</h1>
        <p>Administra tu identidad dentro del portal, seguridad y reportes de soporte.</p>
      </div>

      {(message || error) && (
        <div className={`portal-alert ${error ? 'error' : 'success'}`}>
          {error ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
          <span>{error || message}</span>
        </div>
      )}

      <div className="settings-grid">
        <form className="portal-card settings-form" onSubmit={handleProfileSubmit}>
          <div className="card-title-row">
            <CircleUserRound size={22} />
            <span>
              <strong>Personalizar perfil</strong>
              <small>Nombre visible, cargo, telefono y color.</small>
            </span>
          </div>
          <label>
            Nombre visible
            <input name="display_name" defaultValue={metadata.display_name ?? ''} placeholder="Lic. Martinez" />
          </label>
          <label>
            Cargo o descripcion
            <input name="job_title" defaultValue={metadata.job_title ?? ''} placeholder="Administrador del despacho" />
          </label>
          <label>
            Telefono
            <input name="phone" defaultValue={metadata.phone ?? ''} placeholder="871 000 0000" />
          </label>
          <label>
            Color de perfil
            <input className="color-input" name="profile_color" type="color" defaultValue={metadata.profile_color ?? '#365b86'} />
          </label>
          <button type="submit" disabled={busyAction === 'profile'}>
            {busyAction === 'profile' ? <Loader2 className="spin" size={17} /> : <UserCheck size={17} />}
            Guardar perfil
          </button>
        </form>

        <div className="portal-card">
          <div className="card-title-row">
            <UserCheck size={22} />
            <span>
              <strong>Corroborar datos</strong>
              <small>Informacion de cuenta actual.</small>
            </span>
          </div>
          <dl className="data-list">
            <div>
              <dt>Correo</dt>
              <dd>{session.user.email}</dd>
            </div>
            <div>
              <dt>Correo confirmado</dt>
              <dd>{session.user.email_confirmed_at ? 'Si' : 'Pendiente'}</dd>
            </div>
            <div>
              <dt>Rol portal</dt>
              <dd>{profile?.role ?? 'user'}</dd>
            </div>
            <div>
              <dt>ID usuario</dt>
              <dd>{session.user.id}</dd>
            </div>
            <div>
              <dt>Alta</dt>
              <dd>{formatDate(session.user.created_at)}</dd>
            </div>
          </dl>
        </div>

        <div className="portal-card payment-panel">
          <div className="card-title-row">
            <CreditCard size={22} />
            <span>
              <strong>Suscripcion de licencia</strong>
              <small>Plan mensual por Mercado Pago.</small>
            </span>
          </div>
          <p>
            Usa el link seguro de Mercado Pago para activar la mensualidad. Despues de suscribirte,
            conserva tu comprobante para validar la licencia desde administracion.
          </p>
          <a className="portal-primary-link payment-link" href={MERCADO_PAGO_PAYMENT_URL} target="_blank" rel="noreferrer">
            <CreditCard size={17} />
            Suscribirme con Mercado Pago
          </a>
        </div>

        <form className="portal-card settings-form" onSubmit={handleEmailSubmit}>
          <div className="card-title-row">
            <MailCheck size={22} />
            <span>
              <strong>Cambiar correo</strong>
              <small>Requiere confirmacion por email.</small>
            </span>
          </div>
          <label>
            Nuevo correo
            <input type="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} placeholder="nuevo@correo.com" />
          </label>
          <button type="submit" disabled={busyAction === 'email'}>
            {busyAction === 'email' ? <Loader2 className="spin" size={17} /> : <MailCheck size={17} />}
            Enviar confirmacion
          </button>
        </form>

        <form className="portal-card settings-form" onSubmit={handlePasswordSubmit}>
          <div className="card-title-row">
            <LockKeyhole size={22} />
            <span>
              <strong>Cambiar contrasena</strong>
              <small>Usa una clave exclusiva para la app.</small>
            </span>
          </div>
          <label>
            Nueva contrasena
            <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} minLength={8} />
          </label>
          <label>
            Confirmar contrasena
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} minLength={8} />
          </label>
          <button type="submit" disabled={busyAction === 'password'}>
            {busyAction === 'password' ? <Loader2 className="spin" size={17} /> : <LockKeyhole size={17} />}
            Actualizar contrasena
          </button>
        </form>

        <form className="portal-card settings-form wide" onSubmit={handleReportSubmit}>
          <div className="card-title-row">
            <MessageSquareText size={22} />
            <span>
              <strong>Enviar reporte</strong>
              <small>Errores, dudas, solicitudes o sugerencias.</small>
            </span>
          </div>
          <label>
            Tipo de reporte
            <select value={reportCategory} onChange={(event) => setReportCategory(event.target.value)}>
              <option value="otro">Soporte general</option>
              <option value="error">Error</option>
              <option value="seguridad">Seguridad</option>
              <option value="cuenta">Cuenta y acceso</option>
              <option value="privacidad">Privacidad / ARCO</option>
              <option value="datos">Datos y respaldos</option>
              <option value="actualizacion">Actualizacion</option>
              <option value="sugerencia">Sugerencia</option>
            </select>
          </label>
          <label>
            Titulo
            <input
              value={reportTitle}
              onChange={(event) => setReportTitle(event.target.value)}
              placeholder="Resumen breve del asunto"
              maxLength={160}
              required
            />
          </label>
          <label>
            Descripcion
            <textarea value={reportBody} onChange={(event) => setReportBody(event.target.value)} placeholder="Describe lo que paso o lo que necesitas..." rows={5} />
          </label>
          <button type="submit" disabled={busyAction === 'report'}>
            {busyAction === 'report' ? <Loader2 className="spin" size={17} /> : <MessageSquareText size={17} />}
            Enviar reporte
          </button>
        </form>
      </div>
    </section>
  )
}

interface AdminPageProps {
  session: Session | null
  sessionLoading: boolean
  profileLoading: boolean
  canAccessAdmin: boolean
}

function AdminPage({ session, sessionLoading, profileLoading, canAccessAdmin }: AdminPageProps) {
  const [profiles, setProfiles] = useState<AppProfile[]>([])
  const [despachos, setDespachos] = useState<DespachoSummary[]>([])
  const [memberCounts, setMemberCounts] = useState<Record<string, number>>({})
  const [supportReports, setSupportReports] = useState<SupportReport[]>([])
  const [selectedReport, setSelectedReport] = useState<SupportReport | null>(null)
  const [reportStatus, setReportStatus] = useState<SupportReportStatus>('new')
  const [reportPriority, setReportPriority] = useState<SupportReportPriority>('normal')
  const [reportReply, setReportReply] = useState('')
  const [reportNotes, setReportNotes] = useState('')
  const [flags, setFlags] = useState<ModerationFlag[]>([])
  const [selectedFlag, setSelectedFlag] = useState<ModerationFlag | null>(null)
  const [flagChatMessages, setFlagChatMessages] = useState<ChatMessagePreview[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [busyAction, setBusyAction] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  const openSupportReport = useCallback((report: SupportReport) => {
    setSelectedReport(report)
    setReportStatus(report.status)
    setReportPriority(report.priority)
    setReportReply(report.admin_reply ?? '')
    setReportNotes(report.admin_notes ?? '')
    setError('')
    setSuccess('')
  }, [])

  const saveSupportReport = async () => {
    if (!selectedReport) return

    setBusyAction(`${selectedReport.id}-report`)
    setError('')
    setSuccess('')

    const { error: rpcError } = await supabase.rpc('admin_update_support_report', {
      report_id: selectedReport.id,
      new_status: reportStatus,
      new_priority: reportPriority,
      reply: reportReply.trim() || null,
      notes: reportNotes.trim() || null,
    })

    if (rpcError) {
      setError(rpcError.message)
    } else {
      setSelectedReport((current) => current
        ? {
            ...current,
            status: reportStatus,
            priority: reportPriority,
            admin_reply: reportReply.trim() || null,
            admin_notes: reportNotes.trim() || null,
          }
        : current)
      setSuccess('Reporte actualizado. La respuesta ya esta disponible para el usuario.')
      setRefreshKey((current) => current + 1)
    }

    setBusyAction('')
  }

  const loadFlagChat = useCallback(async (flag: ModerationFlag) => {
    setSelectedFlag(flag)
    setFlagChatMessages([])
    setError('')

    const { data, error: chatError } = await supabase
      .from('despacho_chat_mensajes')
      .select('id,despacho_id,sender_user_id,body,created_at')
      .eq('despacho_id', flag.despacho_id)
      .order('created_at', { ascending: false })
      .limit(30)

    if (chatError) {
      setError(`No se pudo abrir el chat del despacho: ${chatError.message}`)
      return
    }

    setFlagChatMessages(((data as ChatMessagePreview[] | null) ?? []).reverse())
  }, [])

  const updateAccountStatus = async (
    targetProfile: AppProfile,
    status: AccountStatus,
    reason: string,
    banDays?: number,
  ) => {
    setBusyAction(`${targetProfile.id}-${status}`)
    setError('')
    setSuccess('')

    const { error: rpcError } = await supabase.rpc('admin_update_account_status', {
      target_user_id: targetProfile.id,
      new_status: status,
      reason,
      ban_days: banDays ?? null,
    })

    if (rpcError) {
      setError(rpcError.message)
    } else {
      setSuccess(status === 'active' ? 'Cuenta reactivada.' : 'Cuenta actualizada.')
      setRefreshKey((current) => current + 1)
    }

    setBusyAction('')
  }

  const updateSubscriptionStatus = async (targetProfile: AppProfile, status: SubscriptionStatus) => {
    setBusyAction(`${targetProfile.id}-subscription`)
    setError('')
    setSuccess('')

    const { error: rpcError } = await supabase.rpc('admin_update_subscription_status', {
      target_user_id: targetProfile.id,
      new_status: status,
      provider: 'mercado_pago',
      reference: status === 'active' ? 'validacion_manual_beta' : null,
    })

    if (rpcError) {
      setError(rpcError.message)
    } else {
      setSuccess('Suscripcion actualizada.')
      setRefreshKey((current) => current + 1)
    }

    setBusyAction('')
  }

  const resolveFlag = async (flag: ModerationFlag, resolution: 'dismissed' | 'reviewed' | 'banned') => {
    setBusyAction(`${flag.id}-${resolution}`)
    setError('')
    setSuccess('')

    const { error: rpcError } = await supabase.rpc('admin_resolve_moderation_flag', {
      flag_id: flag.id,
      resolution,
      ban_days: resolution === 'banned' ? 1 : null,
      admin_notes: resolution === 'dismissed' ? 'Alerta descartada desde el panel.' : 'Revision desde panel admin.',
    })

    if (rpcError) {
      setError(rpcError.message)
    } else {
      setSuccess(resolution === 'banned' ? 'Usuario baneado por 1 dia.' : 'Alerta actualizada.')
      setRefreshKey((current) => current + 1)
      if (selectedFlag?.id === flag.id) {
        setSelectedFlag(null)
        setFlagChatMessages([])
      }
    }

    setBusyAction('')
  }

  useEffect(() => {
    if (!canAccessAdmin) return

    let mounted = true
    const loadAdminData = async () => {
      setLoading(true)
      setError('')

      let profilesData: AppProfile[]
      const profilesResult = await supabase
        .from('app_profiles')
        .select('id,email,role,account_status,subscription_status,trial_started_at,trial_ends_at,ban_until,ban_reason,disabled_reason,last_seen_at,usage_seconds,created_at,updated_at')
        .order('created_at', { ascending: false })
        .limit(80)

      if (profilesResult.error) {
        const fallbackProfilesResult = await supabase
          .from('app_profiles')
          .select('id,email,role,created_at,updated_at')
          .order('created_at', { ascending: false })
          .limit(80)

        if (fallbackProfilesResult.error) throw fallbackProfilesResult.error
        profilesData = ((fallbackProfilesResult.data as AppProfile[] | null) ?? []).map((profile) => ({
          ...profile,
          account_status: 'active',
          subscription_status: 'trial',
          usage_seconds: 0,
        }))
      } else {
        profilesData = (profilesResult.data as AppProfile[] | null) ?? []
      }

      const despachosResult = await supabase
        .from('despachos')
        .select('id,nombre,owner_user_id,deleted_at,created_at')
        .order('created_at', { ascending: false })
        .limit(80)

      if (despachosResult.error) throw despachosResult.error

      const reportsResult = await supabase.rpc('admin_list_support_reports', {
        report_limit: 100,
      })

      if (reportsResult.error) throw reportsResult.error

      const membersResult = await supabase
        .from('despacho_miembros')
        .select('id,despacho_id,user_id,role')
        .limit(1500)

      const flagsResult = await supabase
        .from('moderation_flags')
        .select('id,despacho_id,message_id,user_id,matched_category,matched_terms,excerpt,status,reviewed_by,reviewed_at,admin_notes,created_at')
        .order('created_at', { ascending: false })
        .limit(40)

      if (mounted) {
        const members = (membersResult.data as DespachoMemberSummary[] | null) ?? []
        const nextMemberCounts = members.reduce<Record<string, number>>((accumulator, member) => {
          accumulator[member.despacho_id] = (accumulator[member.despacho_id] ?? 0) + 1
          return accumulator
        }, {})

        setProfiles(profilesData)
        setDespachos((despachosResult.data as DespachoSummary[] | null) ?? [])
        setMemberCounts(nextMemberCounts)
        const nextReports = (reportsResult.data as SupportReport[] | null) ?? []
        setSupportReports(nextReports)
        setFlags((flagsResult.data as ModerationFlag[] | null) ?? [])
        if (membersResult.error || flagsResult.error) {
          setError('Panel parcial: ejecuta APLICAR_EN_SUPABASE_ADMIN_CONTROL_MODERACION.sql si faltan colaboradores o alertas.')
        }
        setLoading(false)
      }
    }

    loadAdminData().catch((adminError: unknown) => {
      if (mounted) {
        setError(adminError instanceof Error ? adminError.message : 'No se pudo cargar el panel admin.')
        setLoading(false)
      }
    })

    return () => {
      mounted = false
    }
  }, [canAccessAdmin, refreshKey])

  if (sessionLoading || profileLoading) {
    return (
      <section className="portal-page">
        <div className="portal-card centered">
          <Loader2 className="spin" size={34} />
          <h1>Validando administrador</h1>
          <p>Estamos comprobando tu rol antes de abrir el panel.</p>
        </div>
      </section>
    )
  }

  if (!session?.user) return <AuthRequiredPanel />

  if (!canAccessAdmin) {
    return (
      <section className="portal-page">
        <div className="portal-card centered">
          <ShieldCheck size={34} />
          <h1>Acceso reservado</h1>
          <p>Esta pagina solo esta habilitada para la cuenta administradora principal.</p>
          <a className="portal-primary-link" href={pagePath('/configuracion')}>
            Ir a configuracion
          </a>
        </div>
      </section>
    )
  }

  const ownerCount = profiles.filter((item) => item.role === 'owner').length
  const activeDespachos = despachos.filter((item) => !item.deleted_at).length
  const reportCount = supportReports.length
  const pendingFlagCount = flags.filter((item) => item.status === 'pending').length
  const totalUsageSeconds = profiles.reduce((total, item) => total + Number(item.usage_seconds ?? 0), 0)
  const profileById = new Map(profiles.map((item) => [item.id, item]))
  const collaboratorsByOwnerId = despachos.reduce<Record<string, number>>((accumulator, despacho) => {
    if (!despacho.owner_user_id) return accumulator
    accumulator[despacho.owner_user_id] =
      (accumulator[despacho.owner_user_id] ?? 0) + Math.max((memberCounts[despacho.id] ?? 1) - 1, 0)
    return accumulator
  }, {})

  return (
    <section className="portal-page">
      <div className="portal-heading">
        <p className="eyebrow">
          <ShieldCheck size={18} />
          Administrador
        </p>
        <h1>Admin</h1>
        <p>Panel privado para revisar usuarios, despachos, reportes y actividad de cuentas.</p>
      </div>

      {error && (
        <div className="portal-alert error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="portal-alert success">
          <CheckCircle2 size={18} />
          <span>{success}</span>
        </div>
      )}

      <div className="admin-stats">
        <article>
          <Users size={24} />
          <span>Usuarios registrados</span>
          <strong>{profiles.length}</strong>
        </article>
        <article>
          <ShieldCheck size={24} />
          <span>Owners</span>
          <strong>{ownerCount}</strong>
        </article>
        <article>
          <BriefcaseBusiness size={24} />
          <span>Despachos activos</span>
          <strong>{activeDespachos}</strong>
        </article>
        <article>
          <MessageSquareText size={24} />
          <span>Reportes</span>
          <strong>{reportCount}</strong>
        </article>
        <article>
          <ShieldAlert size={24} />
          <span>Alertas chat</span>
          <strong>{pendingFlagCount}</strong>
        </article>
        <article>
          <Clock3 size={24} />
          <span>Uso registrado</span>
          <strong>{formatUsageSeconds(totalUsageSeconds)}</strong>
        </article>
      </div>

      <div className="admin-grid">
        <section className="portal-card wide">
          <div className="card-title-row">
            <Users size={22} />
            <span>
              <strong>Usuarios</strong>
              <small>{loading ? 'Cargando...' : 'Cuentas registradas en app_profiles.'}</small>
            </span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Suscripcion</th>
                  <th>Uso</th>
                  <th>Colaboradores</th>
                  <th>Alta</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((item) => {
                  const accountStatus = item.account_status ?? 'active'
                  const subscriptionStatus = item.subscription_status ?? 'trial'
                  const isBusy = busyAction.startsWith(item.id)
                  const isSelf = item.id === session.user.id

                  return (
                    <tr key={item.id}>
                      <td>{item.email ?? item.id}</td>
                      <td><span className={`role-chip ${item.role}`}>{item.role}</span></td>
                      <td>
                        <span className={`status-chip ${accountStatus}`}>{statusLabel(accountStatus)}</span>
                        {item.ban_until && accountStatus === 'banned' && <small>Hasta {formatDate(item.ban_until)}</small>}
                      </td>
                      <td>
                        <select
                          className="admin-select"
                          value={subscriptionStatus}
                          disabled={isBusy}
                          onChange={(event) => updateSubscriptionStatus(item, event.target.value as SubscriptionStatus)}
                        >
                          <option value="trial">Prueba</option>
                          <option value="active">Activa</option>
                          <option value="manual">Manual</option>
                          <option value="past_due">Pendiente</option>
                          <option value="canceled">Cancelada</option>
                        </select>
                      </td>
                      <td>
                        <span>{formatUsageSeconds(item.usage_seconds)}</span>
                        <small>{item.last_seen_at ? `Ultima vez ${formatDate(item.last_seen_at)}` : 'Sin actividad'}</small>
                      </td>
                      <td>{collaboratorsByOwnerId[item.id] ?? 0}</td>
                      <td>{formatDate(item.created_at)}</td>
                      <td>
                        <div className="mini-actions">
                          {accountStatus === 'active' ? (
                            <button
                              type="button"
                              disabled={isBusy || isSelf}
                              onClick={() => updateAccountStatus(item, 'disabled', 'Validacion manual pendiente desde el panel admin.')}
                            >
                              {isSelf ? 'Cuenta admin' : 'Desactivar'}
                            </button>
                          ) : (
                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() => updateAccountStatus(item, 'active', 'Cuenta reactivada desde panel admin.')}
                            >
                              Activar
                            </button>
                          )}
                          <button
                            type="button"
                            disabled={isBusy || isSelf}
                            onClick={() => updateAccountStatus(item, 'banned', 'Revision preventiva por posible incumplimiento de normas de uso.', 1)}
                          >
                            <Ban size={14} />
                            1 dia
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {!profiles.length && !loading && (
                  <tr>
                    <td colSpan={8}>Sin usuarios para mostrar.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="portal-card">
          <div className="card-title-row">
            <BriefcaseBusiness size={22} />
            <span>
              <strong>Despachos recientes</strong>
              <small>Vista rapida de espacios creados.</small>
            </span>
          </div>
          <div className="stack-list">
            {despachos.slice(0, 8).map((item) => (
              <div key={item.id}>
                <strong>{item.nombre}</strong>
                <small>
                  {item.deleted_at ? 'En papelera' : 'Activo'} - {Math.max((memberCounts[item.id] ?? 1) - 1, 0)} colaborador(es)
                </small>
                <small>Creado {formatDate(item.created_at)}</small>
              </div>
            ))}
            {!despachos.length && !loading && <p>Sin despachos registrados.</p>}
          </div>
        </section>

        <section className="portal-card wide">
          <div className="card-title-row">
            <MessageSquareText size={22} />
            <span>
              <strong>Bandeja de reportes</strong>
              <small>Revisa cada solicitud, responde al usuario y conserva notas internas separadas.</small>
            </span>
          </div>
          <div className="support-review-layout">
            <div className="support-report-list">
              {supportReports.map((report) => {
                const reporter = profileById.get(report.user_id)
                const isSelected = selectedReport?.id === report.id

                return (
                  <button
                    type="button"
                    key={report.id}
                    className={`support-report-item ${isSelected ? 'selected' : ''} priority-${report.priority}`}
                    onClick={() => openSupportReport(report)}
                  >
                    <span className="support-report-item-header">
                      <strong>{report.title}</strong>
                      <span className={`report-status ${report.status}`}>
                        {supportReportStatusLabels[report.status]}
                      </span>
                    </span>
                    <small>{reporter?.email ?? report.user_id}</small>
                    <small>
                      {supportReportCategoryLabels[report.category] ?? report.category}
                      {' - '}
                      {supportReportPriorityLabels[report.priority]}
                      {' - '}
                      {formatDate(report.created_at)}
                    </small>
                  </button>
                )
              })}
              {!supportReports.length && !loading && <p>Sin reportes todavia.</p>}
            </div>

            <div className="support-report-detail">
              {selectedReport ? (
                <>
                  <div className="support-report-detail-heading">
                    <div>
                      <span>{supportReportCategoryLabels[selectedReport.category] ?? selectedReport.category}</span>
                      <h2>{selectedReport.title}</h2>
                      <small>
                        {profileById.get(selectedReport.user_id)?.email ?? selectedReport.user_id}
                        {' - '}
                        {formatDate(selectedReport.created_at)}
                      </small>
                    </div>
                    <span className={`report-priority ${selectedReport.priority}`}>
                      Prioridad {supportReportPriorityLabels[selectedReport.priority]}
                    </span>
                  </div>

                  {selectedReport.contains_sensitive_data && (
                    <div className="support-sensitive-warning">
                      <ShieldAlert size={18} />
                      El usuario indico que este reporte puede contener datos sensibles. Revisalo con acceso restringido.
                    </div>
                  )}

                  <div className="support-report-copy">
                    <h3>Descripcion</h3>
                    <p>{selectedReport.description}</p>
                    {selectedReport.steps_to_reproduce && (
                      <>
                        <h3>Pasos para reproducir</h3>
                        <p>{selectedReport.steps_to_reproduce}</p>
                      </>
                    )}
                    {selectedReport.expected_behavior && (
                      <>
                        <h3>Resultado esperado</h3>
                        <p>{selectedReport.expected_behavior}</p>
                      </>
                    )}
                    <small>
                      Version: {selectedReport.app_version || 'No informada'}
                      {' - '}
                      Plataforma: {selectedReport.platform || 'No informada'}
                    </small>
                  </div>

                  <div className="support-report-fields">
                    <label>
                      Estado
                      <select
                        value={reportStatus}
                        onChange={(event) => setReportStatus(event.target.value as SupportReportStatus)}
                      >
                        {Object.entries(supportReportStatusLabels).map(([value, label]) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Prioridad
                      <select
                        value={reportPriority}
                        onChange={(event) => setReportPriority(event.target.value as SupportReportPriority)}
                      >
                        {Object.entries(supportReportPriorityLabels).map(([value, label]) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </label>
                    <label className="wide">
                      Respuesta visible para el usuario
                      <textarea
                        rows={4}
                        value={reportReply}
                        onChange={(event) => setReportReply(event.target.value)}
                        placeholder="Explica el seguimiento, la solucion o la informacion que necesitas."
                        maxLength={8000}
                      />
                    </label>
                    <label className="wide">
                      Notas internas
                      <textarea
                        rows={3}
                        value={reportNotes}
                        onChange={(event) => setReportNotes(event.target.value)}
                        placeholder="Solo visibles para administracion."
                        maxLength={8000}
                      />
                    </label>
                  </div>

                  <div className="support-report-actions">
                    <button
                      type="button"
                      onClick={saveSupportReport}
                      disabled={busyAction === `${selectedReport.id}-report`}
                    >
                      <CheckCircle2 size={16} />
                      {busyAction === `${selectedReport.id}-report` ? 'Guardando...' : 'Guardar seguimiento'}
                    </button>
                  </div>
                </>
              ) : (
                <p>Selecciona un reporte para abrir su expediente de seguimiento.</p>
              )}
            </div>
          </div>
        </section>

        <section className="portal-card wide">
          <div className="card-title-row">
            <ShieldAlert size={22} />
            <span>
              <strong>Alertas de moderacion</strong>
              <small>Los mensajes marcados quedan en revision. Solo el administrador principal puede resolverlos.</small>
            </span>
          </div>
          <div className="moderation-layout">
            <div className="stack-list moderation-list">
              {flags.slice(0, 12).map((flag) => {
                const flaggedProfile = profileById.get(flag.user_id)
                const isBusy = busyAction.startsWith(flag.id)

                return (
                  <div key={flag.id} className={flag.status === 'pending' ? 'flag-card pending' : 'flag-card'}>
                    <strong>{flaggedProfile?.email ?? flag.user_id}</strong>
                    <small>
                      {flag.matched_category} - {formatDate(flag.created_at)} - {flag.status}
                    </small>
                    <p>{flag.excerpt}</p>
                    <div className="mini-actions">
                      <button type="button" onClick={() => loadFlagChat(flag)} disabled={isBusy}>
                        Ver chat
                      </button>
                      <button type="button" onClick={() => resolveFlag(flag, 'dismissed')} disabled={isBusy}>
                        Descartar
                      </button>
                      <button type="button" onClick={() => resolveFlag(flag, 'banned')} disabled={isBusy}>
                        <Ban size={14} />
                        Ban 1 dia
                      </button>
                    </div>
                  </div>
                )
              })}
              {!flags.length && !loading && <p>Sin alertas de chat todavia.</p>}
            </div>

            <div className="chat-review-panel">
              <div className="chat-review-title">
                <MessageSquareText size={18} />
                <span>{selectedFlag ? 'Revision remota del chat' : 'Selecciona una alerta'}</span>
              </div>
              {selectedFlag ? (
                <div className="review-thread">
                  {flagChatMessages.map((message) => {
                    const senderProfile = profileById.get(message.sender_user_id)
                    const isFlagged = message.id === selectedFlag.message_id

                    return (
                      <article key={message.id} className={isFlagged ? 'review-message flagged' : 'review-message'}>
                        <strong>{senderProfile?.email ?? message.sender_user_id}</strong>
                        <small>{formatDate(message.created_at)}</small>
                        <p>{message.body}</p>
                      </article>
                    )
                  })}
                  {!flagChatMessages.length && <p>Sin mensajes disponibles para esta revision.</p>}
                </div>
              ) : (
                <p>Al abrir una alerta podras leer los mensajes recientes del despacho y decidir si se descarta o se aplica baneo temporal.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

function formatDate(value?: string | null) {
  if (!value) return 'Sin dato'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Sin dato'
  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function formatUsageSeconds(value?: number | null) {
  const totalSeconds = Math.max(0, Number(value ?? 0))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)

  if (hours > 0) return `${hours} h ${minutes} min`
  if (minutes > 0) return `${minutes} min`
  return `${totalSeconds} s`
}

function statusLabel(value: AccountStatus) {
  if (value === 'disabled') return 'Desactivada'
  if (value === 'banned') return 'Baneada'
  return 'Activa'
}

function EnterpriseFooter() {
  const footerColumns = [
    {
      title: 'Producto',
      links: [
        { label: 'Descargar Windows', href: WINDOWS_DOWNLOAD_URL, download: WINDOWS_FILE_NAME },
        { label: 'Suscripcion Mercado Pago', href: MERCADO_PAGO_PAYMENT_URL },
        { label: 'Como instalar', href: pagePath('/como-instalar') },
        { label: 'Juris IA local', href: pagePath('/ia-local') },
        { label: 'App movil', href: pagePath('/movil') },
        { label: 'Portal beta', href: pagePath('/acceso') },
        { label: 'Mac pendiente', href: pagePath('/descargas') },
      ],
    },
    {
      title: 'Funciones',
      links: [
        { label: 'Expedientes', href: pagePath('/trabajo/expedientes') },
        { label: 'Despachos', href: pagePath('/trabajo/despachos') },
        { label: 'Calendario juridico', href: pagePath('/trabajo/calendario') },
      ],
    },
    {
      title: 'Seguridad',
      links: [
        { label: 'Correo verificado', href: pagePath('/seguridad') },
        { label: 'Supabase Auth', href: pagePath('/seguridad') },
        { label: '2FA en la app', href: pagePath('/seguridad') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terminos y condiciones', href: TERMS_DOC_URL },
        { label: 'Contrato alpha/beta', href: TERMS_DOC_URL },
        { label: 'Aviso de privacidad', href: TERMS_DOC_URL },
      ],
    },
    {
      title: 'Compania',
      links: [
        { label: 'Judicial Managment', href: pagePath('/') },
        { label: 'MR Legal', href: pagePath('/') },
        { label: 'Beta privada', href: pagePath('/acceso') },
      ],
    },
  ]

  return (
    <footer className="enterprise-footer" aria-label="Enlaces de pie de pagina">
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <section className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => (
              <a
                key={`${column.title}-${link.label}`}
                href={link.href}
                download={link.download}
                target={link.href.startsWith('http') || link.href.endsWith('.docx') ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href.endsWith('.docx') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </section>
        ))}
      </div>
      <div className="footer-bottom">
        <span>Judicial Managment - MR Legal</span>
        <span>Alpha/Beta privada</span>
      </div>
    </footer>
  )
}

function IonAndroidIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path d="M7 9h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 7.5 7 5M15.5 7.5 17 5M9 12h.01M15 12h.01M5 10v5M19 10v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

interface AuthPanelProps {
  session: Session | null
  sessionLoading: boolean
}

function AuthPanel({ session, sessionLoading }: AuthPanelProps) {
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      if (mode === 'signup') {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: getConfirmRedirectUrl(),
            data: {
              signup_source: 'judicial_beta_web',
            },
          },
        })

        if (signUpError) throw signUpError

        setMessage('Te enviamos un correo de verificacion. Abre el enlace para activar la cuenta beta.')
        setMode('login')
        setPassword('')
        return
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })
      if (loginError) throw loginError

      setMessage('Sesion web iniciada. Ya puedes descargar la app e iniciar sesion con este correo.')
      setPassword('')
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'No se pudo completar el acceso.')
    } finally {
      setLoading(false)
    }
  }

  const handleResendConfirmation = async () => {
    setError('')
    setMessage('')

    const cleanEmail = email.trim()
    if (!cleanEmail) {
      setError('Escribe el correo para reenviar la verificacion.')
      return
    }

    setLoading(true)

    try {
      const { error: resendError } = await supabase.auth.resend({
        type: 'signup',
        email: cleanEmail,
        options: {
          emailRedirectTo: getConfirmRedirectUrl(),
        },
      })

      if (resendError) throw resendError

      setMessage('Listo. Enviamos un nuevo correo de verificacion con el enlace actualizado.')
    } catch (resendError) {
      setError(resendError instanceof Error ? resendError.message : 'No se pudo reenviar el correo de verificacion.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setError('')
    setMessage('')

    if (!GOOGLE_AUTH_ENABLED) {
      setError('Google todavia no esta configurado en Supabase. Por ahora inicia sesion con correo y contrasena.')
      return
    }

    setLoading(true)

    try {
      const { data, error: googleError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: getConfirmRedirectUrl(),
          skipBrowserRedirect: true,
        },
      })

      if (googleError) throw googleError

      if (!data.url) {
        throw new Error('Google no devolvio una URL de acceso.')
      }

      window.location.assign(data.url)
    } catch (googleError) {
      const message = googleError instanceof Error ? googleError.message : ''
      const isProviderError = /provider|unsupported|enabled/i.test(message)
      setError(
        isProviderError
          ? 'Google todavia no esta configurado en Supabase. Por ahora inicia sesion con correo y contrasena.'
          : message || 'No se pudo iniciar sesion con Google.',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setMessage('Sesion web cerrada.')
  }

  if (sessionLoading) {
    return (
      <div className="access-status">
        <Loader2 className="spin" size={20} />
        <span>Revisando sesion segura...</span>
      </div>
    )
  }

  if (session?.user?.email) {
    return (
      <div className="access-session">
        <div className="session-badge">
          <UserCheck size={18} />
          <span>Cuenta verificada</span>
        </div>
        <strong>{session.user.email}</strong>
        <small>Usa este mismo correo dentro de la app de escritorio.</small>
        <div className="access-buttons">
          <a href={WINDOWS_DOWNLOAD_URL} download={WINDOWS_FILE_NAME}>
            <Download size={17} />
            Descargar
          </a>
          <a href={DESKTOP_APP_URL}>
            <ExternalLink size={17} />
            Abrir app
          </a>
          <a href={MERCADO_PAGO_PAYMENT_URL} target="_blank" rel="noreferrer">
            <CreditCard size={17} />
            Suscripcion
          </a>
        </div>
        <button className="text-action" type="button" onClick={handleSignOut}>
          Cerrar sesion web
        </button>
      </div>
    )
  }

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      {error && (
        <div className="form-alert error">
          <AlertCircle size={17} />
          <span>{error}</span>
        </div>
      )}
      {message && (
        <div className="form-alert success">
          <MailCheck size={17} />
          <span>{message}</span>
        </div>
      )}

      <input
        type="email"
        placeholder="correo@empresa.com"
        aria-label="Correo de empresa"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contrasena"
        aria-label="Contrasena"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength={6}
        required
      />
      <div className="access-buttons">
        <button type="submit" disabled={loading}>
          {loading ? <Loader2 className="spin" size={17} /> : mode === 'login' ? <LogIn size={17} /> : <UserPlus size={17} />}
          {mode === 'login' ? 'Iniciar sesion' : 'Crear cuenta'}
        </button>
        <button
          type="button"
          onClick={() => {
            setMode((current) => (current === 'login' ? 'signup' : 'login'))
            setError('')
            setMessage('')
          }}
        >
          <UserPlus size={17} />
          {mode === 'login' ? 'Crear cuenta' : 'Ya tengo cuenta'}
        </button>
      </div>
      <button className="google-button" type="button" onClick={handleGoogleLogin} disabled={loading}>
        <span>G</span>
        Continuar con Google
      </button>
      <button className="text-action" type="button" onClick={handleResendConfirmation} disabled={loading}>
        Reenviar correo de verificacion
      </button>
    </form>
  )
}

interface AuthConfirmPageProps {
  session: Session | null
  sessionLoading: boolean
}

function AuthConfirmPage({ session, sessionLoading }: AuthConfirmPageProps) {
  const [status, setStatus] = useState<ConfirmStatus>('verifying')
  const [detail, setDetail] = useState('Estamos validando tu enlace seguro con Supabase.')
  const [resendEmail, setResendEmail] = useState('')
  const [resending, setResending] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [resendError, setResendError] = useState('')

  useEffect(() => {
    let mounted = true

    const verifyLink = async () => {
      const authParams = getAuthCallbackParams()
      const authError = authParams.get('error_description') ?? authParams.get('error')
      const tokenHash = authParams.get('token_hash')
      const type = authParams.get('type')
      const code = authParams.get('code')
      const accessToken = authParams.get('access_token')
      const refreshToken = authParams.get('refresh_token')

      if (authError) {
        if (!mounted) return
        setStatus('error')
        setDetail(authError)
        return
      }

      try {
        if (tokenHash && type) {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: type as EmailOtpType,
          })

          if (error) throw error
        } else if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code)
          if (error) throw error
        } else if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })

          if (error) throw error
        } else {
          const { data, error } = await supabase.auth.getSession()

          if (error) throw error
          if (!data.session && authParams.get(AUTH_CONFIRM_QUERY_KEY) !== AUTH_CONFIRM_QUERY_VALUE) {
            throw new Error('El enlace no contiene datos de confirmacion. Solicita un correo nuevo e intenta de nuevo.')
          }
        }

        try {
          await supabase.rpc('ensure_own_app_profile')
        } catch {
          // La sincronizacion del perfil no debe bloquear la confirmacion del correo.
        }

        window.history.replaceState({}, document.title, pagePath('/'))

        if (!mounted) return
        setStatus('success')
        setDetail('Tu correo quedo confirmado. Ya puedes entrar desde la app de escritorio.')
      } catch (confirmError) {
        if (!mounted) return
        setStatus('error')
        setDetail(confirmError instanceof Error ? confirmError.message : 'No se pudo confirmar el correo.')
      }
    }

    verifyLink()

    return () => {
      mounted = false
    }
  }, [])

  const confirmedEmail = session?.user?.email
  const handleConfirmPageResend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResendMessage('')
    setResendError('')

    const cleanEmail = resendEmail.trim()
    if (!cleanEmail) {
      setResendError('Escribe el correo que usaste para crear la cuenta.')
      return
    }

    setResending(true)

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: cleanEmail,
        options: {
          emailRedirectTo: getConfirmRedirectUrl(),
        },
      })

      if (error) throw error

      setResendMessage('Te enviamos un nuevo correo de verificacion. Usa el enlace mas reciente.')
    } catch (error) {
      setResendError(error instanceof Error ? error.message : 'No se pudo reenviar el correo.')
    } finally {
      setResending(false)
    }
  }

  return (
    <main className="site-shell confirm-shell">
      <section className="confirm-card" aria-live="polite">
        <img src={companyLogo} alt="" className="confirm-logo" />

        {status === 'verifying' && (
          <>
            <Loader2 className="confirm-icon spin" size={42} />
            <h1>Confirmando correo</h1>
            <p>{detail}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle2 className="confirm-icon success" size={46} />
            <h1>Correo confirmado</h1>
            <p>{sessionLoading ? detail : confirmedEmail ? `${confirmedEmail} ya esta listo para la beta.` : detail}</p>
            <div className="confirm-actions">
              <a className="download-button primary" href={WINDOWS_DOWNLOAD_URL} download={WINDOWS_FILE_NAME}>
                <Download size={20} />
                <span>
                  Descargar Windows
                  <small>Instalador beta</small>
                </span>
              </a>
              <a className="download-button secondary" href={DESKTOP_APP_URL}>
                <ExternalLink size={20} />
                <span>
                  Abrir app
                  <small>Judicial Managment</small>
                </span>
              </a>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <AlertCircle className="confirm-icon error" size={46} />
            <h1>No se pudo confirmar</h1>
            <p>{detail}</p>
            <form className="confirm-resend-form" onSubmit={handleConfirmPageResend}>
              {resendError && (
                <div className="form-alert error">
                  <AlertCircle size={17} />
                  <span>{resendError}</span>
                </div>
              )}
              {resendMessage && (
                <div className="form-alert success">
                  <MailCheck size={17} />
                  <span>{resendMessage}</span>
                </div>
              )}
              <input
                type="email"
                value={resendEmail}
                onChange={(event) => setResendEmail(event.target.value)}
                placeholder="correo@empresa.com"
                aria-label="Correo para reenviar verificacion"
                required
              />
              <button className="download-button secondary" type="submit" disabled={resending}>
                {resending ? <Loader2 className="spin" size={20} /> : <MailCheck size={20} />}
                <span>
                  Reenviar verificacion
                  <small>Genera un enlace nuevo</small>
                </span>
              </button>
            </form>
            <a className="portal-primary-link" href={pagePath('/acceso')}>
              Volver al portal
            </a>
          </>
        )}
      </section>
    </main>
  )
}

export default App
