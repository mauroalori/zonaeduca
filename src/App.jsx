import AppRoutes from "./routes/AppRoutes"
import { ColegiosProvider } from "./context/ColegiosProvider"

function App() {

  

  return (
    <>
    <ColegiosProvider>
      <AppRoutes/>
    </ColegiosProvider>
    </>
  )
}

export default App
