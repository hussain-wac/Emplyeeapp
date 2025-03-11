import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage('darkMode', false)

const DarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  console.log(darkMode)

  return (
    <>
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
    </>
  )
}

export default DarkMode;