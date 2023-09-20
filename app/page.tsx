import Image from 'next/image';
import backgroundDark from '../public/bg-desktop-dark.jpg';
import sun from '../public/icon-sun.svg';
import moon from '../public/icon-moon.svg';
import check from '../public/icon-check.svg';
import cross from '../public/icon-cross.svg';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-image">
      <div className="header">
        <h1>TODO</h1>  
        <Image src={sun} alt="icon of the sun" width={20} height={5} />
      </div>

      <div className="todo">
         <div className='box'>
          <div className='circle'  />
          <input type="text" className='input' placeholder="Create a new todo..." />
         </div>

          <div>
            <div className='box'>
              {/* <Image src={check} alt="checked button" width={10} height={10}  /> */}
              <div className='circle'  />
              <h1>Complete online Javascript course</h1>
            </div>
            <div className='box'>
            {/* <Image src={check} alt="checked button" width={10} height={10}  /> */}
            <div className='circle'  />
              <h1>Jog around the park 3x</h1>
            </div>
            <div className='box'>
            {/* <Image src={check} alt="checked button" width={10} height={10}  /> */}
            <div className='circle'  />
              <h1>10 minutes meditation</h1>
            </div>
            <div className='box'>
            {/* <Image src={check} alt="checked button" width={10} height={10}  /> */}
            <div className='circle'  />
              <h1>Read for 1 hour</h1>
            </div>
            <div className='box'>
            {/* <Image src={check} alt="checked button" width={10} height={10}  /> */}
            <div className='circle'  />
              <h1>Pick up groceries</h1>
            </div>
            
            <div className='box'>
            {/* <Image src={check} alt="checked button" width={10} height={10}  /> */}
            <div className='circle'  />
              <h1>Complete todo app on frontend mentor</h1>
            </div>
            <div className='box footer'>
              <div>
              <p>5 items left</p>
              </div>

              <div className='buttons'>
                <p>All</p>
              </div>

                <div>  
                <p>Active</p>
                </div>

                <div>
                <p>Completed</p>
              </div>

               <div>
                <p>Clear completed</p>
               </div>


              
            </div>
          </div>
          
        </div>

      
    </main>
  )
}
