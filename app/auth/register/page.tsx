"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';
import { registerSchema } from '@/lib/validation';



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false); // State to track form validity

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    validateForm(); // Call validation function on name change
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateForm(); // Call validation function on email change
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validateForm(); // Call validation function on password change
  };

  // Function to validate form
  const validateForm = () => {
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      toast.success('Registration successful');
      setName('');
      setEmail('');
      setPassword('');
      window.location.href = '/auth/login';
      // Cela pourrait être un message de succès ou les données de l'utilisateur nouvellement enregistré
    } catch (error) {
      toast.error('this user already exists');
      console.error('Erreur lors de l\'enregistrement :', error);
    }
  };

  return (
    <div className=" p-4 rounded-lg max-w-sm mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-64 md:h-72 w-auto"
            src="https://github.com/adel123ben/estore/blob/main/public/logo.png?raw=true"
            alt="Your Company"
          />
          
        </div>
      <h1 className="text-2xl font-bold mb-2 -mt-12">Register to Continue</h1>
      <p className="mb-6 text-sm text-gray-500">Welcome to Estore</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium">Name</label>
          <input
            type="text"
            required
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            required
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Password</label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <Button
        //   onClick={() => toast.success('Register successful!')}
          disabled={!formValid} // Disable button if form is not valid
          className="flex cursor-pointer bg-neutral-950  w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create account
        </Button>
      </form>

      {/* <div className="my-4 flex items-center justify-center">
        <span className="h-px bg-gray-300 flex-grow t-2 relative" />
        <span className="flex-none uppercase px-2 text-xs text-gray-500 relative">Or</span>
        <span className="h-px bg-gray-300 flex-grow t-2 relative" />
      </div> */}
      {/* <Button className="w-full bg-black text-white mb-2">
        <FaApple size={18} className="text-white mr-2" />
        Login with Apple{"\n "}
      </Button>
      <Button className="w-full bg-white hover:text-white text-gray-700 border ">
        <FcGoogle size={18} className="text-gray-700 mr-2" />
        Login with Google{"\n "}
      </Button> */}
      <div className="mt-5 text-center">
        <span className="text-gray-600 text-sm">Already have an account?</span>
        <Link className="text-blue-600 ml-1 text-sm hover:underline" href="/auth/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
