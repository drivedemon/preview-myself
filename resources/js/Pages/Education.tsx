import {Head, useForm} from '@inertiajs/react';
import {IEducation, PageProps} from '@/types';
import DefaultLayout from "@/Layouts/DefaultLayout";
import React, {useState} from "react";
import TextInput from "@/Components/TextInput";

export default function Education({education}: PageProps<{education: IEducation}>) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const {data, setData, post, processing, errors} = useForm({
    id: education.id || '',
    university_name: education.university_name || '',
    grade: education.grade || '',
    start_year: education.start_year || '',
    end_year: education.end_year || '',
    faculty_name: education.faculty_name || '',
    major_name: education.major_name || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post(route('education.store'), {
      preserveScroll: true,
      forceFormData: true,
      onSuccess: () => {
        setIsEdit(!isEdit);
      },
    });
  };

  return (
    <DefaultLayout
      editing={isEdit}
      editAction={handleEdit}
      processing={processing}
      submitAction={handleSubmit}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Education</h2>}
    >
      <Head title="Education" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-10 flex flex-col gap-8 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="grid lg:grid-cols-12 lg:space-x-8 space-y-6">
              <div className="lg:col-span-9 space-y-4">
                <div className="grid grid-cols-12 space-y-4">
                  <div className="col-span-12 flex flex-col gap-3">
                    <label htmlFor="university_name" className="font-semibold text-lg">University Name</label>
                    {
                      isEdit ?
                        <TextInput
                          id="university_name"
                          name="university_name"
                          value={data.university_name}
                          onChange={(e) => setData('university_name', e.target.value)}
                        />
                        : <span>{data.university_name}</span>
                    }
                  </div>
                  <div className="col-span-3 flex flex-col gap-3">
                    <label htmlFor="grade" className="font-semibold text-lg">Grade</label>
                    {
                      isEdit ?
                        <TextInput
                          type="number"
                          id="grade"
                          name="grade"
                          value={data.grade}
                          onChange={(e) => setData('grade', e.target.value)}
                        />
                        : <span>{data.grade}</span>
                    }
                  </div>
                </div>
                <div className="grid grid-cols-12 space-x-4">
                  <div className="col-span-6 flex flex-col gap-3">
                    <label htmlFor="start_year" className="font-semibold text-lg">Started At</label>
                    {
                      isEdit ?
                        <TextInput
                          type="number"
                          id="start_year"
                          name="start_year"
                          value={data.start_year}
                          onChange={(e) => setData('start_year', e.target.value)}
                        />
                        : <span>{data.start_year}</span>
                    }
                  </div>
                  <div className="col-span-6 flex flex-col gap-3">
                    <label htmlFor="end_year" className="font-semibold text-lg">Ended At</label>
                    {
                      isEdit ?
                        <TextInput
                          type="number"
                          id="end_year"
                          name="end_year"
                          value={data.end_year}
                          onChange={(e) => setData('end_year', e.target.value)}
                        />
                        : <span>{data.end_year}</span>
                    }
                  </div>
                </div>
                <div className="grid grid-cols-12 space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                    <label htmlFor="faculty_name" className="font-semibold text-lg">Faculty Name</label>
                    {
                      isEdit ?
                        <TextInput
                          id="faculty_name"
                          name="faculty_name"
                          value={data.faculty_name}
                          onChange={(e) => setData('faculty_name', e.target.value)}
                        />
                        : <span>{data.faculty_name}</span>
                    }
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                    <label htmlFor="major_name" className="font-semibold text-lg">Major Name</label>
                    {
                      isEdit ?
                        <TextInput
                          id="major_name"
                          name="major_name"
                          value={data.major_name}
                          onChange={(e) => setData('major_name', e.target.value)}
                        />
                        : <span>{data.major_name}</span>
                    }
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</DefaultLayout>
)
  ;
}
