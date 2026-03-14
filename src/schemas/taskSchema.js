import { z } from "zod";

// Categories vàlides segons l'enunciat
const validCategories = ["Personal", "Casa", "Feina", "Estudis"];

// Schema principal de la tasca
export const taskSchema = z.object({
  taskName: z
    .string()
    .min(5, "El nom ha de tenir almenys 5 caràcters")
    .nonempty("El nom de la tasca és obligatori"),

  taskCategory: z
    .string()
    .refine((value) => validCategories.includes(value), {
      message: "La categoria no és vàlida",
    }),

  taskDueDate: z
    .coerce.date({
      required_error: "La data límit és obligatòria",
      invalid_type_error: "Format de data incorrecte",
    })
    .refine((date) => date > new Date(), {
      message: "La data ha de ser posterior a avui",
    }),

  taskPriority: z
    .string()
    .refine(
      (value) => ["baixa", "mitja", "alta"].includes(value),
      "La prioritat és obligatòria"
    ),

  taskImportant: z.boolean().optional(),

  taskDescription: z
    .string()
    .max(300, "La descripció no pot superar els 300 caràcters")
    .optional(),
});

// Export pràctic: generar tipus a partir del schema (si el necessites)
//export type Task = z.infer<typeof taskSchema>;
