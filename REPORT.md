# REPORT – Projecte de Síntesi

## 1. Dades generals

**Nom del projecte:** Projecte Tema 2 – Desenvolupament en Entorn Client

**Integrants:** Ferran Lorca Gallardo

**Tecnologia principal:** React

**Enllaç al repositori:** https://github.com/FerranL5/projecteDesplegament

**Data d'entrega:** 14/03/36

---

## 2. Estat inicial del projecte

El projecte de partida era una aplicació web de gestió de tasques desenvolupada en React durant el mòdul d'Entorn Client. L'aplicació permetia crear tasques amb data límit, marcar-les com a fetes i eliminar-les.

**Estructura inicial del repositori:**
- Fitxers de codi React dins `/src`
- Fitxer `package.json` amb les dependències
- Cap configuració de Docker
- Cap workflow de branques definit

**Problemes detectats:**
- No existia `.gitignore` adequat
- No hi havia cap `Dockerfile` ni `docker-compose.yml`
- El projecte només era executable en local amb `npm run dev`
- No hi havia documentació tècnica

**Reflexió breu:**

El projecte funcionava en local però no era professional ni reproduïble. Faltava control de versions correcte, dockerització i documentació per poder-lo considerar desplegable en un entorn real.

---

## 3. Workflow Git aplicat

**Model de branques utilitzat:** Feature branching. Cada canvi es desenvolupa en una branca pròpia i es fusiona a `main` mitjançant merge.

**Convencions de noms de branques:**
- `feature/nom-funcionalitat` → per a nous canvis o funcionalitats
- `fix/nom-error` → per a correccions
- `docs/nom-document` → per a documentació

**Estratègia de merge:** Merge directe a `main` un cop validat el canvi a la branca. No s'ha utilitzat rebase per mantenir l'historial de conflictes visible i documentable.

**Exemples de commits rellevants:**

| Commit | Descripció |
|---|---|
| `primer commit` | Configuració inicial del repositori |
| `canvi de titol` | Canvi que provoca el conflicte 1 |
| `canvi del titol des de 2` | Canvi concurrent que provoca el conflicte 1 |
| `Merge remote-tracking branch 'origin/branca-Ferran2'` | Resolució manual del conflicte 1 |
| `afegir axios per a peticions http` | Canvi que provoca el conflicte 2 |
| `afegir dayjs per a gestio de dades` | Canvi concurrent que provoca el conflicte 2 |
| `Merge remote-tracking branch 'origin/branca-Ferran1-deps'` | Resolució manual del conflicte 2 |
| `dockeritzacio de la aplicacio amb nginx` | Afegir Dockerfile i docker-compose |
| `README i REPORT` | Documentació final |

---

## 4. Conflicte 1 – Mateixa línia

### 4.1 Com s'ha provocat

El conflicte es va provocar intencionadament entre dos membres (simulats amb dues màquines i dos comptes GitHub diferents):

- **Alumne 1 (Màquina A):** Va crear la branca `branca-Ferran1` i va modificar el títol principal del component `App.jsx` posant: `<h1 className="mb-4">Gestor de Tasques canvit</h1>`
- **Alumne 2 (Màquina B):** Va crear la branca `branca-Ferran2` partint del mateix punt base i va modificar la mateixa línia posant: `<h1 className="mb-4">Gestor de Tasques canviat des de 2</h1>`

En fer merge de les dues branques a `main`, Git va detectar que la mateixa línia havia estat modificada de manera diferent i no va poder resoldre-ho automàticament.

### 4.2 Missatge d'error generat

```
CONFLICT (content): Merge conflict in src/App.jsx
Automatic merge failed; fix conflicts and then commit the result.
```

![conflicte](/imgs/Captura%20de%20pantalla%20de%202026-03-14%2017-05-49.png)

### 4.3 Marcadors de conflicte

El fitxer `src/App.jsx` va quedar amb el següent aspecte després del merge fallit:

```
<<<<<<< HEAD
      <h1>App de Gestió d'Usuaris</h1>
=======
      <h1>Plataforma de Gestió</h1>
>>>>>>> feature/alumne2-titol
```

![conflicte](/imgs/Captura%20de%20pantalla%20de%202026-03-14%2017-15-49.png)

### 4.4 Resolució aplicada

