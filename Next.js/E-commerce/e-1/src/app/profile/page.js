'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import InfoBox from '../components/layout/InfoBOx';
import SuccessBox from '../components/layout/SuccessBox';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const session = useSession();
  console.log({ session });
  const [userName, setUserName] = useState('');
  // const [saved, setSaved] = useState(false);
  // const [isSaving, setIsSaving] = useState(false);
  // const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState('');

  const [phone, setPhone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const { status } = session;

  useEffect(() => {
    if (status === 'authenticated') {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
      fetch('/api/profile').then((response) => {
        response.json().then((data) => {
          //setUser(data);
          //setIsAdmin(data.admin);
          //setProfileFetched(true);
          setPhone(data.phone);
          setStreetAddress(data.streetAddress);
          setPostalCode(data.postalCode);
          setCity(data.city);
          setCountry(data.country);
        });
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    //setSaved(false);
    //setIsSaving(true);
    // toast('Saving');
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          image,
          streetAddress,
          phone,
          postalCode,
          city,
          country,
        }),
      });
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Saved successfully',
      error: 'Error saving',
    });

    //setIsSaving(false);
    // toast.success('Profile saved!');
    // if (response.ok) {
    //   setSaved(true);
    //   setTimeout(() => {
    //     setSaved(false);
    //   }, 5000);
    // }
  }

  async function handleFileChange(e) {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set('file', files[0]);

      const UploadPromise = new Promise(async (resolve, reject) => {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: data,
        });
        const link = await response.json();
        setImage(link);
        if (response.ok) resolve();
        else reject();
      });
      await toast.promise(UploadPromise, {
        loading: 'Uploading...',
        success: 'Uploaded successfully',
        error: 'Error uploading',
      });
      // toast('Uploading...');
      //setIsUploading(true);

      // if (response.ok) {
      //   toast.success('Upload compplete!');
      // } else {
      //   toast.error('Upload error!');
      // }

      //setIsUploading(false);
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
        {/* {saved && <SuccessBox>Profile saved!</SuccessBox>} */}
        {/* {isSaving && <InfoBox>Saving...</InfoBox>} */}
        {/* {isUploading && <InfoBox>Uploading...</InfoBox>} */}

        <div className="flex gap-4">
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
            <label>First and last name</label>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Email</label>
            <input type="email" disabled value={session.data.user.email} placeholder="Email" />
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Street adress</label>
            <input
              type="text"
              placeholder="Street adress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <div className="flex gap-4">
              <div>
                {' '}
                <label>Postal code</label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
