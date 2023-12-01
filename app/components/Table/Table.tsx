'use client'

import * as React from 'react'
import './Table.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import CancelIcon from '@mui/icons-material/Cancel'
import { Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import {
  deleteProduct,
  getProducts,
  getProductsbyid,
  updateProduct,
} from '@/lib/api-helper/api'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height: '500px',
  pt: 2,
  px: 4,
  pb: 3,
}

export default function BasicTable() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [product, setProduct] = React.useState([])
  const [idnew, setIdNew] = React.useState('')

  // console.log(idnew, 'id')

  const [formdata, setFormData] = React.useState({
    brand: '',
    category: '',
    title: '',
    description: '',
    price: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((preval) => ({
      ...preval,
      [name]: value,
    }))
  }

  const fetchDataById = async (id: any) => {
    try {
      const response = await getProductsbyid(id)
      console.log('response', response)
      setFormData(response)
      setIdNew(id)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleUpdateProduct = async (formdata: any) => {
    try {
      const res = await updateProduct(idnew, formdata)
      handleClose()

      // Updating a product will not update it into the server.
      // It will simulate a PUT/PATCH request and will return the product with modified data

      setFormData({
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

  const router = useRouter()
  const insertPage = () => {
    router.push('/insertpage')
  }

  const fetchData = async () => {
    try {
      const response = await getProducts()
      console.log('response', response.products)
      setProduct(response.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const deleteProductHandler = async (productId: any) => {
    try {
      await deleteProduct(productId)
      alert('deleted')
      fetchData()
    } catch (error) {
      console.error('Error deleting folder:', error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <TableContainer component={Paper}>
        <p
          onClick={insertPage}
          style={{
            float: 'right',
            padding: '15px',
            color: 'blue',
            cursor: 'pointer',
          }}
        >
          {' '}
          Add <AddCircleOutlineIcon />
        </p>
        <Table sx={{ minWidth: 650, padding: 4 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ fontSize: 25 }}>
              <TableCell>
                <h3>Brand</h3>
              </TableCell>
              <TableCell align="left">
                <h3> Category</h3>
              </TableCell>
              <TableCell align="left">
                <h3>Title</h3>
              </TableCell>
              <TableCell align="left">
                <h3>Description</h3>
              </TableCell>
              <TableCell align="left">
                <h3>Price</h3>
              </TableCell>
              <TableCell align="left">
                <h3>Update</h3>
              </TableCell>
              <TableCell align="left">
                <h3>Delete</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((row: any) => (
              <TableRow
                key={row}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.brand}
                </TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">
                  <EditIcon
                    onClick={() => {
                      fetchDataById(row.id)
                      handleOpen()
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <DeleteForeverIcon
                    onClick={() => {
                      deleteProductHandler(row.id)
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div style={{ float: 'right' }}>
                <CancelIcon onClick={handleClose} />
              </div>

              <Typography
                style={{ textAlign: 'center' }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <u> Update Data</u>
              </Typography>

              <div style={{ height: '60%', width: '100%', paddingTop: '50px' }}>
                {/* <form className="input_field" onSubmit={}> */}
                <div>
                  <input
                    className="input_field_new"
                    type="text"
                    autoComplete="off"
                    name="brand"
                    id="brand"
                    placeholder="brand"
                    value={formdata?.brand}
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
                    value={formdata?.category}
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
                      value={formdata?.title}
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
                      value={formdata?.description}
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
                      value={formdata?.price}
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
                      handleUpdateProduct(formdata)
                    }}
                    style={{ height: '30px' }}
                    type="submit"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: '15px', height: '30px' }}
                    type="submit"
                  >
                    Cancel
                  </button>
                </div>
                {/* </form> */}
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  )
}

// export async function getServerSideProps() {
//   const res = await getProducts()
//   return res
// }
