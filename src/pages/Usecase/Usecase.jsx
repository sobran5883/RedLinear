const usecases=[
    {
        title:"Hospitals:",
        discription1:"->Waste Segregation: Sorts biohazardous, recyclable, and general waste to reduce the risk of infections.",
        discription2:"->Sanitization: Uses UV-C light for surface disinfection, minimizing human exposure."
    },
    {
        title:"Public Spaces (Airports, Malls, Parks):",
        discription1:"->Litter Collection: Identifies and collects waste scattered across public spaces, promoting a cleaner environment.",
        discription2:"->Automatic Cleaning: Autonomous floor cleaning during off-peak hours or at night to maintain hygiene standards"
    },
    {
        title:"Schools:",
        discription1:"->Litter Collection: Identifies and collects waste scattered across public spaces, promoting a cleaner environment.",
        discription2:"->Classroom Sanitization: Regular sanitization of classrooms, ensuring a healthier environment for children.",
    },
    {
        title:"Corporate Offices:",
        discription1:"->Desk and Common Area Cleaning: Regularly sanitizes and cleans shared spaces like meeting rooms and cafeterias.",
        discription2:"->Waste Management: Efficient disposal and segregation of office waste, including paper, plastic, and electronic waste."
    },
    {
        title:"Factories & Industrial Areas:",
        discription1:"->Hazardous Waste Segregation: Automatically identifies and separates hazardous materials, ensuring safe disposal.",
        discription2:"->Warehouse Floor Cleaning: Keeps floors and workspaces clean to maintain safety and productivity.",
    },
    {
        title:"Transportation Hubs (Bus Stations, Train Stations)",
        discription1:"->Sanitization of Waiting Areas: Frequently cleans and sanitizes public seating and restrooms.",
        discription2:"->Trash Collection: Identifies and removes trash to maintain a cleaner and more welcoming environment.",
    },
]

const Usecase=()=> {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-10/12 my-28 flex flex-col items-center justify-center'>
            {usecases.map((usecase)=>(
                <div className='w-full my-4'>
                    <h1 className='text-4xl my-2 underline text-red-800'>{usecase.title}</h1>
                    <p className='text-lg font-semibold'>{usecase.discription1}</p>
                    <p className='text-lg font-semibold'>{usecase.discription2}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Usecase;