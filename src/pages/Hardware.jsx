const  Hardwares=[
  {
      title:"LIDAR:",
      discription1:"->Enables the robot to detect obstacles and measure distances with high precision, facilitating smooth navigation.",
      discription2:"->Assists in creating 2D maps of the environment, which is crucial for the robot’s path planning and real-time location awareness."
  },
  {
      title:"ESP-32:",
      discription1:"->Acts as the main controller for sensor inputs and data communication, managing various peripheral components.",
      discription2:"->Provides wireless connectivity, allowing the robot to send and receive data over Wi-Fi for real-time updates and remote control."
  },
  {
      title:"MPU-6050:",
      discription1:"->Measures the robot's orientation, acceleration, and angular velocity, which helps in maintaining balance and movement accuracy.",
      discription2:"->Enhances the stability of the robot by providing real-time feedback on its position, aiding in smoother navigation on uneven surfaces."
  },
  {
      title:"NVIDIA Jetson:",
      discription1:"->Performs complex AI computations, such as image and video processing, for tasks like object detection and environmental recognition.",
      discription2:"->Supports machine learning models, enabling the robot to analyze and respond to its surroundings intelligently."
  },
  {
      title:"Motors with Encoders:",
      discription1:"->Provide precise control over the robot’s movement by feeding back data on speed and position, essential for accurate navigation.",
      discription2:"->Allow the robot to perform smooth and controlled movements, necessary for tasks such as docking and delivering items within tight spaces."
  },
  {
      title:"Intel RealSense Camera:",
      discription1:"->Captures 3D depth information, enabling the robot to understand and interact with its environment beyond basic obstacle avoidance.",
      discription2:"->Facilitates vision-based mapping, allowing the robot to build a detailed spatial map of its surroundings for enhanced navigation and obstacle handling."
  }
]

const Hardware=()=> {
return (
  <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-10/12 my-28 flex flex-col items-center justify-center'>
          {Hardwares.map((hardware)=>(
              <div className='w-full my-4'>
                  <h1 className='text-4xl my-2 underline text-red-800'>{hardware.title}</h1>
                  <p className='text-lg font-semibold'>{hardware.discription1}</p>
                  <p className='text-lg font-semibold'>{hardware.discription2}</p>
              </div>
          ))}
      </div>
  </div>
)
}

export default Hardware;