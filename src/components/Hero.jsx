import { motion } from "framer-motion";
import botLogo from "../assets/images/tld-logo-xpro.svg";
import discordMark from "../assets/icons/discord-mark-black.png";
import botIcon from "../assets/icons/bot-icon.png";
import cityHallImage from "../assets/images/look-city-hall-2.png";

export const Hero = () => {

  return (
    <section
      className="w-screen flex justify-center items-center bg-[#1b1c24] py-20 lg:py-32"
      id="home"
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-start px-4 md:px-8 lg:px-12">
        {/* Left side - Text content */}
        <div className="w-full lg:w-[42%] text-left flex flex-col justify-between h-full space-y-12 font-inter lg:pr-8 xl:pr-12">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white text-5xl sm:text-6xl lg:text-5xl font-bold tracking-tight">
                Fight.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h1 className="text-[#FFA500] text-5xl sm:text-6xl lg:text-5xl font-extrabold tracking-tight">
                Survive.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-white text-5xl sm:text-6xl lg:text-5xl font-bold">
                <h2>Rebuild.</h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-[#FFA500] text-5xl sm:text-6xl lg:text-5xl font-extrabold">
                <h2>The Last District</h2>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8"
          >
            <div className="flex flex-col xl:flex-row gap-4 w-full">
              <a 
                href="https://discord.com/oauth2/authorize?client_id=1190773943330668666" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full xl:w-auto bg-[#5865F2] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 hover:bg-[#5865F2] transition-colors text-base sm:text-lg flex items-center justify-center font-inter whitespace-nowrap"
              >
                <img 
                  src={botIcon.src} 
                  alt="Bot Icon" 
                  className="w-5 object-contain mr-2"
                />
                Add To Discord
              </a>
              <a 
                href="https://discord.gg/the-last-district" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full xl:w-auto bg-white text-black font-semibold py-3 sm:py-4 px-6 sm:px-8 hover:bg-gray-100 transition-colors text-base sm:text-lg flex items-center justify-center gap-2 font-inter whitespace-nowrap"
              >
                <img 
                  src={discordMark.src} 
                  alt="Discord" 
                  className="w-5 object-contain"
                />
                Join Community
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right side - Images */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[58%] mt-12 lg:mt-0 flex justify-center lg:justify-end relative"
        >
          <div className="flex flex-col gap-4">
            <div className="relative w-full md:w-[540px] lg:w-[550px] flex flex-col md:flex-row lg:flex-row gap-4 md:justify-center lg:justify-end">
              {/* Logo container with text */}
              <div className="flex flex-col gap-3 items-center lg:items-end">
                <div className="relative w-[260px] sm:w-[240px] md:w-[250px] lg:w-[270px] aspect-square">
                  <div className="relative w-full h-full">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/5 
                      shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)] 
                      after:absolute after:inset-0 after:shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]"
                    >
                      <div className="absolute inset-0 bg-[#242630]"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img 
                          src={botLogo.src} 
                          alt="The Last District"
                          className="w-full h-full object-contain filter contrast-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" style={{ transform: 'scale(1.30)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-white/70 text-sm text-center px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p> */}
              </div>

              {/* City Hall Image container with text */}
              <div className="flex flex-col gap-3 items-center lg:items-end">
                <div className="relative w-[260px] sm:w-[240px] md:w-[250px] lg:w-[270px] aspect-square">
                  <div className="relative w-full h-full">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/5 
                      shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)] 
                      after:absolute after:inset-0 after:shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]"
                    >
                      <div className="absolute inset-0 bg-[#242630]"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center p-3">
                        <img 
                          src={cityHallImage.src} 
                          alt="City Hall"
                          className="w-full h-full object-contain filter contrast-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-white/70 text-sm text-center px-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p> */}
              </div>
            </div>
            
            {/* Description text under both images */}
            <p className="text-white text-sm text-left lg:text-right max-w-[550px] px-4 md:px-0">
              <b>The Last District</b> is a free text-based multiplayer game where survivors and zombies wage epic factional warfare through a custom Discord bot. Choose your side, dominate the city, and shape the apocalypse. Join the Discord now to play!
            </p>
          </div>
        </motion.div>
      </div>
      {/* {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )} */}
    </section>
  );
};
