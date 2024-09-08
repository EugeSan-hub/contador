import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion'
import Contador from './components/Contador'
function App() {
  

  return (
    <main className='container my-4' >  
      <h1 className='text-center'>Primer Proyecto React</h1>
    <p>Lorem  ipsum dolor sit amet consectetur adipisicing elit. <br/>Ex eius cum velit perspiciatis assumenda dicta veritatis libero numquam, vero officia expedita voluptate totam blanditiis reiciendis consequatur enim earum nemo quo!</p>
     {/* invocar los componentes */}
     <Informacion></Informacion>
     <Contador></Contador>
      </main> 
  
  )
}

export default App
