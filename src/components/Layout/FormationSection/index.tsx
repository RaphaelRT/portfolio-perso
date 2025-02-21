import StyledElement from "@/components/StyledElement";
import { CategoryTitle } from "@/components/Typography";
import { formation } from "./formation";
import FormationCard from "@/components/FormationCard";

export const FormationSection = () => (
    <StyledElement
        $cols={{mobile: "1fr", desktop: "0.2fr 1fr"}}
        id="formation"
    >
        <StyledElement
            $border={{mobile:{ bottom: true }, desktop:{ bottom: false }}}
            $areas={{mobile:{ rowStart: 1}}}
            $extrastyle={{
            mobile: "display: flex; justify-content: center; padding: 1.25rem 0.5rem;",
            }}
        >
            <CategoryTitle>
                [ formation ]
            </CategoryTitle>
        </StyledElement>
        <StyledElement
            $border={{mobile:{ bottom: true }, desktop:{ left: true, bottom: false }}}
            $areas={{mobile:{ rowStart: 2}, desktop:{ rowStart: 1 }}}
        >
            {formation.map((edu, id) => (
                <FormationCard id={id} key={id} formation={edu} isLast={id === formation.length-1} />
            ))}
        </StyledElement>
    </StyledElement>
)






