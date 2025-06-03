import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const HelpAccordion = ({ faq, idx }) => {
    const { question, answer } = faq || {}
    return (
        <>
            <AccordionItem value={`faq-${idx}`} className="bg-white-300/20 border border-white-100 rounded-[35px] px-6 md:py-1 backdrop-blur-lg text-white" >
                <AccordionTrigger className="text-[17px]">{question}</AccordionTrigger>
                <AccordionContent>
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </>
    )
}

export default HelpAccordion