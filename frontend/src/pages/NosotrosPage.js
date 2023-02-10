import react from 'react';
import '../styles/components/pages/NosotrosPage.css';
import logo from '../img/foto1.jpg';

const NosotrosPage = (props) => {
    return (
    <main className="holder">
        <div className="historia">
            <h2>Nosotros</h2>
            <p>
                La historia es...  La historia es...  La historia es...  La historia es...  La historia es...  La historia es...  La historia es...  
                La historia es...  La historia es...  La historia es...  La historia es...  La historia es...  La historia es...  La historia es...  
            </p>
        </div>
        <div className="staff">
          <div className="personas">
              <div className="persona">
                <img src={logo} alt="Juan Perez"></img>
                    <h5> Juan Perez</h5>
                    <h6>Gerente</h6>
                    <p>
                        Juan Perez es... Gerente... desde...Juan Perez es... Gerente... desde...
                        Juan Perez es... Gerente... desde...Juan Perez es... Gerente... desde...</p>    
                  </div>
                  <div className="persona">
                <img src={logo} alt="Juan Perez3"></img>
                    <h5> Juan Perez</h5>
                    <h6>Gerente</h6>
                    <p>
                        Juan Perez es... Gerente... desde...Juan Perez es... Gerente... desde...
                        Juan Perez es... Gerente... desde...Juan Perez es... Gerente... desde...</p>    
                  </div>
                  <div className="persona">
                <img src={logo} alt="Juan Perez2"></img>
                    <h5> Juan Perez</h5>
                    <h6>Gerente</h6>
                    <p>
                        Juan Perez es... Gerente... desde...Juan Perez es... Gerente... desde...
                        Juan Perez es... Gerente... desde...Juan Perez es... Gerente... desde...</p>    
                  </div>
             </div>
        </div>

    </main>
)}

export default NosotrosPage;