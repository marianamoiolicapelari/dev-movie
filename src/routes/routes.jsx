import { Route, Routes } from 'react-router-dom'

import Detail from '../containers/Detail'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default Router
