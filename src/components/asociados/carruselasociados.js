import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1hoyos from '../../assets/imgaso1.jpg'

function ItemCliente () {
  return(

      <div className="container-slider2">

      <div className="slideitem2">

          <ul>
              <li>
              <div className="cards-section10">
    <img src={img1hoyos} />
<p>
is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled 
it to make a type specimen book.
</p> 
             </div>  
                </li>
              <li><img src={img1hoyos}/></li>
              <li><img src={img1hoyos}/></li>
              <li><img src={img1hoyos}/></li>
          </ul>
      </div>

      </div>
  )
}
export default ItemCliente; 
