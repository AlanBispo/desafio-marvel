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
                <TextAbout>
                    A Marvel Comics tornou-se diferenciada no mercada de editoras de histórias em quadrinhos por apresentar histórias mais próximas da realidade, seus personagens eram muito originais, diferenciados e bem trabalhados. Stan Lee foi um dos roteiristas que mais se destacou na história da Marvel Comics, o que lhe rendeu o posto de diretor da empresa por longos anos.
                </TextAbout>
            </SectionAbout>
            <Footer />
        </ContainerAbout>
    )
}

export default About;
