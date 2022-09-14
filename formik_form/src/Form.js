import React from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';

 const Form = () => {

  const initialValues={firstName: '',lastName: 'kumar',email: ''};
  const onSubmit= values => {alert(JSON.stringify(values));
   console.log("main formik ",formik)
  }

const validate=(values)=>{
// it keep tracking the data and used for setting the errors 
const errors= {};
// it is not inbuilt 
// so  we have to modify the error Object with custom error message
   
if(values.firstName==="") 
  errors["firstName"]="Fill kr de bhai ";

  return errors;
  }

  const formik = useFormik({initialValues,onSubmit,validate});
// formik return all object we need to manipluate the form 
//   in formik.Values all values contain  
// formik keep trtacking everything // 
// it validate and make errors objec also 
console.log("form values ",formik.values);
console.log("Touched  values ",formik.touched);

useEffect(()=>{
    console.log("Formik returned object ",formik)
},[formik])

// whenever make anychange in the form this above part gets executed 

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
     
     />
      {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}
  <br/>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        onBlur={formik.handleBlur}
     
     />

<br/>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
<br/>
  
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;