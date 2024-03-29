import { useDarkStore } from '../../../theme'

export function SearchIcon() {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><g fill="none" stroke="yellow" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0" /></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.5s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="1.2s" values="2;0" /></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g><g fill="currentColor"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" /></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0" /></path></g><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" /><set attributeName="opacity" begin="0.6s" to="0" /></g><mask id="lineMdMoonToSunnyOutlineLoopTransition0"><circle cx="12" cy="12" r="12" fill="#fff" /><circle cx="12" cy="12" r="8"><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="8;4" /></circle><circle cx="18" cy="6" r="12" fill="#fff"><animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" /></circle><circle cx="18" cy="6" r="10"><animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" /><animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" /><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" /></circle></mask><circle cx="12" cy="12" r="10" fill="yellow" mask="url(#lineMdMoonToSunnyOutlineLoopTransition0)" opacity="0"><set attributeName="opacity" begin="0.6s" to="1" /><animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" /></circle></svg>
  )
}

export function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><g fill="none" stroke="#44f" strokeDasharray="4" strokeDashoffset="4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><animate id="lineMdMoonAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonAltLoop0.begin+6s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop0.begin+2s;lineMdMoonAltLoop0.begin+4s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop0.begin+1.2s;lineMdMoonAltLoop0.begin+3.2s;lineMdMoonAltLoop0.begin+5.2s" dur="0.4s" values="0;4" /><set attributeName="d" begin="lineMdMoonAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5" /><set attributeName="d" begin="lineMdMoonAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5" /><set attributeName="d" begin="lineMdMoonAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5" /></path><path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><animate id="lineMdMoonAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonAltLoop1.begin+6s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop1.begin+2s;lineMdMoonAltLoop1.begin+4s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop1.begin+1.2s;lineMdMoonAltLoop1.begin+3.2s;lineMdMoonAltLoop1.begin+5.2s" dur="0.4s" values="0;4" /><set attributeName="d" begin="lineMdMoonAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5" /><set attributeName="d" begin="lineMdMoonAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5" /><set attributeName="d" begin="lineMdMoonAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5" /></path><path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><animate id="lineMdMoonAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2.9s;lineMdMoonAltLoop2.begin+6s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop2.begin+2s" dur="0.4s" values="4;0" /><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop2.begin+1.2s;lineMdMoonAltLoop2.begin+3.2s" dur="0.4s" values="0;4" /><set attributeName="d" begin="lineMdMoonAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5" /><set attributeName="d" begin="lineMdMoonAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5" /></path></g><path fill="none" stroke="#44f" strokeDasharray="56" strokeDashoffset="56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" /></path></svg>
  )
}

export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  )
}

export function CelsiusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature-celsius" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3"></path>
    </svg>
  )
}

export function WindIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"></path>
      <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"></path>
      <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"></path>
    </svg>
  )
}

export function HumidityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M14.5 18q.625 0 1.062-.438Q16 17.125 16 16.5t-.438-1.062Q15.125 15 14.5 15t-1.062.438Q13 15.875 13 16.5t.438 1.062Q13.875 18 14.5 18Zm-5.75-.75q.3.3.7.3q.4 0 .7-.3l5.1-5.1q.3-.3.3-.7q0-.4-.3-.7q-.3-.3-.712-.3q-.413 0-.713.3L8.75 15.825q-.3.3-.3.713q0 .412.3.712ZM9.5 13q.625 0 1.062-.438Q11 12.125 11 11.5t-.438-1.062Q10.125 10 9.5 10t-1.062.438Q8 10.875 8 11.5t.438 1.062Q8.875 13 9.5 13Zm2.5 9q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.375 1.8-5.15q1.8-2.775 5.45-6q.15-.125.35-.2q.2-.075.4-.075t.4.075q.2.075.35.2q3.65 3.225 5.45 6Q20 11.425 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm0-2q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Z" /></svg>
  )
}

export function Umbrella() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-umbrella" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 12a8 8 0 0 1 16 0z"></path>
      <path d="M12 12v6a2 2 0 0 0 4 0"></path>
    </svg>
  )
}

