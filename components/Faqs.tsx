import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type faqProps = {
  place: string;
  aqi: number;
  status: string;
  exp: string;
};

export default function Faqs({ place, aqi, status, exp }: faqProps) {
  return (
    <div className="pl-4 pr-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>
              <strong>Q.1</strong> What is the air quality level in {place} today?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Ans: </strong>
               The Air Quality Index (AQI) in {place} today is <strong>{aqi}</strong>, which is categorized as <strong>{status}</strong>. {exp}
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p>
              <strong>Q.2</strong> How often is the air quality in {place} updated?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <strong>Ans:</strong> The air quality data for {place} is usually updated instantly using monitoring stations and sensors. This ensures residents can track real-time changes in the Air Quality Index (AQI).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger><p><strong>Q.3</strong> What is a safe AQI level for healthy air quality?</p></AccordionTrigger>
          <AccordionContent><p><strong>Ans:</strong> An AQI level of 0 to 50 is considered safe and healthy for breathing. At this range, the air quality is clean, and there is little or no risk to human health. People of all age groups, including children, elderly, and those with respiratory or heart conditions, can safely spend time outdoors without concerns. Once the AQI rises above this level, sensitive groups may begin to experience mild health effects depending on the air quality category.</p>
           
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger><p><strong>Q.4</strong> Which AQI standard do you use to measure air quality?</p>
           
          </AccordionTrigger>
          <AccordionContent>
            <p><strong>Ans:</strong> We use the US AQI (United States Air Quality Index) standard for measuring air quality. It is widely accepted internationally and provides a consistent way to understand how polluted the air is.</p>
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
