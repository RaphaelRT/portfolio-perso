import ExperienceCard from "@/components/ExperienceCard";
import StyledElement from "@/components/StyledElement";
import { CategoryTitle } from "@/components/Typography";
import { experiences } from "./experiences";

export const ExperienceSection = () => (
    <StyledElement
        $cols={{mobile: "1fr", desktop: "0.2fr 1fr"}}
        id="experiences"
    >
        <StyledElement
            $border={{mobile:{ bottom: true }, desktop:{ bottom: false }}}
            $areas={{mobile:{ rowStart: 1}}}
            $extrastyle={{
            mobile: "display: flex; justify-content: center; padding: 1.25rem 0.5rem;",
            }}
        >
            <CategoryTitle>
                [ expériences ]
            </CategoryTitle>
        </StyledElement>
        <StyledElement
            $border={{mobile:{ bottom: true }, desktop:{ left: true, bottom: false }}}
            $areas={{mobile:{ rowStart: 2}, desktop:{ rowStart: 1 }}}
    
        >
            {experiences.map((experience, id) => (
                <ExperienceCard
                    isLast={id === experiences.length-1}
                    key={id}
                    id={id}
                    experience={experience}
                />
            ))
            }
        </StyledElement>
    </StyledElement>
)