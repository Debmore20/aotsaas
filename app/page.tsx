import Link from 'next/link'
import {VT323, Rubik} from 'next/font/google'

const vt323 = VT323(
  {
    weight:'400',
    variable:'--font-vt323',
    subsets:["latin"],
    
  }
)
const rubik = Rubik(
  {
    weight:'400',
    variable:'--font-rubik',
    subsets:["latin"],
    
  }
)

export default function Home() {
  return (
    <main className={`${vt323.className} font-mono mt-[64px]`}>
      <section className='px-10 '>
        
        <h2 className='text-[48px] font-[400] text-center leading-[56px] mb-6'>Unleash the Titan Within</h2>

        <div>
          
          <p className='text-[16px] font-[400] text-justify mb-4' >Featuring Titans from the Attack On Titans, A.O.T series, 
          Our Innovative ML diffusion model transforms your Portraits into Titans.</p>
          <p className='text-[16px] font-[400] text-center' >Click below to generate a Titan.</p>

        </div>

        <div className="text-white text-[16px] text-center mt-12">
            <Link href={'/'} className="px-3 py-2 rounded-sm bg-slate-900 font-sans ">
                Unleash Titan!
            </Link>
        </div>

        <div className='mt-20'>
          <h3>Transform face photos into amazing A.O.T Titans</h3>
          <p>Utilize our innovative ML diffusion model to transform your portraits into Titans. Click below to generate a Titan</p>
        </div>
          
      </section>
    </main>
  )
}
