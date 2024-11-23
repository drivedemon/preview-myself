import {Head, useForm} from '@inertiajs/react';
import {ISkill, ISkillDetail, PageProps} from '@/types';
import DefaultLayout from "@/Layouts/DefaultLayout";
import React, {useState} from "react";
import TextInput from "@/Components/TextInput";

export default function Skill({skills}: PageProps<{skills: ISkill}>) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const {data, setData, post, processing, errors} = useForm({
    data: skills.map((skill: ISkill) => ({
      id: skill.id || '',
      title: skill.title || '',
      skill_details: skill.skill_details.map((skill_detail: ISkillDetail) => ({
        id: skill_detail.id || '',
        name: skill_detail.name || '',
        level: skill_detail.level || '',
      })),
    })),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post(route('skill.store'), {
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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Skill List</h2>}
    >
      <Head title="Skill" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {data.data.map((skill, index) => (
            <div className="my-4 bg-white p-10 flex flex-col gap-8 overflow-hidden shadow-sm sm:rounded-lg">
              <div className="grid lg:grid-cols-12 lg:space-x-8 space-y-6">
                <div className="lg:col-span-9 space-y-4">
                  <div className="grid grid-cols-12 space-y-4" key={skill.id}>
                    <div className="col-span-12 flex flex-col gap-3">
                      {isEdit ? (
                        <TextInput
                          id={`title-${index}`}
                          name={`title-${index}`}
                          value={skill.title}
                          onChange={(e) => {
                            const updatedArray = [...data.data];
                            updatedArray[index] = {...updatedArray[index], title: e.target.value};
                            setData({
                              ...data,
                              data: updatedArray,
                            });
                          }}
                        />
                      ) : (
                        <span className="font-bold text-lg">{skill.title}</span>
                      )}
                    </div>
                    {skill.skill_details.map((skill_detail, index2) => (
                      <div className="col-span-12 grid grid-cols-12 space-x-2" key={skill_detail.id}>
                        <div className="col-span-6 flex flex-col gap-3">
                          {isEdit ? (
                            <TextInput
                              id={`name-${index}-${index2}`}
                              name={`name-${index}-${index2}`}
                              value={skill_detail.name}
                              className="text-sm lg:text-md"
                              onChange={(e) => {
                                const updatedArray = [...data.data];
                                const updatedSkillDetails = [...updatedArray[index].skill_details];

                                updatedSkillDetails[index2] = {
                                  ...updatedSkillDetails[index2],
                                  name: e.target.value,
                                };

                                updatedArray[index] = {
                                  ...updatedArray[index],
                                  skill_details: updatedSkillDetails,
                                };

                                setData({
                                  ...data,
                                  data: updatedArray,
                                });
                              }}
                            />
                          ) : (
                            <span>{skill_detail.name}</span>
                          )}
                        </div>
                        <div className="col-span-6 flex flex-col gap-3">
                          {isEdit ? (
                            <TextInput
                              id={`level-${index}-${index2}`}
                              name={`level-${index}-${index2}`}
                              value={skill_detail.level}
                              className="text-sm lg:text-md"
                              onChange={(e) => {
                                const updatedArray = [...data.data];
                                const updatedSkillDetails = [...updatedArray[index].skill_details];

                                updatedSkillDetails[index2] = {
                                  ...updatedSkillDetails[index2],
                                  level: e.target.value,
                                };

                                updatedArray[index] = {
                                  ...updatedArray[index],
                                  skill_details: updatedSkillDetails,
                                };

                                setData({
                                  ...data,
                                  data: updatedArray,
                                });
                              }}
                            />
                          ) : (
                            <span>{skill_detail.level}</span>
                          )}
                        </div>
                      </div>
                    ))}
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
