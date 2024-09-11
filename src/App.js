import './App.css';
import Greeting from './Greeting.js'
import Footer from './Footer.js'
import UserProfile from './UserProfile.js'
import './CustomStyle.css'

function App() {
  return (
    <div class="grid-container">
      <UserProfile name="Gian Trinidad" age='22' location="Manila"/>
      <UserProfile name="John Doe" age='47' location="Albuquerque"/>
      <UserProfile name="Walter Smith" age='50' location="New Mexico"/>
    </div>
  );
}

export default App;