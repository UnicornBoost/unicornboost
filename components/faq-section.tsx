"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="bg-white text-black py-16">
      <h3 className="font-semibold text-lg text-center mb-8">FAQs</h3>
      <Tabs defaultValue="sdaas" className="w-full">
        <TabsList className="grid w-[300px] grid-cols-3 mx-auto">
          <TabsTrigger value="sdaas">SDAAS</TabsTrigger>
          <TabsTrigger value="aidaas">AIDAAS</TabsTrigger>
          <TabsTrigger value="csaas">CSAAS</TabsTrigger>
        </TabsList>
        <TabsContent
          value="sdaas"
          className="mt-8 md:w-4/5 px-4 md:px-0 mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why should I choose Unicornboost instead of hiring a full-time
                software eng.?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request development?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How fast is the work done?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a limit to the work I can request?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What if I only have one development task?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What does it mean to pause my subscription?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Who are the developers?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What kind of work is a good fit?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How can I have daily contact with the developer?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Will I as be in direct touch with the developer or is there a
                project manager involved?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent
          value="aidaas"
          className="mt-8 md:w-4/5 px-4 md:px-0 mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why should I choose Unicornboost instead of hiring a full-time
                software eng.?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request development?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How fast is the work done?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a limit to the work I can request?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What if I only have one development task?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What does it mean to pause my subscription?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Who are the developers?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What kind of work is a good fit?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How can I have daily contact with the developer?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Will I as be in direct touch with the developer or is there a
                project manager involved?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent
          value="csaas"
          className="mt-8 md:w-4/5 px-4 md:px-0 mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why should I choose Unicornboost instead of hiring a full-time
                software eng.?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request development?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How fast is the work done?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a limit to the work I can request?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What if I only have one development task?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What does it mean to pause my subscription?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Who are the developers?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What kind of work is a good fit?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How can I have daily contact with the developer?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Will I as be in direct touch with the developer or is there a
                project manager involved?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FAQSection;
