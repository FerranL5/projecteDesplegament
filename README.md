# Gestor de Tasques amb React

## 1. Descripció de l'aplicació
Aquest projecte és un gestor de tasques desenvolupat amb React. Permet crear, llistar, marcar com a feta i eliminar tasques de manera fàcil. L'aplicació guarda les dades en el navegador mitjançant `localStorage` per assegurar que no es perdin al refrescar la pàgina.

---

## 2. Captura del resultat final

![alt text](<resultat.png>)

---

## 3. Explicació breu de com executar el projecte

1. Clonar el repositori:

```bash
git clone https://github.com/FerranL5/projecte_tema2.git
cd projecte_tema2
```

2. Instal·lar les dependències:

```bash
npm install
```

3. Executar l'aplicació:

```bash
npm run dev
```

4. Obre el navegador a l’adreça que mostra la terminal (normalment `http://localhost:5173`).

5. Per carregar les dades de prova ho fem amb el botó "Carrega dades de prova".

---

## 4. Funcionalitats implementades

- Formulari de creació de tasques amb **React Hook Form** i **validació amb Zod**.
- Llistat de totes les tasques creades.
- Marcar tasques com a fetes / desfer-les.
- Eliminar tasques de la llista.
- Persistència de dades amb **localStorage**.
- Carregar dades de prova amb un botó o automàticament si `VITE_USE_SEED=true`.
- Componentització clara: `TaskForm`, `TaskList`, `TaskItem` i components de formulari reutilitzables (`Input`, `Select`, `RadioGroup`, `Checkbox`, `Textarea`).

---

## 5. Recursos utilitzats, biblioteques i fonts d'informació

- **React 18** + **Vite** com a entorn de desenvolupament.
- **Bootstrap 5** per a l’estil visual.
- **React Hook Form** per gestionar el formulari.
- **Zod** per validar dades de manera declarativa.
- **localStorage** per persistència de dades.
- Fonts i tutorials consultats:
  - [React Hook Form Documentation](https://react-hook-form.com/)
  - [Zod Documentation](https://zod.dev/)
  - [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - Tutorials de gestió d’estat amb React i persistència a localStorage.
  - Google
  - Chat GPT

---

## 6. Passos seguits per la implementació del projecte (bitàcola)

1. **Creació del projecte amb Vite i React.**
2. **Instal·lació de dependències**: Bootstrap, React Hook Form, Zod.
3. **Definició de l’esquema de tasca (`taskSchema.js`)** amb totes les validacions obligatòries.
4. **Creació de components reutilitzables**: Input, Select, RadioGroup, Checkbox, Textarea.
5. **Implementació del formulari (`TaskForm.jsx`)** amb validacions i confirmació visual.
6. **Implementació del llistat de tasques (`TaskList.jsx` i `TaskItem.jsx`)** amb botons de marcat/desmarcat i eliminar.
7. **Gestió de l’estat a `App.jsx`** amb `useState` i `useEffect`.
8. **Persistència amb `localStorage`** per assegurar que les tasques no desapareixen al refrescar.
9. **Creació i integració de dades de prova (`seedTasks.json`)** i botó per carregar-les sense eliminar tasques existents.
10. **Test manual de totes les funcionalitats** per assegurar que la creació, eliminació, toggle i persistència funcionen.