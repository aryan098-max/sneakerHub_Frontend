import Banner from './Banner';
import SmallCarousel from './SmallCarousel';
import EntireSet from './EntireSet';
import TopComponent from './TopComponent';



const MainContianer = () => {
  return (
    <div>
        <TopComponent/>
        <Banner/>
        <SmallCarousel/>
        <EntireSet/>
     </div>
  )
}

export default MainContianer