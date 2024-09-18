import './Usecase.css'
import { Fade, Slide } from "react-awesome-reveal";
import img2 from '../../assets/sobran.jpg'


const usecases=[
    {
        img:img2,
        title:"Hospitality",
        discription:"The robot's hygiene management capabilities, like sanitization and waste disposal, can be adapted to the hospitality sector (e.g., hotels) to maintain cleanliness and enhance guest experience. Its autonomous navigation and interaction features can assist in customer service tasks like directing guests to their rooms or providing on-the-spot services."
    },
    {
        img:img2,
        title:"Financial Services",
        discription:"While the robot itself is not directly applied to financial services, the underlying technologies like data handling, real-time system synchronization, and cloud-based integration can be adapted for managing customer accounts, transaction records, or appointment scheduling in financial institutions, leading to enhanced operational efficiency."
    },
    {
        img:img2,
        title:"Entertainment:",
        discription:"In the entertainment sector, the robot's autonomous features could be used for managing events, crowd control, and delivering services in theaters or large venues. The use of interactive robots can add a futuristic element to visitor experiences, handling ticketing, navigation, and other customer interactions."
    },
    {
        img:img2,
        title:"Retail",
        discription:"The cleaning and delivery functions of the robot can benefit the retail industry, especially in maintaining store cleanliness and handling logistics. Autonomous robots could be used to stock shelves, interact with customers, provide product information, and even manage inventory by syncing with a retail system."
    },
]

const Usecase=()=> {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        {/* <div className="relative w-full flex items-center justify-center">
            <div className='w-full h-[150px] md:h-[300px] bg-black'>
            </div>
            <div className='absolute'>
                <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>What We Do?</h1>
            </div>
        </div> */}
        <div className='w-11/12 md:w-10/12 flex items-center my-12 md:my-20'>
            <div className='w-full md:w-fit'>
                <div>
                    <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                        <h1 className='font-rubik text-sm font-normal px-2'>Our Services</h1>
                    </div>
                    <div className='relative my-2 w-fit'>
                       <div>
                            <h1 className='font-rubik text-xl md:text-2xl font-semibold'>What we do?</h1>
                       </div>
                       <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
            {usecases.map((usecase)=>(
             <Slide direction='up' className='lg:w-full'>
                <div className='flex flex-row-reverse items-center justify-center'>
                <div className='lg:w-5/12 flex flex-col items-center text-center  md:text-start'>
                    <Slide direction='up' className='w-full font-semibold text-gray-700 font-inter text-2xl lg:text-[30px]'>
                       {usecase.title}
                    </Slide>
                    <div className='w-7/12 md:w-4/12 block lg:hidden'>
                        <img src={usecase.img} alt="" />
                    </div>
                    <Fade className='font-medium text-sm lg:text-base text-slate-600'>
                        {usecase.discription}
                    </Fade>
                </div>
                <div className='w-2/5 hidden lg:block'>
                    <img className='services' src={usecase.img} alt="" />
                </div>
                </div>
             </Slide>
            ))}
        </div>
    </div>
  )
}

export default Usecase;