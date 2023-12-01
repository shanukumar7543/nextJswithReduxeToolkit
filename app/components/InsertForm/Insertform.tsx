'use client'
import { addProduct, getProductsbyid } from '@/lib/api-helper/api'
import * as React from 'react'

export default function Insertform() {
  const [form, setForm] = React.useState({
    brand: '',
    category: '',
    title: '',
    description: '',
    price: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((preval) => ({
      ...preval,
      [name]: value,
    }))
  }

  const handleCreateProduct = async (form: any) => {
    try {
      const res = await addProduct(form)

      alert('Added sucessfully')

      setForm({
        brand: '',
        category: '',
        title: '',
        description: '',
        price: '',
      })
    } catch (error) {
      console.error('Error adding folder:', error)
    }
  }

  return (
    <div
      style={{
        height: '80%',
        width: '100%',
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        //   justifyItems: 'center',
      }}
    >
      {/* <form
        
        // className="input_field"
        onSubmit={handleCreateProduct}
      > */}
      <div style={{ width: '450px' }}>
        <h2 style={{ textAlign: 'center' }}>ADD DATA FORM</h2>
        <div>
          <input
            className="input_field_new"
            type="text"
            autoComplete="off"
            name="brand"
            id="brand"
            placeholder="brand"
            value={form.brand}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            className="input_field_new"
            type="text"
            autoComplete="off"
            name="category"
            id="category"
            placeholder="category"
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div>
          <div>
            <input
              className="input_field_new"
              type="text"
              autoComplete="off"
              name="title"
              id="title"
              placeholder="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div>
            <input
              className="input_field_new"
              type="text"
              autoComplete="off"
              name="description"
              id="description"
              placeholder="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div>
            <input
              className="input_field_new"
              type="text"
              autoComplete="off"
              name="price"
              id="price"
              placeholder="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div
          className="mb-28"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button
            onClick={() => {
              handleCreateProduct(form)
            }}
            style={{ height: '30px' }}
            type="submit"
          >
            Save
          </button>
          <button style={{ marginLeft: '15px', height: '30px' }} type="submit">
            Cancel
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  )
}
