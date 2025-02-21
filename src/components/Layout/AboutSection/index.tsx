import StyledElement from "@/components/StyledElement";
import { CategoryTitle, DescriptiveText } from "@/components/Typography";

export const AboutSection = () => (
    <StyledElement
        $cols={{mobile: "1fr", desktop: "0.2fr 1fr"}}
        id="about"
    >
        <StyledElement
            $border={{mobile:{ bottom: true }, desktop:{ bottom: false }}}
            $areas={{mobile:{ rowStart: 1}}}
            $extrastyle={{
            mobile: "display: flex; justify-content: center; padding: 1.25rem 0.5rem;",
            }}
        >
            <CategoryTitle>
                [ à propos ]
            </CategoryTitle>
        </StyledElement>
        <StyledElement
            $border={{mobile:{ bottom: true }, desktop:{ left: true, bottom: false }}}
            $areas={{mobile:{ rowStart: 2}, desktop:{ rowStart: 1 }}}
            $extrastyle={{
            mobile: "padding: 1.25rem 1.25rem;"
            }}
        >
            <DescriptiveText>
                Développeur <b>polyvalent</b> et <b>passionné</b>, je m&apos;attache
                à créer des solutions sur-mesure qui allient{" "}
                <b>simplicité d&apos;utilisation</b> et <b>performance technique</b>.
                Mon objectif est de répondre précisément aux besoins des
                entreprises en leur offrant des outils numériques <b>fiables</b>
                , <b>adaptés</b> et <b>scalables</b> (capables de grandir avec
                leur activité).
            </DescriptiveText>
            <DescriptiveText>
                Lors de mes expériences passées, j’ai travaillé sur des projets
                variés, comme la <b>réorganisation complète de systèmes</b> pour
                améliorer leur efficacité, la{" "}
                <b>création d’applications mobiles</b> faciles à utiliser ou
                encore la{" "}
                <b>
                    mise en place de solutions permettant de mieux gérer les
                    données
                </b>
                . Grâce à ces initiatives, j’ai pu contribuer à une{" "}
                <b>réduction des erreurs de gestion de 35%</b>, à une{" "}
                <b>amélioration des performances</b> des services web de{" "}
                <b>40%</b>, et à l’<b>automatisation de tâches complexes</b>,
                offrant ainsi un gain de temps significatif.
            </DescriptiveText>
        </StyledElement>
    </StyledElement>
)