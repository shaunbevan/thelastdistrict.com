import { motion } from "framer-motion";

import inventory from "../assets/images/tld-inventory-screen.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const FeaturesLeftSearch = () => {
  return (
    <section
      className="w-full bg-[#242630] pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">
                SCAVENGE. RANSACK. STOCKPILE.
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Scavenge The City For Supplies
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
              Scour the city for essential resources, from weapons and armor to healing items. Complete tasks and stockpile supplies to secure and protect The Last District against relentless threats.</p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Collect weapons, armor, and healing items to aid in survival.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Complete tasks and missions to strengthen The Last District.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Work with your faction to stockpile important resources.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="relative w-full aspect-square">
                <div className="relative w-full h-full">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/5 
                    shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)] 
                    after:absolute after:inset-0 after:shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]"
                  >
                    <div className="absolute inset-0 bg-[#242630]"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <img
                        src={inventory.src}
                        alt="Inventory"
                        className="w-full h-full object-contain filter contrast-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


