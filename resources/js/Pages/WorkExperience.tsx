import {Link, Head} from '@inertiajs/react';
import {PageProps} from '@/types';
import DefaultLayout from "@/Layouts/DefaultLayout";
import {useState} from "react";

export default function WorkExperience({phpVersion}: PageProps<{phpVersion: string}>) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const editAction = () => {
    setIsEdit(!isEdit)
  }

  return (
    <DefaultLayout
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Work Experience</h2>}
    >
      <Head title="Work Experience" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">WorkExperience!</div>
            {isEdit ? <>edit Work Experience!</> : <>not edit Work Experience!</>}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
