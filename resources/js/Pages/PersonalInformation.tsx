import {Link, Head} from '@inertiajs/react';
import {PageProps} from '@/types';
import DefaultLayout from "@/Layouts/DefaultLayout";

export default function PersonalInformation({phpVersion}: PageProps<{phpVersion: string}>) {
  return (
    <DefaultLayout
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Personal Information</h2>}
    >
      <Head title="Personal Information" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">PersonalInformation!</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
