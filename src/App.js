import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import DefaultLayout from '~/layouts';
function App() {
  return (
  <Router>
    <div>
      <Routes>
          {publicRoutes.map( (route, index) => {
            const Page = route.component // chinh là trang muốn hiện thị(Home/Following)

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            }else if (route.layout === null) {
               Layout = Fragment
            }
            
            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>}/>
            )
          })}
      </Routes>
    </div>
  </Router>);
}

export default App;
