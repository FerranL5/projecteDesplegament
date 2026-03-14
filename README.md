# Projecte Tema 2 – Desenvolupament en Entorn Client

Repositori del Projecte de Síntesi del mòdul de Desplegament d'Aplicacions Web.

> Aplicació web de gestió de tasques desenvolupada amb React, dockeritzada i desplegable amb una única comanda.

---

## Descripció

Aplicació web per gestionar tasques personals. Permet:

- Crear tasques amb una data límit d'entrega
- Marcar tasques com a fetes
- Eliminar tasques

---

## Integrants

| Nom | Rol |
|---|---|
| Ferran Lorca Gallardo |

---

## Repositori

https://github.com/FerranL5/projecteDesplegament/tree/main

---

## Arquitectura

```
┌─────────────────────────────┐
│       Navegador             │
│   http://localhost:8080     │
└────────────┬────────────────┘
             │
┌────────────▼────────────────┐
│   Docker – servei frontend  │
│   Nginx (port 80 intern)    │
│   Serveix el build de React │
└─────────────────────────────┘
```

**Tecnologies:**
- React + Vite
- Nginx (servidor estàtic)
- Docker + Docker Compose

---

## Requisits previs

Abans d'executar el projecte necessites tenir instal·lat:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

> No cal tenir Node.js instal·lat per executar amb Docker.

---

## Execució amb Docker *(recomanada)*

```bash
# 1. Clona el repositori
git clone https://github.com/USUARI/NOM-REPO.git  ← substitueix per la teva URL
cd nom-repo

# 2. Copia el fitxer d'entorn
cp .env.example .env

# 3. Construeix i arrenca l'aplicació
docker compose up --build
```

Un cop arrencat, obre el navegador a:

```
http://localhost:8080
```

Per aturar l'aplicació:

```bash
docker compose down
```

---

## Execució local *(sense Docker)*

```bash
# 1. Clona el repositori
git clone https://github.com/USUARI/NOM-REPO.git
cd nom-repo

# 2. Instal·la les dependències
npm install

# 3. Arrenca el servidor de desenvolupament
npm run dev
```

L'aplicació estarà disponible a `http://localhost:5173`

---

## Variables d'entorn

Copia `.env.example` com a `.env` i omple els valors si cal:

```bash
cp .env.example .env
```

| Variable | Descripció | Exemple |
|---|---|---|
| `VITE_API_URL` | URL de l'API externa (si s'utilitza) | `http://localhost:3000` |

> El fitxer `.env` **no es versiona** mai. Consulta [annex-gestio-secrets.md](./annex-gestio-secrets.md) per més informació.

---

## Estructura del repositori

```
├── src/
│   ├── components/       # Components React
│   ├── App.jsx           # Component principal
│   └── main.jsx          # Punt d'entrada
├── public/
├── Dockerfile            # Build multi-stage (Node + Nginx)
├── docker-compose.yml    # Definició de serveis Docker
├── .env.example          # Variables d'entorn (sense secrets)
├── .gitignore
├── README.md
└── REPORT.md
```

---

## Troubleshooting

**El port 8080 ja està en ús:**
```yaml
# Edita docker-compose.yml i canvia el port esquerre:
ports:
  - "8081:80"   # ara accedeix a http://localhost:8081
```

**Error durant el build de Docker:**
```bash
# Neteja la caché de Docker i torna a intentar-ho
docker compose down
docker system prune -f
docker compose up --build
```

**L'aplicació no es veu al navegador:**
- Comprova que Docker Desktop està en execució
- Assegura't que has esperat que el build finalitzi completament
- Prova `docker compose logs` per veure si hi ha errors

---

## Documentació addicional

- [`REPORT.md`](./REPORT.md) → Informe tècnic del projecte (Git, conflictes, Docker)
- [`annex-gestio-secrets.md`](./annex-gestio-secrets.md) → Gestió de secrets en entorns professionals

---

## Llicència

Projecte acadèmic – 2n DAW · Mòdul Desplegament d'Aplicacions Web
