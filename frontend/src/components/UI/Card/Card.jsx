import style from './Card.module.css';

const Card = ( { restaurant, id } ) => {

     return ( <section className={style["card-container"]}>
              <div className={style["card-header"]}></div>
              <div className={style['card-row']}>
                <div>
                  <h3>{ restaurant?.name }</h3>
                  {/* <p>{ restaurant?.description }</p> */}
                </div>
                <ul>
                  {/* <li>
                    { restaurant?.address }
                  </li> */}
                  <li>
                    { restaurant?.street }
                  </li>
                  {/* <li>
                    { restaurant?.zip_code }
                  </li>
                  <li>
                    { restaurant?.price_level }
                  </li>
                  <li>
                    { restaurant?.country }
                  </li>
                  <li>
                    { restaurant?.email }
                  </li>
                  <li>
                    { restaurant?.website }
                  </li> */}
                </ul>
              </div>
            </section>
     );
}
 
export default Card;