export function SunsetIcon(props) {
  const darkMode = useDarkStore((state) => state.darkMode)
  return (
    <svg
      style={{ fill: darkMode ? '#fff' : '#16161d' }}
      width={34}
      height={34}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 15a5 5 0 0 1 10 0 1 1 0 0 1-2 0 3 3 0 0 0-6 0 1 1 0 0 1-2 0Zm10.293-6.707L16.586 9A1 1 0 1 0 18 10.414l.707-.707a1 1 0 0 0-1.414-1.414ZM22 15a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1ZM4 14H3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm2.707-5.707a1 1 0 0 0-1.414 1.414l.707.707A1 1 0 1 0 7.414 9ZM4 18a1 1 0 0 0 1 1h14a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1Zm13 4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1ZM12 1a1 1 0 0 0-1 1v3.586L9.707 4.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L13 5.586V2a1 1 0 0 0-1-1Z" />
    </svg>
  )
}

export function SunriseIcon(props) {
  const darkMode = useDarkStore((state) => state.darkMode)
  return (
    <svg
      style={{ fill: darkMode ? '#fff' : '#16161d' }}
      width={34}
      height={34}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 15a5 5 0 0 1 10 0 1 1 0 0 1-2 0 3 3 0 0 0-6 0 1 1 0 0 1-2 0Zm11-4.586.707-.707a1 1 0 0 0-1.414-1.414L16.586 9A1 1 0 1 0 18 10.414ZM20 16h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM4 14H3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm1.293-4.293.707.707A1 1 0 1 0 7.414 9l-.707-.707a1 1 0 0 0-1.414 1.414ZM4 18a1 1 0 0 0 1 1h14a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1Zm4 3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm4-12a1 1 0 0 0 1-1V4.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.416 1.414L11 4.414V8a1 1 0 0 0 1 1Z" />
    </svg>
  )
}

export function MoonsetIcon(props) {
  const darkMode = useDarkStore((state) => state.darkMode)
  return (
    <svg
      style={{ fill: darkMode ? '#fff' : '#16161d' }}
      width={34}
      height={34}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 28h28v2H2zM26 26h-2a7.987 7.987 0 0 0-2.037-5.333l1.49-1.335A9.983 9.983 0 0 1 26 26ZM16 26h-2a9.927 9.927 0 0 1 3.754-7.804A7.89 7.89 0 0 0 16 18a8.01 8.01 0 0 0-8 8H6a10.011 10.011 0 0 1 10-10 9.892 9.892 0 0 1 4.446 1.052 1 1 0 0 1 0 1.79A7.957 7.957 0 0 0 16 26ZM16 14l-5-5 1.41-1.41L15 10.17V2h2v8.17l2.59-2.58L21 9l-5 5z" />
      <path
        dataname="&lt;Transparent Rectangle&gt;"
        style={{
          fill: 'none'
        }}
        d="M0 0h32v32H0z"
      />
    </svg>
  )
}

export function MoonriseIcon(props) {
  const darkMode = useDarkStore((state) => state.darkMode)
  return (
    <svg
      style={{ fill: darkMode ? '#fff' : '#16161d' }}
      width={34}
      height={34}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 28h28v2H2zM26 26h-2a7.987 7.987 0 0 0-2.037-5.333l1.49-1.335A9.983 9.983 0 0 1 26 26ZM16 26h-2a9.927 9.927 0 0 1 3.754-7.804A7.89 7.89 0 0 0 16 18a8.01 8.01 0 0 0-8 8H6a10.011 10.011 0 0 1 10-10 9.892 9.892 0 0 1 4.446 1.052 1 1 0 0 1 0 1.79A7.957 7.957 0 0 0 16 26ZM16 2l-5 5 1.41 1.41L15 5.83V14h2V5.83l2.59 2.58L21 7l-5-5z" />
      <path
        dataname="&lt;Transparent Rectangle&gt;"
        style={{
          fill: 'none'
        }}
        d="M0 0h32v32H0z"
      />
    </svg>
  )
}

export function DirectionIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox="-1.5 -1 24 24">
      <path fill="currentColor" d="M18.913 2.9L2.632 9.226l4.829 2.006a5.767 5.767 0 0 1 3.118 3.119l2.006 4.828L18.913 2.9zm1.847.682l-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.923 1.923 0 0 1-1.11-1.067l-2.007-4.83a3.845 3.845 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53z" />
    </svg>
  )
}
