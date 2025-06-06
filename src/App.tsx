import { TypeAnimation } from 'react-type-animation';
import react, { useState } from 'react';
import './App.css'; 
import Navbar from './components/Navbar'; // 
import AllocationChart from './components/AllocationChart'; 

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <div className="App">
      <Navbar /> 

      <main className="App-main">

        <section id="home" className="section hero-section">

          <h2>Deepstate</h2>
          
          <TypeAnimation
            sequence={[
              'Do they really exist?', 
              1500, 
              '',   
              1000, 
              'Deeps', 
              1500, 
              () => {
                
              },
            ]}
            wrapper="p" 
            cursor={true} 
            repeat={Infinity} 
            speed={50} 
            style={{
              fontSize: '3.5em', 
              color: 'white',    
              margin: '0 auto 20px', 
              maxWidth: '90%', 
              textAlign: 'center', 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
            }}
          />

          <img src="/deepstate-logo.png" alt="Deepstate Coin Logo" style={{ width: '500px', height: '260px', margin: '8px' }}/>
          
          <a href="https://chrishuke.gitbook.io/www.eduuser.com/whitepaper"
          target="_blank" 
          rel="noopener noreferrer" 
           className="cta-button" 
          >
            Whitepaper
           </a>
          </section>
        

        <section id="about" className="section about-section">
          <h2>What about Deepstate?</h2>
          <p>
          DeepState is a cryptocurrency inspired by the concept of the "deep state" — often associated with hidden power structures. It operates on blockchain technology, emphasizing transparency and decentralization (
          Is this real? contrasting with the secretive nature of the "deep state" idea?).
          </p>
        </section>

        <section id="tokenomics" className="section tokenomics-section">
          <h2>Deepstate Allocation</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '40px' }}>
            <AllocationChart />
          </div>
        </section>

  <section id="roadmap" className="section roadmap-section">
   <h2>Roadmap</h2>
   <div className="roadmap-items">
     <div className="roadmap-item">
       <span>2024</span> 
       <span>First Quarter</span> 
       <h3>Deepstate team making</h3>
       <p>Company incorporation and team setup are complete</p>
     </div>
     <div className="roadmap-item">
       <span>2024년</span> 
       <span>Second Quarter</span> 
       <h3>Deepstate Whitepaper</h3>
       <p>Deepstate make Whitepaper complete</p>
     </div>
     <div className="roadmap-item">
       <span>2024년</span> 
       <span>Third Quarter</span> 
       <h3>Deepstate Testnet launched</h3>
       <p>Release of the Test Network for DeepState’s Feature Verification</p>
       </div>
   </div>
  </section>
        <section id="team" className="section team-section">
          <h2>Team member</h2>

          <div className="team-members">
            <div className="team-member">
              <img src="/ceo.jpg" alt="ceo" />
              <h3>Savage wolf</h3>
              <p>CEO & Founder</p>
            </div>

            <div className="team-member">
              <img src="/team.jpg" alt="team" />
              <h3>Savage teams</h3>
              <p>Not specified</p>
            </div>
            
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <p> Inquire Partnership,Collaborations..We're looking forward to your     participation.  </p>
          <div className="Community">
            <p>Email : <a href="#" target="_blank">contact@deepstate.io</a></p>
            <p>Facebook : <a href="#" target="_blank">Deepstate_Official</a></p>
            <p>Instagram : <a href="#" target="_blank">@Deepstate</a></p>
            <p>Telegram : <a href="#" target="_blank">@Deepspower</a></p>
            <p>Wechat : <a href="#" target="_blank">@Deepsinchina</a></p>
          </div>
        </section>

      </main>
      <footer className="App-footer">
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}> {/* 이 부분 수정 */}
            &copy; {new Date().getFullYear()} Deeps Corps. All rights reserved.
            Deeps LLB Founder: Chrishuke Limited Liability Company Number: 3276 LLC 2021 Suite 111, Griffin Corporate Centre, NewYork, Kingstown St. Vincent and the Grenadines
        </p>
      </footer>

    </div>
  );
}

export default App;