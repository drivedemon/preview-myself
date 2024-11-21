import {Head, useForm} from '@inertiajs/react';
import {IPersonalInformation, PageProps} from '@/types';
import DefaultLayout from "@/Layouts/DefaultLayout";
import React, {useState} from "react";
import TextInput from "@/Components/TextInput";

export default function PersonalInformation({personalInformation, imageUrl}: PageProps<{
  personalInformation: IPersonalInformation,
  imageUrl: string
}>) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('image', file);

      // Generate a preview URL for the new image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const {data, setData, post, processing, errors} = useForm({
    first_name: personalInformation.first_name || '',
    last_name: personalInformation.last_name || '',
    nick_name: personalInformation.nick_name || '',
    mobile_phone: personalInformation.mobile_phone || '',
    email: personalInformation.email || '',
    job_position: personalInformation.job_position || '',
    github_url: personalInformation.github_url || '',
    description: personalInformation.description || '',
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('personal-information.update'), {
      preserveScroll: true,
    });
  };

  return (
    <DefaultLayout
      action={handleEdit}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Personal Information</h2>}
    >
      <Head title="Personal Information" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-10 flex flex-col gap-8 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="grid lg:grid-cols-12 lg:space-x-8 space-y-6">
              <div className="lg:col-span-3 flex flex-col items-center gap-3 relative group">
                <img
                  src={previewImage || imageUrl}
                  alt="Profile"
                  className="w-60 h-60 object-cover rounded-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute mx-auto inset-0 opacity-0 w-60 h-60 rounded-full items-center cursor-pointer"
                />
                {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
              </div>
              <div className="lg:col-span-9 space-y-4">
                <div className="grid grid-cols-12 space-x-4">
                  <div className="col-span-6 flex flex-col gap-3">
                    <label htmlFor="first_name" className="font-semibold text-lg">First Name</label>
                    {
                      isEdit ?
                      <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                      />
                      : <span>{data.first_name}</span>
                    }
                  </div>
                  <div className="col-span-6 flex flex-col gap-3">
                    <label htmlFor="last_name" className="font-semibold text-lg">Last Name</label>
                    {
                      isEdit ?
                        <TextInput
                          id="last_name"
                          name="last_name"
                          value={data.last_name}
                          onChange={(e) => setData('last_name', e.target.value)}
                        />
                        : <span>{data.last_name}</span>
                    }
                  </div>
                </div>
                <div className="grid grid-cols-12 space-x-4">
                  <div className="col-span-4 flex flex-col gap-3">
                    <label htmlFor="nick_name" className="font-semibold text-lg">Nick Name</label>
                    {
                      isEdit ?
                        <TextInput
                          id="nick_name"
                          name="nick_name"
                          value={data.nick_name}
                          onChange={(e) => setData('nick_name', e.target.value)}
                        />
                        : <span>{data.nick_name}</span>
                    }
                  </div>
                </div>
                <div className="grid grid-cols-12 space-x-4">
                  <div className="col-span-6 flex flex-col gap-3">
                    <label htmlFor="mobile_phone" className="font-semibold text-lg">Mobile Phone</label>
                    {
                      isEdit ?
                        <TextInput
                          type="number"
                          id="mobile_phone"
                          name="mobile_phone"
                          value={data.mobile_phone}
                          onChange={(e) => setData('mobile_phone', e.target.value)}
                        />
                        : <span>{data.mobile_phone}</span>
                    }
                  </div>
                  <div className="col-span-6 flex flex-col gap-3">
                    <label htmlFor="email" className="font-semibold text-lg">Email</label>
                    {
                      isEdit ?
                        <TextInput
                          id="email"
                          name="email"
                          value={data.email}
                          onChange={(e) => setData('email', e.target.value)}
                        />
                        : <span>{data.email}</span>
                    }
                  </div>
                </div>
                <div className="grid grid-cols-12 space-x-4">
                  <div className="col-span-4 flex flex-col gap-3">
                    <label htmlFor="job_position" className="font-semibold text-lg">Job Position</label>
                    {
                      isEdit ?
                        <TextInput
                          id="job_position"
                          name="job_position"
                          value={data.job_position}
                          onChange={(e) => setData('job_position', e.target.value)}
                        />
                        : <span>{data.job_position}</span>
                    }
                  </div>
                  <div className="col-span-8 flex flex-col gap-3">
                    <label htmlFor="github_url" className="font-semibold text-lg">Github</label>
                    {
                      isEdit ?
                        <TextInput
                          id="github_url"
                          name="github_url"
                          value={data.github_url}
                          onChange={(e) => setData('github_url', e.target.value)}
                        />
                        : <span>{data.github_url}</span>
                    }
                  </div>
                </div>
                <div className="grid grid-cols-12 space-x-4">
                  <div className="col-span-12 flex flex-col gap-3">
                    <label htmlFor="description" className="font-semibold text-lg">About me</label>
                    {
                      isEdit ?
                        <textarea
                          id="description"
                          name="description"
                          rows="5"
                          cols="33"
                          className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                          value={data.description}
                          onChange={(e) => setData('description', e.target.value)}
                        />
                        : <span>{data.description}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
