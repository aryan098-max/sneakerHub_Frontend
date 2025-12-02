import { ADIDAS, NIKE, PUMA, UNDER_ARMOUR } from '../utils/constants'

const EntireSet = () => {
  return (
    <div className='pt-8 pb-2 relative' >
    <h1 className='text-center font-bold text-2xl'> Complete Set</h1>
    <h1 className='text-center font-bold text-xl py-2'>What's Stopping You - Contact Sneaker Hub</h1>
    <div className='flex justify-center items-center'>
        <div>
            <div>
                <img
                className='w-full pr-4 m-2 rounded-lg'
                alt='nikeset'
                src={NIKE}
                />
                <h1 className='text-center font-bold text-xl'>Nike</h1>
            </div>
            <div>
                <img
                className='w-full pr-4 m-2'
                alt='nikeset'
                src={ADIDAS}
                />
                <h1 className='text-center font-bold text-xl'>Adidas</h1>
            </div>

        </div>
        <div>
            <div>
                <img
                className='w-full pr-4 m-2'
                alt='nikeset'
                src={PUMA}
                />
                <h1 className='text-center font-bold text-xl'>Puma</h1>
            </div>
            <div>
                <img
                className='w-full pr-4 m-2'
                alt='nikeset'
                src={UNDER_ARMOUR}
                />
                <h1 className='text-center font-bold text-xl'>Under Armour</h1>
            </div>
        </div>
        
        </div>
       
    </div>
  )
}

export default EntireSet