import * as React from 'react'
import { Formik, Field } from 'formik'
import { Form, Label } from './styles'
import { string, object, number } from 'yup'
import isISBN = require('validator/lib/isISBN')

interface IErrors {
  title: string | null
  author: string | null
  isbn: string | null
  numberOfPages: string | null
  rating: string | null
}

const initialValues = {
  title: '',
  author: '',
  isbn: '',
  numberOfPages: 1,
  rating: 1,
}

const BookForm: React.FC = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={() => console.log('submitted')}
    validationSchema={object().shape({
      title: string().required(),
      author: string().required(),
      isbn: string()
        .required()
        .test('valid-isbn', 'Invalid isbn', function(value) {
          return isISBN(value, 10) || isISBN(value, 13)
        }),
      numberOfPages: number()
        .integer()
        .min(1)
        .required(),
      rating: number()
        .integer()
        .min(1)
        .max(5)
        .required(),
    })}
    render={({ handleSubmit, touched, errors }) => (
      <Form onSubmit={handleSubmit}>
        <Label>Title</Label>
        <Field type="text" name="title" />
        {touched.title && errors.title && <div>{errors.title}</div>}
        <Label>Author</Label>
        <Field type="text" name="author" />
        {touched.author && errors.author && <div>{errors.author}</div>}
        <Label>ISBN</Label>
        <Field type="text" name="isbn" />
        {touched.isbn && errors.isbn && <div>{errors.isbn}</div>}
        <Label>Pages</Label>
        <Field type="number" name="numberOfPages" />
        {touched.numberOfPages && errors.numberOfPages && <div>{errors.numberOfPages}</div>}
        <Label>Rating</Label>
        <Field type="number" name="rating" />
        {touched.rating && errors.rating && <div>{errors.rating}</div>}
        <button type="submit">Submit</button>
      </Form>
    )}></Formik>
)

export default BookForm
