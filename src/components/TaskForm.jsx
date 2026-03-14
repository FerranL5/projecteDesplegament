import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";

import Input from "./form/Input";
import Select from "./form/Select";
import RadioGroup from "./form/RadioGroup";
import Checkbox from "./form/Checkbox";
import Textarea from "./form/Textarea";

export default function TaskForm({ onAddTask }) {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Dades enviades:", data);

    const newTask = {
      id: crypto.randomUUID(),
      done: false,
      ...data,
    };

    onAddTask(newTask);
    setSubmittedData(newTask);

    reset();
  };

  return (
    <div className="card p-4 mb-4">
      <h2 className="mb-3">Crear nova tasca</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nom de la tasca"
          id="taskName"
          register={register}
          error={errors.taskName}
        />

        <Select
          label="Categoria"
          id="taskCategory"
          register={register}
          error={errors.taskCategory}
          options={["Personal", "Casa", "Feina", "Estudis"]}
        />

        <Input
          label="Data límit"
          id="taskDueDate"
          type="date"
          register={register}
          error={errors.taskDueDate}
        />

        <RadioGroup
          label="Prioritat"
          id="taskPriority"
          register={register}
          error={errors.taskPriority}
          options={[
            { value: "baixa", label: "Baixa" },
            { value: "mitja", label: "Mitja" },
            { value: "alta", label: "Alta" },
          ]}
        />

        <Checkbox
          label="Important"
          id="taskImportant"
          register={register}
        />

        <Textarea
          label="Descripció (opcional)"
          id="taskDescription"
          register={register}
          error={errors.taskDescription}
        />

        <button className="btn btn-primary w-100 mt-3" type="submit">
          Afegir tasca
        </button>
      </form>

      {submittedData && (
        <div className="alert alert-success mt-4">
          <h5>Tasca afegida</h5>
        </div>
      ) && console.log("Dades enviades:", submittedData)
      }
    </div>
  );
}
