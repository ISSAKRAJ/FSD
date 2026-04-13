'use server'
import { db } from '@/db';
import { notices } from '@/db/schema';
import { gt } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getNotices() {
  return await db.select()
    .from(notices)
    .where(gt(notices.expiresAt, Date.now()))
    .orderBy(notices.createdAt);
}

export async function addNotice(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const type = formData.get('type') as any;
  const hours = Number(formData.get('duration'));

  await db.insert(notices).values({
    title,
    content,
    type,
    expiresAt: Date.now() + (hours * 60 * 60 * 1000),
  });

  revalidatePath('/');
}