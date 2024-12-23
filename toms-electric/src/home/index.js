import Slides from './Slides';
import ContactInfo from './ContactInfo';
import HomeAbout from './HomeAbout';

function Home() {
    return(
        <div className="background-color">
            <Slides/>
            <ContactInfo/>
            <HomeAbout/>
        </div>
    ); 
}

export default Home; 