**Decisió presa:** Es va optar per fusionar les dues propostes en un títol que incorporés ambdues idees:

```jsx
<h1 className="mb-4">Gestor de Tasques canvit</h1>
```

**Validació:** Es va executar `npm run dev` després de la resolució per comprovar que l'aplicació funcionava correctament i el títol es mostrava al navegador.

```bash
git add src/App.jsx
git commit -m "merge: resolució conflicte títol - fusió de les dues propostes"
git push origin main
```

### 4.5 Reflexió

Aquest conflicte ha demostrat que en un equip real, dues persones poden treballar en paral·lel sobre el mateix fitxer sense comunicació prèvia i generar inconsistències. La resolució manual obliga a prendre una decisió argumentada, cosa que en un entorn professional requeriria una conversa entre els membres de l'equip. Git no pot decidir quin canvi és "correcte": aquesta responsabilitat recau sempre en les persones.

---

## 5. Conflicte 2 – Dependències o estructura

### 5.1 Descripció del conflicte

El conflicte es va provocar sobre el fitxer `package.json`, concretament a la secció `dependencies`:

- **Alumne 1 (Màquina A):** Va crear la branca `branca-Ferran1-deps` i va afegir la dependència `axios` per gestionar peticions HTTP (`npm install axios`)
- **Alumne 2 (Màquina B):** Va crear la branca `branca-Ferran2-deps` partint del mateix punt base (sense els canvis de l'Alumne 1) i va afegir la dependència `dayjs` per gestionar dates (`npm install dayjs`)

En fer merge de les dues branques, Git va detectar modificacions simultànies a la mateixa secció del `package.json`.

### 5.2 Error generat

```
CONFLICT (content): Merge conflict in package.json
Automatic merge failed; fix conflicts and then commit the result.
```

El fitxer `package.json` va quedar amb marcadors a la secció `dependencies`:

```
<<<<<<< HEAD
    "axios": "^1.6.0",
=======
    "dayjs": "^1.11.0",
>>>>>>> feature/alumne2-deps
```
### 5.3 Resolució aplicada

Es van conservar les **dues dependències**, ja que totes dues eren necessàries i no hi havia cap incompatibilitat entre elles:

```json
"dependencies": {
  "axios": "^1.6.0",
  "dayjs": "^1.11.0",
}
```

```bash
npm install
git add package.json package-lock.json
git commit -m "merge: resolució conflicte deps - conservem axios i dayjs"
git push origin main
```

### 5.4 Diferències respecte al conflicte anterior

| | Conflicte 1 | Conflicte 2 |
|---|---|---|
| **Fitxer afectat** | `src/App.jsx` (codi) | `package.json` (configuració) |
| **Tipus de canvi** | Modificació de text visible | Afegit de dependències |
| **Resolució** | Triar/combinar una opció | Conservar les dues línies |
| **Impacte** | Visual (UI) | Funcional (llibreries disponibles) |

El segon conflicte és més habitual en equips reals, ja que diverses persones instal·len dependències simultàniament sense coordinar-se. La resolució és generalment més mecànica (conservar totes les dependències), però requereix executar `npm install` per regenerar el `package-lock.json`.

---

## 6. Dockerització

### 6.1 Arquitectura final

El projecte utilitza un únic servei Docker definit al `docker-compose.yml`:

| Servei | Imatge base | Port intern | Port exposat |
|---|---|---|---|
| `frontend` | Nginx (Alpine) | 80 | 8080 |

El `Dockerfile` utilitza una construcció **multi-stage**:
- **Etapa 1 (`build`):** Imatge Node.js 20 Alpine. Instal·la dependències i executa `npm run build` per generar els fitxers estàtics a `/app/dist`
- **Etapa 2 (servidor):** Imatge Nginx Alpine. Copia els fitxers del build i els serveix per HTTP

Aquest enfocament fa que la imatge final sigui lleugera (només Nginx + fitxers estàtics), sense Node.js ni `node_modules`.

### 6.2 Variables d'entorn

Les variables d'entorn del projecte estan documentades al fitxer `.env.example`, que sí es versiona. El fitxer `.env` real **no es versiona** perquè:

- Git guarda l'historial complet: un secret pujat una vegada pot recuperar-se sempre, fins i tot si s'esborra en un commit posterior
- El repositori pot ser clonat per tercers
- Les credencials reals no han de ser mai públiques

Variables disponibles:

| Variable | Descripció |
|---|---|
| `VITE_API_URL` | URL de l'API externa (si s'utilitza) |

