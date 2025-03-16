import {
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
  FormControl,
  FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
const FormComponent = () => {
  const { user, isAuthenticated } = useAuth0();
  const messageFire = (type, title, text) => {
    Swal.fire({
      icon: type,
      title: title,
      text: text,
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [templateParams, setTemplateParams] = useState({
    name: '',
    father_name: '',
    gender: '',
    class: '',
    email: '',
    section: '',
  });

  const onSubmit = (data) => {
    const serviceID = 'service_pju34ih';
    const templateID = 'template_b8opnti';
    const publicKey = 'KNnvJceqgcdCdmwXQ';

    setTemplateParams({
      name: data.Name,
      father_name: data.FatherName,
      gender: data.Gender,
      class: data.ForClass,
      email: data.Email,
      section: data.Section,
    });

    if (isAuthenticated) {
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          console.log(templateParams);

          setTemplateParams({
            name: '',
            father_name: '',
            gender: '',
            class: '',
            email: '',
            section: '',
          });

          messageFire(
            'success',
            'Form Submission',
            'Your form has been submitted successfully'
          );
        })
        .catch((err) => {
          console.error('FAILED...', err);
          messageFire('error', 'Form Submission', 'Something went wrong');
        });
    } else {
      messageFire('error', 'Form submission', 'User is not logged in');
    }
  };

  const requiredText = 'This field is required';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg mx-auto">
      <main className="flex flex-col gap-6">
        {/* Name & Father Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <TextField
            className="w-full"
            label="Name"
            variant="filled"
            {...(isAuthenticated
              ? register('Name', { required: requiredText })
              : {})} // Only spread register if authenticated
            error={isAuthenticated ? !!errors.Name : false}
            helperText={isAuthenticated ? errors.Name?.message : ''}
          />

          <TextField
            className="w-full"
            label="Father Name"
            variant="filled"
            {...(isAuthenticated
              ? register('FatherName', { required: requiredText })
              : {})}
            error={!!errors.FatherName}
            helperText={errors.FatherName?.message}
          />
        </div>

        {/* Gender & For-Class */}
        <div className="flex flex-col md:flex-row gap-4">
          <FormControl className="w-full" error={!!errors.Gender}>
            <NativeSelect
              className="py-3 w-full"
              value={watch('Gender', '')}
              onChange={(e) => {
                setValue('Gender', e.target.value);
                clearErrors('Gender');
              }}
              {...(isAuthenticated
                ? register('Gender', {
                    required: { value: true, message: 'Gender is required' },
                  })
                : {})} // Only register if authenticated
            >
              <option value="" hidden>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </NativeSelect>

            {errors.Gender && (
              <FormHelperText>{errors.Gender.message}</FormHelperText>
            )}
          </FormControl>

          <TextField
            className="w-full"
            label="For-Class"
            variant="filled"
            {...(isAuthenticated
              ? register('ForClass', { required: requiredText })
              : {})} // Only register if authenticated
            error={isAuthenticated ? !!errors.ForClass : false}
            helperText={isAuthenticated ? errors.ForClass?.message : ''}
          />
        </div>

        {/* Email & Section */}
        <div className="flex flex-col gap-4">
          <TextField
            className={`w-full ${isAuthenticated ? 'text-sm' : ''} `}
            type="email"
            label="Email Address"
            value={isAuthenticated ? user.email : ''}
            variant="filled"
            {...(isAuthenticated
              ? register('Email', {
                  required: requiredText,
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Invalid email format',
                  },
                })
              : {})}
            error={isAuthenticated ? !!errors.Email : false}
            helperText={isAuthenticated ? errors.Email?.message : ''}
          />

          <FormControl className="w-full" error={!!errors.Section}>
            <Select
              className="w-full"
              value={watch('Section', '')}
              onChange={(e) => {
                setValue('Section', e.target.value);
                clearErrors('Section');
              }}
              {...(isAuthenticated
                ? register('Section', {
                    required: { value: true, message: requiredText },
                  })
                : {})}
            >
              <MenuItem value="" disabled>
                Select Section
              </MenuItem>
              <MenuItem value="Gohate">Gohate</MenuItem>
              <MenuItem value="Swabi">Swabi</MenuItem>
            </Select>

            {isAuthenticated && errors.Section && (
              <FormHelperText>{errors.Section.message}</FormHelperText>
            )}
          </FormControl>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 cursor-pointer to-purple-200 py-3 rounded-lg hover:from-green-600 hover:to-green-300 transition hover:text-white"
        >
          {isAuthenticated ? 'Submit' : 'Please login first'}
        </button>
      </main>
    </form>
  );
};

export default FormComponent;
