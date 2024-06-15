'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ProfilePage() {
  const session = useSession();
  console.log(session);
  const [userName, setUserName] = useState('');
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState('');
  const { status } = session;

  useEffect(() => {
    if (status == 'authenticated') {
      setUserName(session?.data?.user?.name);
      setImage(session.data.user.image);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName, image: image }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
      }, 5000);
    }
  }

  async function handleFileChange(e) {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set('file', files[0]);
      setIsUploading(true);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      const link = await response.json();
      setImage(link);
      setIsUploading(false);
    }
  }

  if (status === 'loading') {
    return 'Loading...';
  }
  if (status === 'unauthenticated') {
    return redirect('/login');
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>

      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-200">
            Profile saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-200">
            Saving...
          </h2>
        )}
        {isUploading && (
          <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-200">
            Uploading...
          </h2>
        )}
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-2 rounder-lg relative max-w-[120px]">
              {image && (
                <Image
                  className="rounded-lg w-full h-full mb-1"
                  src={image}
                  width={250}
                  height={250}
                  alt="avatar"
                />
              )}

              <label>
                <input type="file" className="hidden" onChange={handleFileChange} />
                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input type="email" disabled value={session.data.user.email} placeholder="Email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
