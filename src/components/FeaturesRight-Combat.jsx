import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import combat from "../assets/images/tld-encounter-screen.png";
export const FeaturesRightCombat = () => (
  <section className="w-full bg-[#242630] mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
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
                      src={combat.src}
                      alt="Combat"
                      className="w-full h-full object-contain filter contrast-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">FIGHT AS SURVIVOR OR ZOMBIE</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Survive or Devour
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Choose your side and battle over The Last District. Level up, equip powerful gear, and use strategy to conquer both player and NPC threats.</p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Play as a survivor or zombie, each with unique combat styles and goals.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Level up to unlock devastating abilities tailored to your playstyle.
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Equip weapons, armor, or mutations to dominate the fight.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