En aquest projecte acadèmic les credencials no tenen valor real, però s'ha seguit el procediment professional correcte igualment.

### 6.3 Persistència

Aquest projecte no requereix volums de persistència ja que és una aplicació frontend estàtica sense base de dades. Les dades de les tasques es gestionen en memòria (estat de React) o localStorage del navegador.

### 6.4 Problemes trobats

Durant el procés de dockerització no es van trobar errors bloquejants. El build multi-stage va funcionar correctament a la primera execució un cop verificat que el fitxer `dist/` es generava correctament amb `npm run build`.

---

## 7. Prova de desplegament des de zero

Una persona externa pot executar el projecte seguint aquests passos exactes:

```bash
# 1. Clonar el repositori
git clone https://github.com/FerranL5/projecteDesplegament.git
cd nom-projecte

# 2. Copiar el fitxer d'entorn
cp .env.example .env

# 3. Construir i arrencar
docker compose up --build
```

Un cop finalitzat el build, accedir a:

```
http://localhost:8080
```

**Ports utilitzats:**
- `8080` → Aplicació web (Nginx)

**Credencials de prova:** No n'hi ha. L'aplicació no requereix autenticació.

**Temps aproximat de build:** 1-2 minuts (primera vegada, segons la connexió per descarregar imatges Docker)

> 📸 **[INSEREIX AQUÍ UNA CAPTURA DE L'APLICACIÓ FUNCIONANT AL NAVEGADOR DESPRÉS DE docker compose up --build]**

---

## 8. Repartiment de tasques

El projecte s'ha realitzat en solitari, simulant el treball en parella mitjançant dues màquines amb dos comptes GitHub diferents per poder generar conflictes reals.

| Tasca | Responsable |
|---|---|
| Estructura inicial i `.gitignore` | Ferran Lorca Gallardo |
| Conflicte 1 – branca Alumne 1 | Ferran Lorca Gallardo (Màquina A) |
| Conflicte 1 – branca Alumne 2 | Ferran Lorca Gallardo (Màquina B) |
| Resolució Conflicte 1 | Ferran Lorca Gallardo |
| Conflicte 2 – branca Alumne 1 | Ferran Lorca Gallardo (Màquina A) |
| Conflicte 2 – branca Alumne 2 | Ferran Lorca Gallardo (Màquina B) |
| Resolució Conflicte 2 | Ferran Lorca Gallardo |
| Dockerfile i docker-compose | Ferran Lorca Gallardo |
| README.md | Ferran Lorca Gallardo |
| REPORT.md | Ferran Lorca Gallardo |

---

## 9. Temps invertit

| Àrea | Temps aproximat |
|---|---|
| Git (branques, conflictes, merges) | ~4 hores |
| Docker (Dockerfile, docker-compose, proves) | ~1 hores |
| Documentació (README, REPORT) | ~4 hores |
| **Total** | **~10 hores** |

---

## 10. Reflexió final

**Quina ha estat la part més complexa?**

La part més complexa ha estat la de git, concretament provocar correctament tots els errors. El fet de aver de estar a la branca que toca i no equivocarte al instalar, fer els canvis, els commits o els pulls fa que no hi hagui molt de marge al error per a fer les coses com cal.

**Què faria diferent en un projecte real?**

En un projecte real utilitzaria Pull Requests a GitHub per a cada branca, amb revisió de codi abans de fer el merge. Això evitaria conflictes innecessaris i garantiria que dos membres de l'equip no modifiquen la mateixa part del codi sense coordinació. També definiria des del principi quines variables d'entorn necessita el projecte i com s'injecten en producció.

**He entès realment com funcionen els conflictes i Docker?**

Sí. Els conflictes de Git s'han entès com una conseqüència natural del treball en paral·lel, no com un error del sistema. Git simplement no pot decidir quina versió és "correcta" quan dues persones modifiquen la mateixa línia: aquesta decisió és responsabilitat de l'equip. Quant a Docker, s'ha entès la diferència entre un entorn de desenvolupament (`npm run dev`) i un entorn de producció (build estàtic servit per Nginx), i per què dockeritzar correctament implica treballar amb aquesta distinció.
