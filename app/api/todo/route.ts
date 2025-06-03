import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todos_todo.findMany({ orderBy: { id: 'desc' } });
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const todo = await prisma.todos_todo.create({
    data: {
      title,
      description: '',
      completed: false,
      created_at: new Date(),
    },
  });
  return NextResponse.json(todo);
} 