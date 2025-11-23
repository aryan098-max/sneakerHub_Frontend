import {createBrowserRouter, RouterProvider} from 'react-router';
import Body from './layouts/Body';
import PolicyContainer from './pages/policy/PolicyContainer';
import MainContianer from './components/MainContianer';
import ContactUs from './pages/policy/ContactUs';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';
import ShippingPolicy from './pages/policy/ShippingPolicy';
import ReturnRefundPolicy from './pages/policy/ReturnRefundPolicy';
import TermsConditions from './pages/policy/TermsConditions';
import CustomerContainer from './pages/customer/CustomerContainer';
import AboutUs from './pages/customer/AboutUs';
import Shop from './components/Shop';
import FAQs from './pages/customer/FAQs';
import TrackOrder from './pages/customer/TrackOrder';

const appRotuer = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        index:true,
        element:<MainContianer/>
      },
      {
        path:"policy",
        element:<PolicyContainer/>,
        children:[
          {path:"privacy", element:<PrivacyPolicy/>},
          {path:"return", element:<ReturnRefundPolicy/>},
          {path:"shipping", element:<ShippingPolicy/>},
          {path:"terms", element:<TermsConditions/>},
          {path:"contact", element:<ContactUs/>},        
        ]
      },
      {
        path:"customer",
        element:<CustomerContainer/>,
        children:[
          {path:"about", element:<AboutUs/>},
          {path:"shop", element:<Shop/>},
          {path:"faq", element:<FAQs/>},
          {path:"track", element:<TrackOrder/>},
        ]


      },

    ]
  }])

const App = () => {


  return (
    < RouterProvider router={appRotuer}/>
  )
}

export default App