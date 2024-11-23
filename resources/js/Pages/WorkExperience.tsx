import {Head, useForm} from '@inertiajs/react';
import {IWorkExperience, PageProps} from '@/types';
import DefaultLayout from "@/Layouts/DefaultLayout";
import React, {useState} from "react";
import TextInput from "@/Components/TextInput";

export default function WorkExperience({workExperiences}: PageProps<{workExperiences: IWorkExperience[]}>) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const {data, setData, post, processing, errors} = useForm({
    data: workExperiences.map((workExperience: IWorkExperience) => ({
      id: workExperience.id || '',
      company_name: workExperience.company_name || '',
      job_position: workExperience.job_position || '',
      start_date: workExperience.start_date || '',
      end_date: workExperience.end_date || '',
      project_name: workExperience.project_name || '',
      description: workExperience.description || '',
    })),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post(route('work_experience.store'), {
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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Work Experience List</h2>}
    >
      <Head title="Work Experience" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {data.data.map((workExperience, index) => (
            <div
              className="my-4 bg-white p-10 flex flex-col gap-8 overflow-hidden shadow-sm sm:rounded-lg"
              key={workExperience.id}
            >
              <div className="grid lg:grid-cols-12 lg:space-x-8 space-y-6">
                <div className="lg:col-span-9 space-y-4">
                  <div className="grid grid-cols-12 space-y-4">
                    <div className="col-span-12 flex flex-col gap-3">
                      <label className="font-semibold text-lg">Company Name</label>
                      {isEdit ? (
                        <TextInput
                          id={`company_name-${index}`}
                          name={`company_name-${index}`}
                          value={workExperience.company_name}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], company_name: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <span className="">{workExperience.company_name}</span>
                      )}
                    </div>
                    <div className="col-span-12 flex flex-col gap-3">
                      <label className="font-semibold text-lg">Project Name</label>
                      {isEdit ? (
                        <TextInput
                          id={`project_name-${index}`}
                          name={`project_name-${index}`}
                          value={workExperience.project_name}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], project_name: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <span>{workExperience.project_name}</span>
                      )}
                    </div>
                    <div className="col-span-12 flex flex-col w-1/2 gap-3">
                      <label className="font-semibold text-lg">Job Position</label>
                      {isEdit ? (
                        <TextInput
                          id={`job_position-${index}`}
                          name={`job_position-${index}`}
                          value={workExperience.job_position}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], job_position: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <span>{workExperience.job_position}</span>
                      )}
                    </div>
                    <div className="col-span-6 flex flex-col gap-3 pr-2">
                      <label className="font-semibold text-lg">Started At</label>
                      {isEdit ? (
                        <TextInput
                          id={`start_date-${index}`}
                          name={`start_date-${index}`}
                          value={workExperience.start_date}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], start_date: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <span>{workExperience.start_date}</span>
                      )}
                    </div>
                    <div className="col-span-6 flex flex-col gap-3">
                      <label className="font-semibold text-lg">Ended At</label>
                      {isEdit ? (
                        <TextInput
                          id={`end_date-${index}`}
                          name={`end_date-${index}`}
                          value={workExperience.end_date}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], end_date: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <span>{workExperience.end_date}</span>
                      )}
                    </div>
                    <div className="col-span-12 flex flex-col gap-3">
                      <label className="font-semibold text-lg">Description</label>
                      {isEdit ? (
                        <textarea
                          id="description"
                          name="description"
                          rows="5"
                          cols="33"
                          className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                          value={workExperience.description}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], description: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <div dangerouslySetInnerHTML={{__html: workExperience.description}}></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </DefaultLayout>
  );
}
