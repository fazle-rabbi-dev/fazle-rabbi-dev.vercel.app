import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { validateEmail } from '@/lib/utils';

export const useContact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);

  const playSound = (type = 'oops') => {
    const soundFile = type === 'success' ? '/sounds/success.wav' : '/sounds/oops.wav';
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      playSound();
      return toast.error('Oops! Please fill out all fields before sending!');
    }

    if (!validateEmail(email)) {
      playSound();
      return toast.error('Oops! Please enter a valid email before sending!');
    }

    if (message.length <= 2) {
      playSound();
      return toast.error('Oops! Please enter a message with at least 3 characters!');
    }

    // Send Message
    try {
      setIsSending(true);
      const response = await fetch(`/api/send-message`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const jsonData = await response.json();

      if (jsonData?.success) {
        Swal.fire({
          title: 'Good job!',
          text: '📬 Your message has been sent! Thanks for getting in touch.',
          icon: 'success',
          confirmButtonColor: '#ad1dbb',
        });
        playSound('success');
        setFormData(initialFormData);
      } else {
        toast.error('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    isSending,
  };
};
