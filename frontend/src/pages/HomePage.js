import '../styles/components/pages/HomePage.css';
import avion from '../img/avion.jpg';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img className="homeimg" src={avion} alt="avion" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Transportes.Transportes.....</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </section>
            </div>
        </main >
    )
}

export default HomePage;