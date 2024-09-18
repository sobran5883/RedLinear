import { motion } from "framer-motion";
import sobranImg from '../assets/sobran.jpg'
import ankitImg from '../assets/ankit.png'
import anuragImg from '../assets/anurag.png'
import omImg from '../assets/om.png'
import prafullImg from '../assets/prafull.png'
import dummyImg from '../assets/dummy.jpeg'
import deeyaImg from '../assets/deeya1.jpg'

const members=[
  {
    id:1,
    img:deeyaImg,
    name:'Deeya Verma',
    experties:'Graphic designer',
    year:'2nd Year ECE'
  },
  {
    id:2,
    img:anuragImg,
    name:'Anurag Verma',
    experties:'SDE',
    year:'4th Year ECE'
  },
  {
    id:3,
    img:sobranImg,
    name:'Sobran Rajak',
    experties:'SDE',
    year:'4th Year CSE-AI'
  },
  {
    id:4,
    img:ankitImg,
    name:'Ankit Duvedi',
    experties:'Inhe sab aata hai',
    year:'4th Year ECE'
  },
  {
    id:5,
    img:omImg,
    name:'Om Gupta',
    experties:'ML',
    year:'4th Year EE'
  },
  {
    id:6,
    img:prafullImg,
    name:'Kala Babu',
    experties:'Graphic designer',
    year:'4th Year ECE'
  }
]
const Team = () => {
  return (
    <div className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* <div className='flex flex-col items-center justify-center'>
          <a href="https://www.linkedin.com/in/sobran5883">
            <img className="h-40 w-40 my-4 rounded-full border-2 border-red-600" src={sobran} alt="Sobran Rajak" />
          </a>
              <h1 className='text-deep-green text-lg md:text-xl font-semibold'>Sobran Rajak</h1>
              <h1 className='font-bold text-lg'>[SDE]</h1>
              <h1 className='text-lg font-bold my-2'>2 Yrs of experience</h1>
              <p className='text-center md:w-10/12'>Our SDE is not just a dev but a visionary who brings a distinctive perspective to the development of our website. With a wealth of experience and a knack for innovation, they are the driving force behind success.</p>
          </div> */}
          {members.map((member)=>(
            <div key={member.id} className="flex flex-col items-center justify-center">
              <a href="#"><img src={member.img} className="h-40 w-40 my-4 rounded-full border-2 border-red-600" alt="profile" /></a>
              <h1 className="text-red-600 text-gl md:text-xl font-semibold">{member.name}</h1>
              <h1 className="text-lg font-bold my-2">{member.experties}</h1>
              <p className="text-center md:w-10/12">{member.year}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
