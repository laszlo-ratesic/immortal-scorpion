import React from 'react';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';

import { Form, Formik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';

import useTheme from '@/store/theme';

interface ContactFormValues {
  username: string;
  email: string;
  message: string;
}

type IErrors = {
  email?: string;
  username?: string;
  message?: string;
};

const ContactForm: React.FC<Record<string, never>> = () => {
  const initialValues: ContactFormValues = {
    username: '',
    email: '',
    message: '',
  };
  const [theme] = useTheme();

  return (
    <div
      className="card"
      style={{
        height: '25em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const { email, username, message } = values;
          const errors: IErrors = {};
          if (!email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }
          if (!username.trim()) {
            errors.username = 'Name is required';
          }
          if (!message.trim()) {
            errors.message = 'Message is required';
          }
          return errors;
        }}
        onSubmit={(values: ContactFormValues, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <span className="p-float-label" style={{ marginTop: '1rem' }}>
              <InputText
                id="username"
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <label htmlFor="username">Your name</label>
            </span>
            <div style={{ margin: '1rem 0' }}>
              {errors.username && touched.username && errors.username}
            </div>
            <span className="p-float-label" style={{ marginTop: '1rem' }}>
              <InputText
                id="email"
                type="email"
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </span>
            <div style={{ margin: '1rem 0' }}>{errors.email && touched.email && errors.email}</div>
            <span className="p-float-label">
              <InputTextarea
                id="message"
                rows={5}
                cols={21}
                autoResize
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <label htmlFor="message">Message</label>
            </span>
            <div style={{ marginBottom: '1rem' }}>
              {errors.message && touched.message && errors.message}
            </div>
            <AwesomeButton
              type={theme === 'light' ? 'secondary' : 'primary'}
              style={{ minWidth: '150px' }}
              disabled={isSubmitting}
            >
              Submit
            </AwesomeButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
