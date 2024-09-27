'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod schema
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form Data: ', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto space-y-4"
    >
      {/* Name Input */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          {...register('name')}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
            errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          {...register('email')}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Subject Input */}
      <div>
        <input
          type="text"
          placeholder="Subject"
          {...register('subject')}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
            errors.subject
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message Input */}
      <div>
        <textarea
          placeholder="Message"
          {...register('message')}
          className={`w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-1 ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 '
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-40 h-12 px-auto bg-[#F85959] border text-white rounded-full font-medium text-sm md:text-base hover:bg-white hover:text-[#F85959] border-[#F85959] transition duration-500 ease-in-out"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
