import React from 'react'
import { useFormik } from 'formik';
import '../style.css';
import './style.css'
import validationSchema from './validation'

function Contact() {
  const { handleChange, handleSubmit, handleBlur, isSubmitting, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000))

      if(values.email === 'test@test.com'){
        return bag.setErrors({email: 'Bu mail adresi zaten kullanılıyor.'})
      }

      bag.resetForm()
    },
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-control'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Adınız"
            disabled={isSubmitting}
            value={values.firstName}
            onChange={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
          />
          {
            errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>
          }
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Soyadınız"
            disabled={isSubmitting}
            value={values.lastName}
            onBlur={handleBlur('lastName')}
            onChange={handleChange('lastName')}
          />
          {
            errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div>
          }
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="e-posta"
            type="email"
            disabled={isSubmitting}
            value={values.email}
            onBlur={handleBlur('email')}
            onChange={handleChange("email")}
          />
          {
            errors.email && touched.email && <div className='error'>{errors.email}</div>
          }
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            type="textarea"
            value={values.message}
            disabled={isSubmitting}
            onBlur={handleBlur('message')}
            onChange={handleChange("message")}
          />
          {
            errors.message && touched.message && <div className='error'>{errors.message}</div>
          }
        </div>

        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>

    </div>
  )
}

export default Contact
