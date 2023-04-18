import './Form.scss';
import { useForm } from "react-hook-form";



const Form = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset
   } = useForm();
 
   const onSubmit = (data) => {
     alert('Ваше повідомлення надіслано!');
     reset();
   };
 
   return (
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className='first-row-form'>
      <div>
         <input
           type="text" placeholder="Введіть призвіще та ім'я"
           {...register('name', { required: 'Це поле є обов\'язковим',           
           minLength: {value: 4, message: 'Мінімум 4 символи'} 
         })}
         />
         {errors.name && <p>{errors.name.message}</p>}
       </div>
       <div>
         <input
           type="email" placeholder="Введіть свій email"
           {...register('email', { required: 'Це поле є обов\'язковим', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Неправильний формат електронної пошти' } })}
         />
         {errors.email && <p>{errors.email.message}</p>}
       </div>
      </div>

       <div>
         <input className='tel'
           type="tel" placeholder="Введіть свій номер телефону"
           {...register('phone', { required: 'Це поле є обов\'язковим', pattern: { value: /^(\+38)?0\d{9}$/, message: 'Неправильний формат номера телефону' } })}
         />
         {errors.phone && <p>{errors.phone.message}</p>}
       </div>
       <div>
         <textarea className='message' placeholder="Повідомлення"
           {...register('text', { required: 'Це поле є обов\'язковим',          
            minLength: {value: 10,message: 'Мінімум 10 символів'} 
         })}
         />
         {errors.text && <p>{errors.text.message}</p>}
       </div >
       <div className='check'>
         <input 
           type="checkbox"
           {...register('updates')}
         />
         <label>Надсилати мені оновлення про академію</label>
       </div>
       <button type="submit">Надіслати</button>
     </form>
   );
 };
 
 export default Form;