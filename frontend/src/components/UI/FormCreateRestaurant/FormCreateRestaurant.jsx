import styles from './FormCreateRestaurant.module.css';

const FormCreateRestaurant = ( { restaurantData, setRestaurantData , handleSubmit, handleData }) => {
  return ( 
    <>
      <form onSubmit={handleSubmit} className={styles['form-container']}>
          <div>
            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Name of the Restaurant</label>
                <input type="text" id="name" onChange={handleData} />
            </div>
            
            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Street</label>
                <input type="text" id="street" onChange={handleData}/>
            </div>
            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Address</label>
                <input type="text" id="address" onChange={handleData}/>
            </div>

            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">City</label>
                <input type="text" id="city" onChange={handleData}/>
            </div>
            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Zip Code</label>
                <input type="text" id="zip_code" onChange={handleData}/>
            </div>

            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Website</label>
                <input type="text" id="website" onChange={handleData}/>
            </div>

            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Country</label>
                <input type="text" id="country" onChange={handleData}/>
            </div>

            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Email</label>
                <input type="email" id="email" onChange={handleData}/>
            </div>

            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Phone</label>
                <input type="text" id="phone" onChange={handleData} />
            </div>

            <div className={styles['form-input-rows']}>
                <label htmlFor="" className="">Price Level</label>
                <input type="text" id="price_level" onChange={handleData}/>
            </div>

            <div className={styles['form-input-rows']}>
                <input id="description" cols="30" rows="10" onChange={handleData} />
            </div>
          
            <button type="submit">Create A New Restaurant!</button>
          </div>
      </form>
    </>
   );
}
 
export default FormCreateRestaurant;