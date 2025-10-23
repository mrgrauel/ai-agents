# Workout Agent

A Nitro-powered API server with PostgreSQL database integration using Prisma ORM.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database (running locally or remotely)
- bun or yarn

## Setup

### 1. Install Dependencies

```bash
bun install
```

### 2. Database Configuration

Create a `.env` file in the root directory with your PostgreSQL connection string:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/workout_agent?schema=public"
```

Replace `username`, `password`, and database name with your actual PostgreSQL credentials.

### 3. Initialize Database

Run Prisma migrations to create the database schema:

```bash
bun run db:migrate
```

Or for development (without creating migration files):

```bash
bun run db:push
```

This will create the necessary tables in your PostgreSQL database.

### 4. Generate Prisma Client

Generate the Prisma Client (this happens automatically during `bun install`, but you can run it manually):

```bash
bun run db:generate
```

## Development

Start the development server:

```bash
bun run dev
```

The API will be available at `http://localhost:3000`.

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run db:migrate` - Run database migrations
- `bun run db:push` - Push schema changes to database (development)
- `bun run db:studio` - Open Prisma Studio (database GUI)
- `bun run db:generate` - Generate Prisma Client

## Database Management

### Prisma Studio

Access a visual database editor:

```bash
bun run db:studio
```

This opens a browser-based GUI at `http://localhost:5555` where you can view and edit your database records.

### Creating Migrations

After modifying `prisma/schema.prisma`, create a new migration:

```bash
bun run db:migrate
```

## API Endpoints

### POST /api/masumi/start_job

Creates a new job and returns the job details.

**Response:**
```json
{
  "status": "success",
  "job_id": "uuid-here",
  "id": 1,
  "created_at": "2025-10-23T12:00:00.000Z"
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |

## Learn More

- [Nitro Documentation](https://nitro.build)
- [Prisma Documentation](https://www.prisma.io/docs)
- [H3 Documentation](https://h3.unjs.io)
