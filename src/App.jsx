import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CalendlyPage from './pages/CalendlyPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rendez-vous" element={<CalendlyPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </div>
    )
}

export default App