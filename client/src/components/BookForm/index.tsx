import * as React from 'react'
import { Formik, Field } from 'formik'
import { Form, Label } from './styles'
import { string, object, number } from 'yup'
import isISBN = require('validator/lib/isISBN')
import uuid4 = require('uuid/v4')
import uuid = require('uuid');


interface IErrors {
  title: string | null
  author: string | null
  isbn: string | null
  numberOfPages: string | null
  rating: string | null
}

type Props = {
  onSubmit: (values: IBook) => void
  values?: IBook
}

const BookForm: React.FC<Props> = ({ values, onSubmit }) => {
  let initialValues
  
  if (values) {
    initialValues = values
  } else {
    initialValues = {
      id: null,
      title: '',
      author: '',
      isbn: '',
      numberOfPages: 1,
      rating: 1,
      userId: null,
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={object().shape({
        title: string()
          .trim()
          .min(1)
          .required(),
        author: string()
          .trim()
          .min(1)
          .required(),
        isbn: string()
          .required()
          .test('valid-isbn', 'Invalid ISBN', function(value) {
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
}
export default BookForm
