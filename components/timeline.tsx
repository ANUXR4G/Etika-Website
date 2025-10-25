"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#e6ede4] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Our Story: Ethical Sourcing for a Sustainable Future
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-3xl">
          At Etika Pvt Ltd, our mission is to drive sustainable growth by providing a diverse range of high-quality materials. The name &quot;Etika&quot; embodies the ethical and responsible approach we bring to every aspect of our business.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[#cee7ad] to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#0e7a3e] from-0% via-[#0e7a3e] via-50% to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default function EtikaAboutPage() {
  const data = [
    {
      title: "The Circular Economy",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We source and supply top-quality recyclable metals and non-metals, contributing directly to waste reduction and resource efficiency. Our commitment to the circular economy helps create a sustainable future for generations to come.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
              alt="Recycled metal materials"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1625231334168-35067f8853ed?w=800&q=80"
              alt="Metal recycling process"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80"
              alt="Sustainable material processing"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80"
              alt="Industrial recycling facility"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Renewable Resources",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We provide responsibly managed pine wood logs, ensuring a continuous supply of sustainable wood for global needs. Our forestry practices prioritize environmental conservation and reforestation.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Each log is sourced from certified sustainable forests, supporting biodiversity and ecosystem health while meeting the demands of modern construction and manufacturing industries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80"
              alt="Pine forest sustainable logging"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1609766975127-f7e9f48fab88?w=800&q=80"
              alt="Stacked pine wood logs"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1551438248-880013bbfd95?w=800&q=80"
              alt="Sustainable forestry management"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
              alt="Wood processing facility"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Agricultural Excellence",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We trade in premium agricultural products, specifically high-quality bananas, supporting ethical and sustainable farming practices worldwide.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Direct partnerships with ethical farmers
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Quality assurance at every stage
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Fair trade practices and pricing
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Sustainable farming techniques
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Global distribution network
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80"
              alt="Banana plantation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80"
              alt="Fresh banana harvest"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=80"
              alt="Sustainable banana farming"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&q=80"
              alt="Premium quality bananas"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      
      {/* Partner with Etika Section */}
      <div className="w-full bg-[#e6ede4] py-20 px-4 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Partner with Etika
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            When you choose Etika, you&apos;re not just getting quality materials; you are partnering with a company committed to an ethical supply chain and a healthier environment. Our diverse material base ensures we are a singular source for powering your sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
}
