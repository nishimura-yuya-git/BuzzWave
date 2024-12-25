import { motion } from 'framer-motion';
import Container from './ui/Container';

const achievementImages = [
 { 
   src: "/images/Trackrecord200.png", 
   size: "w-72 md:w-96 md:h-96",
 },
 { 
   src: "/images/Trackrecord100.png", 
   size: "w-64 md:w-80 md:h-80",
 },
 { 
   src: "/images/Trackrecord50.png", 
   size: "w-64 md:w-80 md:h-80",
 },
 { 
   src: "/images/Trackrecord10.png", 
   size: "w-64 md:w-80 md:h-80",
 }
];

const AchievementImage = ({ image, size }: { image: string; size: string; }) => (
  <motion.div 
    className="flex flex-col items-center justify-center mb-12 md:mb-0"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2
    }}
  >
    <motion.div className={`relative ${size}`}>
      <motion.img
        src={image}
        alt="Achievement"
        className="w-full h-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.div>
  </motion.div>
);

export default function Results({ id }: { id: string }) {
 return (
   <section id={id} className="py-24 bg-[#1d40ae]">
     <Container>
       <div className="relative h-[50px] md:h-[60px] mb-20">
         <motion.div className="absolute inset-0">
           <motion.div
             className="text-transparent text-[56px] md:text-8xl font-bold leading-tight -mt-12 md:-mt-14 px-2"
             style={{
               WebkitTextStroke: '1px rgba(255,255,255,0.4)',
               fontFamily: 'ui-sans-serif, system-ui, sans-serif'
             }}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
           >
             Results
           </motion.div>
         </motion.div>

         <motion.h2 
           className="relative text-2xl font-bold px-2 text-white md:text-3xl"
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           受講者実績
         </motion.h2>
       </div>

       <motion.div 
         className="flex flex-col md:grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 items-center"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={{
           hidden: {},
           visible: {
             transition: {
               staggerChildren: 0.1
             }
           }
         }}
       >
         {achievementImages.map((image, index) => (
           <motion.div
             key={index}
             className="flex justify-center w-full"
             variants={{
               hidden: { opacity: 0, y: 20 },
               visible: {
                 opacity: 1,
                 y: 0,
                 transition: {
                   duration: 0.6,
                   ease: "easeOut"
                 }
               }
             }}
           >
             <AchievementImage 
               image={image.src} 
               size={image.size}
             />
           </motion.div>
         ))}
       </motion.div>

       <motion.div 
         className="mt-16 text-center"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: 1 }}
       >
         <p className="text-white/80 text-lg">
           ※ 2024年度実績
         </p>
       </motion.div>
     </Container>
   </section>
 );
}