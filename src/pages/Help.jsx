import HelpAccordion from "@/components/HelpAccordion"
import {
    Accordion,

} from "@/components/ui/accordion"
import { faqs } from "@/utils/config"

const Help = () => {
    return (
        <div className="max-w-7xl w-full px-3 mx-auto md:mt-8 pb-5">
            <Accordion type="single" collapsible defaultValue="faq-0" className="flex flex-col gap-4">
                {
                    faqs.map((faq, idx) => {
                        return <HelpAccordion faq={faq} key={idx} idx={idx} />
                    })
                }
            </Accordion>
        </div>
    )
}

export default Help