import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import Projects from "./components/projects/projects"
import Experiences from "./components/experiences/experiences"
import About from './components/about/about'
import Chat from './components/chat/chat'
import './App.css'

function App() {
    return (
        <>
            <Navbar/>
            <Profile/>
            <About/>
            <Chat/>
            <div id="projects">
                <h2>Projects</h2>
                <Projects name="Project 1 Name" description="Project description here" github="https://github.com/josh-ilano/OrientationProduct"/>
                <Projects name="Project 2 Name" description="Project description here" github="https://github.com/josh-ilano/OrientationProduct"/>
            </div> 
            <div id="exp">
                <h2>Experiences</h2>
                    <Experiences 
                        title="Job Title" 
                        info="Company Name, Location, States" 
                        dates="Dates - Dates" 
                        bullets={["Point 1", "Point 2", "Point 3"]}>
                    </Experiences>
            </div>
        </>
    )
}

export default App