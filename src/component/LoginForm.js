import { useFormik } from 'formik'
import React from 'react'
import validation from './validation'


function LoginForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            color: "",
            checked: false
        },
        validationSchema: validation,
        onSubmit: (values, bag) => {
            bag.resetForm();
        }
    })

    return (
        <div className='container d-flex justify-content-evenly align-items-center gap-5 h-75 loginForm'>
            <div>
                <h2 className='text-center mb-5'>
                    Login Form
                </h2>
                <p>
                    Build forms in React, without the tears
                </p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='mb-2'>Name</label>
                        <input
                            placeholder='Coder'
                            className='form-control'
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                        />
                        <div className='text-danger'>{formik.errors.name && formik.touched.name ? formik.errors.name : null}</div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='mb-2'>Email Address</label>
                        <input
                            placeholder='coder@coder.com'
                            className='form-control'
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        <div className='text-danger'>{formik.errors.email && formik.touched.email ? formik.errors.email : null}</div>
                    </div>

                    <div className='mb-3'>
                    <label htmlFor="color" className='mb-2'>Favourite Color</label>
                        <select name="color" className='form-control' value={formik.values.color} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            <option value="pick">Pick a color</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </select>
                        <div className='text-danger'>{formik.errors.color && formik.touched.color ? formik.errors.color : null}</div>
                    </div>

                    <div className='mb-3'>
                        <input type="checkbox" name="checked" id="checked" onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.checked} />
                        <label htmlFor='checked' className='ps-1'>
                            I agree with the terms and conditions
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={!formik.dirty}>Login</button>

                </form>
            </div>
        </div>
    )
}

export default LoginForm