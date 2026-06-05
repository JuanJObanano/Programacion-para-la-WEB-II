import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import PanelGeneral from './pages/PanelGeneral';
import NotFound from './pages/NotFound';
import Productos from './pages/Productos';
import UsuariosLista from './pages/UsuariosLista';
import UsuarioDetalle from './pages/UsuarioDetalle';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<PanelGeneral />} />
        <Route path="/productos" element={<Productos />} />
        <Route path='/usuarios' element={<UsuariosLista />} />
        <Route path='/usuario/:id' element={<UsuarioDetalle />} />
        <Route path='/favoritos' element={<Favoritos />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
