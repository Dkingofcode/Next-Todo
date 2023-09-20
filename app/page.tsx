import Image from 'next/image';
import backgroundDark from '../public/bg-desktop-dark.jpg';
import sun from '../public/icon-sun.svg';
import moon from '../public/icon-moon.svg';
import check from '../public/icon-check.svg';
import cross from '../public/icon-cross.svg';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-image">
      <div className="header">
        <h1>TODO</h1>  
        <Image src={sun} alt="icon of the sun" width={20} height={5} />
      </div>

      <div className="todo">
          <input type="text" className='input' placeholder="Create a new todo..." />

          <div>
            <div className='box'>
              <Image src={check} alt="checked button" width={50} height={50}  />
              <h1>Complete online Javascript course</h1>
            </div>
            <div className='box'>
            <Image src={check} alt="checked button" width={10} height={10}  />
              <h1>Jog around the park 3x</h1>
            </div>
            <div className='box'>
            <Image src={check} alt="checked button" width={10} height={10}  />
              <h1>10 minutes meditation</h1>
            </div>
            <div className='box'>
            <Image src={check} alt="checked button" width={10} height={10}  />
              <h1>Read for 1 hour</h1>
            </div>
            <div className='box'>
            <Image src={check} alt="checked button" width={10} height={10}  />
              <h1>Pick up groceries</h1>
            </div>
            <div className='box'>
            <Image src={check} alt="checked button" width={10} height={10}  />
              <h1>Complete online Javascript course</h1>
            </div>
            <div className='box'>
            <Image src={check} alt="checked button" width={10} height={10}  />
              <h1>Complete todo app on frontend mentor</h1>
            </div>
          </div>
          
        </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
       
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
  )
}
