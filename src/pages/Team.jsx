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
    experties:'Full Stack Developer',
    year:'4th Year ECE'
  },
  {
    id:3,
    img:sobranImg,
    name:'Sobran Rajak',
    experties:'MERN Developer',
    year:'4th Year CSE-AI'
  },
  {
    id:4,
    img:ankitImg,
    name:'Ankit Duvedi',
    experties:'Robotics',
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
    name:'Prafull Kumar Singh',
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

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
