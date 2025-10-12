'use client';

import { RegisterForm } from '@/components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Create your account</h1>
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}






