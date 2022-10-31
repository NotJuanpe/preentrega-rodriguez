import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const items = [{name:'NASA Hoodie', price:'$69.99', photo:'https://d3ugyf2ht6aenh.cloudfront.net/stores/908/888/products/buzo-nasa-blanco11-e581e86a52934567ec16644013760403-1024-1024.jpg'},{
                  name:'Ps5', price:'$799.99', photo:'https://blog.latam.playstation.com/tachyon/sites/3/2022/09/4d2e6098c3d5edb2c8d4d591c3b3aaf80a4cccdc.jpg?resize=1088%2C612&crop_strategy=smart'},{
                  name:'Iphone XR', price:'$593.91', photo:'https://i.blogs.es/1375af/iphone_xr_yellow-back_09122018/1366_2000.jpg'}]


  return (
    <div className="App">
      <Header/>
      <ItemListContainer>
          {items.map(item => 
           <div class="card card-body">
           <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
               <div class="mr-2 mb-3 mb-lg-0">
                   
                       <img src={item.photo} width="200" height="150" alt=""/>
                  
               </div>

               <div class="media-body">
                   <h6 class="media-title font-weight-semibold">
                       <a href="#" data-abc="true">{item.name}</a>
                   </h6>

                   <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                       <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Hoodie</a></li>
                       <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Clothes</a></li>
                   </ul>

                   <ul class="list-inline list-inline-dotted mb-0">
                       <li class="list-inline-item">All items from <a href="#" data-abc="true">Test INC</a></li>
                   </ul>
               </div>

               <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                   <h3 class="mb-0 font-weight-semibold">{item.price}</h3>
                   <button type="button" onClick={click => (alert('Buena Eleccion'))} class="btn btn-warning mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
               </div>
           </div>
       </div>)}
      </ItemListContainer>
    </div>
  );
}

export default App;
