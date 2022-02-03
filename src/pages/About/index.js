import Navbar from "../../components/Navbar"
import { ContainerAbout, SectionAbout, TitleAbout, TextAbout } from './styles'
import Footer from "../../components/Footer"

export const About = () => {
    return (
        <ContainerAbout>
            <Navbar />
            <SectionAbout>
                <TitleAbout>Sobre nós</TitleAbout>
                <TextAbout>
                    A Marvel Entertainment, Inc. é uma companhia estadunidense de entretenimento, e subsidiária da The Walt Disney Company. Formada pela fusão entre a Marvel Entertainment Group e a Toy Biz, Inc., é a dona da Marvel Comics, Marvel Studios, Marvel Music e da Marvel Television.
                </TextAbout>
            </SectionAbout>
            <Footer />
        </ContainerAbout>
    )
}

export default About;
